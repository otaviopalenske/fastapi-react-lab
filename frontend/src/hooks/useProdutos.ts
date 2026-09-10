import { useState, useEffect } from "react";
import type { CardProdutoProps } from "../interfaces/int_cardProduto";
import { getProdutos } from "../services/produtos_service";
import { mapProdutosApiToCards } from "../dataMappers/produtos_mapper";

export function useProdutos() {
    const [produtos, setProdutos] = useState<CardProdutoProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProdutos() {
            try {
                setLoading(true);
                setError(null);
                const produtosApi = await getProdutos();
                const cardProdutos = mapProdutosApiToCards(produtosApi);
                setProdutos(cardProdutos);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Erro desconhecido ao buscar produtos");
            } finally {
                setLoading(false);
            }
        }

        fetchProdutos();
    }, []);

    return { produtos, loading, error };
}
