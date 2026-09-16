import type { ProdutoApi } from "../interfaces/int_produtoApi";
import type { CardProdutoProps } from "../interfaces/int_cardProduto";

// Imagem placeholder para produtos sem foto cadastrada
const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&q=80";

/**
 * Transforma o objeto vindo da API no formato que o componente CardProduto espera.
 * Usa imagem_url da API quando disponível, senão usa placeholder.
 */
export function mapProdutoApiToCard(produtoApi: ProdutoApi): CardProdutoProps {
    return {
        id: produtoApi.id,
        photo: produtoApi.imagem_url || PLACEHOLDER_IMAGE,
        title: produtoApi.nome,
        price: produtoApi.preco,
    };
}

/**
 * Transforma uma lista inteira de produtos da API para o formato dos cards.
 */
export function mapProdutosApiToCards(produtosApi: ProdutoApi[]): CardProdutoProps[] {
    return produtosApi.map(mapProdutoApiToCard);
}
