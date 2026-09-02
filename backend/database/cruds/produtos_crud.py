from sqlalchemy.orm import Session
from database.models import Produto_DB

def create_produtos_cruds(db: Session, produto_data: dict ):
    novo_produto = Produto_DB(**produto_data)
    db.add(novo_produto)
    db.commit()
    return {
        "status" : "200",
        "message" : "Produtos inseridos com sucesso!"
    }

def get_by_idProduto(db: Session, id_produto:int):
    produto = db.query(Produto_DB).filter(Produto_DB.id == id_produto).first()
    return produto