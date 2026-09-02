from sqlalchemy import Column, Integer, VARCHAR
from sqlalchemy.orm import relationship
from database.base import Base

class Pessoas_DB(Base):
    __tablename__ = "pessoas"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(VARCHAR(50), index=True)
    cpf = Column(VARCHAR(11), index=True)
    email = Column(VARCHAR(70), index=True)
    
    compras = relationship("Compras_DB", back_populates="pessoa")