import { API_BASE_URL } from "./api";
import type { ProdutoApi } from "../interfaces/int_produtoApi";

export async function getProdutos(): Promise<ProdutoApi[]> {
    const response = await fetch(`${API_BASE_URL}/produtos/listar`);

    if (!response.ok) {
        throw new Error(`Erro ao buscar produtos: ${response.status}`);
    }

    const data: ProdutoApi[] = await response.json();
    return data;
}
