# from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db, metadata #,bcrypt

# Association table for relationship between users and books
users_books = db.Table(
    'users_books',
    metadata,
    db.Column('users_id', db.Integer, db.ForeignKey(
        'users.id'), primary_key=True),
    db.Column('books_id', db.Integer, db.ForeignKey(
        'books.id'), primary_key=True)
)

# Models
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    # _password_hash = db.Column(db.String)
    
    # relationships
    users_books = db.relationship('UserBook', back_populates='user', cascade='all, delete-orphan')
    books = association_proxy('users_books', 'books')
    
    # serialization rules
    serialize_rules = ('-users_books.user', )
    
    # validations
    def validate_username(self, key, username):
        if len(username) > 1:
            return username
        else:
            raise ValueError('Username must be at least one character.')
    
    def __repr__(self):
        return f'<User {self.id}, {self.username}>'
       


class Book(db.Model, SerializerMixin):
    __tablename__ = 'books'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, unique=True)
    year = db.Column(db.Integer)
    heart_count =db.Column(db.Integer)
    pepper_count =db.Column(db.Integer)
    author_id = db.Column(db.String, db.ForeignKey('authors.id'))
    
    # relationships
    users_books = db.relationship('UserBook', back_populates='book', cascade='all, delete-orphan')
    users = association_proxy('users_books', 'users')
    authors = db.relationship('Author', back_populates='books')
    
    # serialization rules
    serialize_rules = ('-users_books.book', '-authors.books', )
    
    # validations
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
        
    def __repr__(self):
        return f'<Book {self.id}, {self.title}, {self.year}>'
    
    
class Author(db.Model, SerializerMixin):
    __tablename__ = 'authors'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
    publisher = db.Column(db.String)
    tiktok = db.Column(db.String)
    
    # relationships
    books = db.relationship('Book', back_populates='authors')
    
    # serialization rules
    serialize_rules = ('-books.authors', )
        
    def __repr__(self):
        return f'<Author {self.id}, {self.name}, {self.publisher}, {self.tiktok}>'
    
class UserBook(db.Model, SerializerMixin):
    __tablename__ = 'users_books'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'))
    
    # relationships
    user = db.relationship('User', back_populates='users_books')
    book = db.relationship('Book', back_populates='users_books')
    
    # serialization rules
    serialize_rules = ('-user.users_books', '-book.users.books', )
    
    def __repr__(self):
        return f'<UserBook {self.id}>'