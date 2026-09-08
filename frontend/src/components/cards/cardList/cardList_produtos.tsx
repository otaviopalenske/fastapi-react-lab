import type { CardProdutoProps } from '../../../interfaces/int_cardProduto';
import './cardList_produtos.css';
import CardProduto from '../cardsProdutos/card_produtos';

export default function CardListProdutos({ produtos }: { produtos: CardProdutoProps[] }) {
  return (
    <>
      <div className='card-list-produtos'>
      {produtos.map((produto, index) => {
        const formattedPrice = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(produto.price);

        return (
            <CardProduto 
            key={index} 
            produto={{
               photo: produto.photo, 
               title: produto.title, 
               price: formattedPrice, 
               width: produto.width, 
               height: produto.height
              }} 
            />
        );
      })}
      </div>
    </>
  );
}
