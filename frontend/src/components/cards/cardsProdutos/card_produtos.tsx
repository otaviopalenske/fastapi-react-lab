import { useNavigate } from 'react-router-dom';
import type { CardProdutoProps } from '../../../interfaces/int_cardProduto';
import './card_produtos.css';

export default function CardProduto({produto}: { produto: CardProdutoProps}) {
          const navigate = useNavigate();

          const handleComprar = () => {
            navigate('/checkout', {
              state: {
                id_produto: produto.id,
                nome_produto: produto.title,
                preco_produto: produto.price,
                foto_produto: produto.photo,
              }
            });
          };

          return (
            <div className="product-card" 
              style={{ 
                width: produto.width ? produto.width : '280px', 
                height: produto.height ? produto.height : '380px' 
              }}
            >
              <div className="product-image-container">
                <img src={produto.photo} alt={`Foto do produto ${produto.title}`} className="product-image" />
              </div>

              <div className="product-info">
                <h3 className="product-title">{produto.title}</h3>
                <p className="product-price">{produto.price}</p>
                <button className="buy-button" onClick={handleComprar}>Comprar</button>
              </div>
            </div>
          );
        }
