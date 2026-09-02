from .pessoas_crud import create_pessoas_cruds, get_by_idPessoa
from .produtos_crud import create_produtos_cruds, get_by_idProduto
from .compras_crud import create_compras_cruds

__all__ = [
    #pessoas
    "get_by_idPessoa",
    "create_pessoas_cruds",

    #Produtos
    "create_produtos_cruds",
    "get_by_idProduto",

    #Compras
    "create_compras_cruds"
]