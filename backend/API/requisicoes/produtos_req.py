from sqlalchemy.orm import Session
from .model import Create_Produtos
from database import create_produtos_cruds

def create_produtos_req (db: Session, produtos_data: Create_Produtos):
    try:
        produto_data_dict= {
            "nome":produtos_data.nome,
            "preco":produtos_data.preco,
            "sku" : produtos_data.sku
        }

        resultado = create_produtos_cruds(db, produto_data_dict)
        return resultado
    except Exception as e:
        return {
            "status": "400",
            "message": str(e)
        }





