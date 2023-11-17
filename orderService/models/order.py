from sqlalchemy import Column, Integer, String, ForeignKey, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()


class Phone(Base):
    __tablename__ = 'phone'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    brand = Column(String(255), nullable=False)
    price = Column(Float, nullable=False)
    imageUrl = Column(String(255))


class Order(Base):
    __tablename__ = 'command'

    id = Column(Integer, primary_key=True, autoincrement=True)
    phone_id = Column(Integer, ForeignKey('phone.id'))
    userName = Column(String(255), nullable=False)
    address = Column(String(255), nullable=False)

    phone = relationship('Phone', backref='command')
