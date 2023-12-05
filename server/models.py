from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    
    # Add serialization rules
    
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String)
    
    # Add relationships
    
    # Add validations
    def validate_username(self, key, username):
        if len(username) > 1:
            return username
        else:
            raise ValueError('Name must be more than one character.')
        
class Author(db.Model, SerializerMixin):
    __tablename__ = 'authors'
    
    # Add serialization rules
    
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    publisher = db.Column(db.String)
    tiktok = db.Column(db.String)
    
    # Add relationships
    
    # Add validations
        

class Books(db.Model, SerializerMixin):
    __tablename__ = 'books'
    
    # Add serialization rules
    
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String)
    year = db.Column(db.Integer)
    author_name = db.Column(db.String, db.ForeignKey('authors.name'))
    
    # Add relationships
    
    # Add validations
    def validate_title(self, key, title):
        if len(title) >= 1:
            return title
        else:
            raise ValueError('Title must be at least one character.')
        
    def validate_year(self, key, year):
        if len(year) == 4:
            return year
        else:
            raise ValueError('Year must be four numbers.')