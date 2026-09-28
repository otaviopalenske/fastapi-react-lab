import { useState, useEffect, useRef, useCallback } from 'react';
import type { SectorPartner } from '../interfaces/int_sectorCardProps';
import { GRID_SIZE, ROTATION_INTERVAL_MS, ANIM_DURATION_MS } from '../constants/partnerRotation_const';


/**
 * Hook que gerencia a rotação automática de parceiros em um grid 2×4.
 *
 * Regras:
 * - Exibe até 8 parceiros simultaneamente.
 * - A cada 2,5s, escolhe aleatoriamente 1–3 posições para substituir.
 * - Os parceiros que saem vão para o fim da fila; os que entram vêm do início.
 * - A rotação pausa com `pauseRotation()` e retoma com `resumeRotation()`.
 */
export function usePartnerRotation(partners: SectorPartner[]) {
    const [grid, setGrid] = useState<SectorPartner[]>(() => partners.slice(0, GRID_SIZE));
    const [exitingSlots, setExitingSlots] = useState<boolean[]>(Array(GRID_SIZE).fill(false));
    const [enteringSlots, setEnteringSlots] = useState<boolean[]>(Array(GRID_SIZE).fill(false));

    // Refs para evitar closures stale
    const waitingQueueRef = useRef<SectorPartner[]>(partners.slice(GRID_SIZE));
    const gridRef = useRef<SectorPartner[]>(partners.slice(0, GRID_SIZE));
    const isPausedRef = useRef(false);
    const isAnimatingRef = useRef(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Sincroniza gridRef com o state
    useEffect(() => {
        gridRef.current = grid;
    }, [grid]);

    // Re-inicializa quando a lista de partners muda
    useEffect(() => {
        const newGrid = partners.slice(0, GRID_SIZE);
        gridRef.current = newGrid;
        waitingQueueRef.current = partners.slice(GRID_SIZE);
        setGrid(newGrid);
        setExitingSlots(Array(GRID_SIZE).fill(false));
        setEnteringSlots(Array(GRID_SIZE).fill(false));
    }, [partners]);

    const rotate = useCallback(() => {
        if (waitingQueueRef.current.length === 0 || isAnimatingRef.current) return;

        isAnimatingRef.current = true;

        const currentGrid = [...gridRef.current];
        const queue = [...waitingQueueRef.current];

        // Número de trocas: 1–3, limitado pelo tamanho da fila
        const maxSwaps = Math.min(3, queue.length);
        const swapCount = Math.floor(Math.random() * maxSwaps) + 1;

        // Escolhe posições aleatórias sem repetição
        const positions: number[] = [];
        const pool = Array.from({ length: GRID_SIZE }, (_, i) => i);
        for (let i = 0; i < swapCount; i++) {
            const idx = Math.floor(Math.random() * pool.length);
            positions.push(pool.splice(idx, 1)[0]);
        }

        // Fase 1: fade-out das posições escolhidas
        const exitMask = Array(GRID_SIZE).fill(false);
        positions.forEach((p) => (exitMask[p] = true));
        setExitingSlots(exitMask);

        // Fase 2: após a saída, troca os dados e inicia fade-in
        setTimeout(() => {
            const newGrid = [...currentGrid];
            const ejected: SectorPartner[] = [];

            positions.forEach((pos) => {
                ejected.push(newGrid[pos]);
                newGrid[pos] = queue.shift()!;
            });

            // Parceiros que saíram vão para o final da fila (rotação circular)
            waitingQueueRef.current = [...queue, ...ejected];
            gridRef.current = newGrid;
            setGrid(newGrid);

            setExitingSlots(Array(GRID_SIZE).fill(false));

            const enterMask = Array(GRID_SIZE).fill(false);
            positions.forEach((p) => (enterMask[p] = true));
            setEnteringSlots(enterMask);

            // Fase 3: limpa animação de entrada
            setTimeout(() => {
                setEnteringSlots(Array(GRID_SIZE).fill(false));
                isAnimatingRef.current = false;
            }, ANIM_DURATION_MS);
        }, ANIM_DURATION_MS);
    }, []);

    // Loop principal de rotação
    useEffect(() => {
        if (partners.length <= GRID_SIZE) return; // nada para rotacionar

        const tick = () => {
            if (!isPausedRef.current) {
                rotate();
            }
            timerRef.current = setTimeout(tick, ROTATION_INTERVAL_MS);
        };

        timerRef.current = setTimeout(tick, ROTATION_INTERVAL_MS);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [partners.length, rotate]);

    const pauseRotation = useCallback(() => {
        isPausedRef.current = true;
    }, []);

    const resumeRotation = useCallback(() => {
        isPausedRef.current = false;
    }, []);

    return { grid, exitingSlots, enteringSlots, pauseRotation, resumeRotation };
}
