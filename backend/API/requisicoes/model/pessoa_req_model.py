from pydantic import BaseModel

class Create_Pessoas(BaseModel):
    nome: str
    cpf: str
    email: str

