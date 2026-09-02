from sqlalchemy.orm import Session
from database.models import Compras_DB

def create_compras_cruds(db: Session, compras_data: dict ):
    nova_compra = Compras_DB(**compras_data)
    db.add(nova_compra)
    db.commit()
    return {
        "status" : "200",
        "message" : "Compra realizada com sucesso!"
    }
