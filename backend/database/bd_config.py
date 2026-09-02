import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
from .base import Base
from .models import Pessoas_DB, Produto_DB, Compras_DB

load_dotenv()

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    f"{os.getenv('ALCHEMY_SQL')}{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}",
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
print ("Bando de dados criado com sucesso!")
