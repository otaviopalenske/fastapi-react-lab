from pydantic import BaseModel

class ExemploModel(BaseModel):
    id: int
    nome: str
