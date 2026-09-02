from fastapi import APIRouter
from requisicoes import Create_Compras, create_compras_req
from database import get_db
from sqlalchemy.orm import Session
from fastapi import Depends

compras_rt = APIRouter(tags=["Compras"], prefix="/compras")

@compras_rt.post("/criar_compras")
def criar_compras_rt(compras_data: Create_Compras, db: Session = Depends(get_db)):
    resultado = create_compras_req(db, compras_data)
    return resultado