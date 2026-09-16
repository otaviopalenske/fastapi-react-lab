import os
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
from .base import Base
from .models import Pessoas_DB, Produto_DB, Compras_DB

load_dotenv()

db_user = os.getenv("DB_USER", "root")
db_password = os.getenv("DB_PASSWORD", "")
db_host = os.getenv("DB_HOST", "localhost")
db_port = os.getenv("DB_PORT", "3306")
db_name = os.getenv("DB_NAME", "fastapi_react_lab")
alchemy_sql = os.getenv("ALCHEMY_SQL", "mysql+pymysql://")

# Garante que o banco de dados exista antes de conectar diretamente a ele
server_url = f"{alchemy_sql}{db_user}:{db_password}@{db_host}:{db_port}"
try:
    temp_engine = create_engine(server_url, isolation_level="AUTOCOMMIT")
    with temp_engine.connect() as conn:
        conn.execute(text(f"CREATE DATABASE IF NOT EXISTS {db_name}"))
    temp_engine.dispose()
except Exception as e:
    print(f"Aviso ao verificar banco de dados: {e}")

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    f"{server_url}/{db_name}",
)

if DATABASE_URL:
    engine = create_engine(DATABASE_URL, future=True)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine, future=True)
else:
    engine = None
    SessionLocal = None

def get_db():
    if SessionLocal:
        db = SessionLocal()
        try:
            yield db
        finally:
            db.close()

Base.metadata.create_all(bind=engine)
print("Banco de dados criado com sucesso!")
