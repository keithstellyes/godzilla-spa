from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, Date, Boolean, SmallInteger
from sqlalchemy.orm import sessionmaker
from sqlalchemy.schema import PrimaryKeyConstraint
from dataclasses import dataclass
import secrets
import toml

Base = declarative_base()

class Person(Base):
	__tablename__ = 'persons'

	id = Column(Integer, primary_key=True)
	name = Column(String(256))

class MeetingType(Base):
	__tablename__ = 'meetingtypes'

	id = Column(Integer, primary_key=True)
	display = Column(String(256))