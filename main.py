from fastapi import FastAPI
from datetime import datetime, date, time
from pydantic import BaseModel
from modelos import teste

app = FastAPI()

# Criação de classes para tipagem de dados
# Pydantic garante que os dados enviados estejam corretos
# Para esse projeto será usado apenas para garantir o tipo de dados enviado para a função
class DadosDataHora(BaseModel):
    data: date
    hora: time

# @ decorator (se alguém der get no /data-hora o fastAPI vai rodar a função buscar_data_hora) 
@app.get("/data-hora")
def buscar_data_hora():
    # usar a biblioteca datetime para pegar a data e hora atual do sistema
    agora = datetime.now()
    
    # variáveis data_formatada e hora_formatada para pegar o horário e data atual
    # strftime é usado para formatar a data e hora
    data_formatada = agora.strftime("%d/%m/%Y")
    hora_formatada = agora.strftime("%H:%M:%S")
    
    # Retorna o JSON com os dados pedidos
    return {
        "mensagem": f"Hoje é dia {data_formatada} e agora são {hora_formatada}.",
        "data": data_formatada,
        "hora": hora_formatada
    }

@app.post("/exibir-terminal")
def imprimir_data_hora(payload: DadosDataHora):
    # O print sai no console do servidor (terminal do VS Code / Antigravity)
    print(f"\n[POST RECEBIDO] Data: {payload.data} | Hora: {payload.hora}\n")
    
    return {
        "status": "sucesso",
        "detalhes": f"Data {payload.data} e hora {payload.hora} impressas no terminal com sucesso!"
    }