from fastapi import APIRouter
from requisicoes import Create_Produtos, Produto_Response, create_produtos_req, get_all_produtos_req
from database import get_db
from sqlalchemy.orm import Session
from fastapi import Depends

produtos_rt = APIRouter(tags=["Produtos"], prefix="/produtos")

@produtos_rt.get("/listar", response_model=list[Produto_Response])
def listar_produtos_rt(db: Session = Depends(get_db)):
    resultado = get_all_produtos_req(db)
    return resultado

@produtos_rt.post("/criar_produtos")
def criar_produtos_rt(produto_data: Create_Produtos, db: Session = Depends(get_db)):
    resultado = create_produtos_req(db, produto_data)
    return resultado
