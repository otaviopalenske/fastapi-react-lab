from pydantic import BaseModel

class Create_Produtos(BaseModel):
    nome: str
    preco: float
    sku: str

