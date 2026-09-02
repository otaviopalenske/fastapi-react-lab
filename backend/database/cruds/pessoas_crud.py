from sqlalchemy.orm import Session
from database.models import Pessoas_DB

def create_pessoas_cruds(db: Session, pessoa_data: dict ):
    nova_pessoa = Pessoas_DB(**pessoa_data)
    db.add(nova_pessoa)
    db.commit()
    return {
        "status" : "200",
        "message" : "Dados Pessoas inseridos com sucesso!"
    }

def get_by_idPessoa(db: Session, id_pessoa:int):
    pessoa = db.query(Pessoas_DB).filter(Pessoas_DB.id == id_pessoa).first()
    return pessoa