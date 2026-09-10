from pydantic import BaseModel
from typing import Optional

class Produto_Response(BaseModel):
    id: int
    nome: str
    preco: float
    sku: str
    imagem_url: Optional[str] = None

    class Config:
        from_attributes = True
