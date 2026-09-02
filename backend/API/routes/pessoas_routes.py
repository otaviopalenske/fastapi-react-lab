from fastapi import APIRouter
from requisicoes import Create_Pessoas, create_pessoas_req
from database import get_db
from sqlalchemy.orm import Session
from fastapi import Depends

pessoas_rt = APIRouter(tags=["Pessoas"], prefix="/pessoas")

@pessoas_rt.post("/criar_pessoas")
def criar_pessoas_rt(pessoa_data: Create_Pessoas, db: Session = Depends(get_db)):
    resultado = create_pessoas_req(db, pessoa_data)
    return resultado