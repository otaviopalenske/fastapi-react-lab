from sqlalchemy import Column, Integer, VARCHAR, DECIMAL
from sqlalchemy.orm import relationship
from database.base import Base

class Produto_DB(Base):
    __tablename__ = "produtos"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(VARCHAR(50), index=True)
    preco = Column(DECIMAL(10, 2), index=True)
    sku = Column(VARCHAR(50), index=True)
    
    compras = relationship("Compras_DB", back_populates="produto")