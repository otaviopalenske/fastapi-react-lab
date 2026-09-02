from sqlalchemy import Column, Integer, ForeignKey, Date, Time
from sqlalchemy.orm import relationship
from database.base import Base
from datetime import date, datetime

class Compras_DB(Base):
    __tablename__ = "compras"

    id = Column(Integer, primary_key=True, index=True)
    id_pessoa = Column(Integer, ForeignKey("pessoas.id"))
    id_produto = Column(Integer, ForeignKey("produtos.id"))
    data_compra = Column(Date, index=True, default=date.today)
    horario_compra = Column(Time, index=True, default=lambda: datetime.now().time())
    
    pessoa = relationship("Pessoas_DB", back_populates="compras")
    produto = relationship("Produto_DB", back_populates="compras")