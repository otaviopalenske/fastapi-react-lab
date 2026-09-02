from pydantic import BaseModel

class Create_Compras(BaseModel):
    id_pessoa: int
    id_produto: int


