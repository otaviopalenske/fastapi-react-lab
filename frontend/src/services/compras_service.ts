import { API_BASE_URL } from "./api";
import type { CompraRequest } from "../interfaces/int_compra";

export async function criarCompra(compraData: CompraRequest) {
    const response = await fetch(`${API_BASE_URL}/compras/criar_compras`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(compraData),
    });

    if (!response.ok) {
        throw new Error(`Erro ao realizar compra: ${response.status}`);
    }

    const data = await response.json();
    return data;
}
