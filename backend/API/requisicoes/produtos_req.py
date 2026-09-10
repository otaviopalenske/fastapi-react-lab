from sqlalchemy.orm import Session
from .model import Create_Produtos, Produto_Response
from database import create_produtos_cruds, get_all_produtos

def create_produtos_req (db: Session, produtos_data: Create_Produtos):
    try:
        produto_data_dict= {
            "nome":produtos_data.nome,
            "preco":produtos_data.preco,
            "sku" : produtos_data.sku,
            "imagem_url" : produtos_data.imagem_url
        }

        resultado = create_produtos_cruds(db, produto_data_dict)
        return resultado
    except Exception as e:
        return {
            "status": "400",
            "message": str(e)
        }

def get_all_produtos_req(db: Session):
    try:
        produtos = get_all_produtos(db)
        return [Produto_Response.model_validate(p) for p in produtos]
    except Exception as e:
        return {
            "status": "400",
            "message": str(e)
        }

