import React from 'react';
import type { CardProdutoProps } from '../../../interfaces/int_cardProduto';
import './card_produtos.css';

export default function CardProduto({produto}: { produto: CardProdutoProps}) {
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
                <button className="buy-button">Comprar</button>
              </div>
            </div>
          );
        }

