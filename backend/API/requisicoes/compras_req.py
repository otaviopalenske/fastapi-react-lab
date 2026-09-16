from sqlalchemy.orm import Session
from .model import Create_Compras
from database import create_compras_cruds, get_by_idPessoa, get_by_idProduto
from datetime import datetime

def create_compras_req (db: Session, compras_data: Create_Compras):
    try:
        pessoa = get_by_idPessoa(db, compras_data.id_pessoa)
        produto = get_by_idProduto(db, compras_data.id_produto)

        if not pessoa:
            return {
                "status": "404",
                "message": "Usuário não encontrado no sistema"
            }

        if not produto:
            return {
                "status": "404",
                "message": "Produto não encontrado"
            }

        # Verifica se os dados informados conferem com o cadastro
        if (pessoa.nome != compras_data.nome or
            pessoa.cpf != compras_data.cpf or
            pessoa.email != compras_data.email):
            return {
                "status": "400",
                "message": "Os dados informados não conferem com o cadastro do usuário"
            }

        dados_compras_dict= {
            "id_pessoa":compras_data.id_pessoa,
            "id_produto":compras_data.id_produto,
            "data_compra":datetime.now().date(),
            "horario_compra":datetime.now().time()
        }
        resultado = create_compras_cruds(db, dados_compras_dict)

        if resultado["status"] == "200":
            return {
                "dados compra" : {
                    "cliente": {
                    "nome" : pessoa.nome,
                    "cpf" : pessoa.cpf,
                    "email" : pessoa.email
                    },
                    "produto": {
                        "nome" : produto.nome,
                        "preco" : float(produto.preco),
                        "sku" : produto.sku
                    },
                    "data_compra" : str(dados_compras_dict["data_compra"]),
                    "horario_compra" : str(dados_compras_dict["horario_compra"])
                },
                "compra" : resultado
            }
        return resultado
    except Exception as e:
        return {
            "status": "400",
            "message": str(e)
        }

    