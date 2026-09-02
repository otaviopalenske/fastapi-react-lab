from sqlalchemy.orm import Session
from .model import Create_Pessoas
from database import create_pessoas_cruds

def create_pessoas_req (db: Session, pessoa_data: Create_Pessoas):
    try:
        pessoa_data_dict= {
            "nome":pessoa_data.nome,
            "cpf":pessoa_data.cpf,
            "email":pessoa_data.email
        }
        
        resultado = create_pessoas_cruds(db, pessoa_data_dict)
        return resultado
    except Exception as e:
        return {
            "status": "400",
            "message": str(e)
        }