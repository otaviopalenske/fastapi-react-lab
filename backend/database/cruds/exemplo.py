from sqlalchemy.orm import Session
# from database.models.exemplo import Exemplo

def get_exemplo(db: Session, exemplo_id: int):
    return db.query(Exemplo).filter(Exemplo.id == exemplo_id).first()
