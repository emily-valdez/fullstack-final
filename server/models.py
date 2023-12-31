# from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db, bcrypt

# Models
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())
    
    @property
    def password_hash(self):
        return self._password_hash

    @password_hash.setter
    def password_hash(self, plain_text_password):
        byte_object = plain_text_password.encode('utf-8')
        encrypted_password_object = bcrypt.generate_password_hash(byte_object)
        hashed_password_string = encrypted_password_object.decode('utf-8')
        self._password_hash = hashed_password_string

    def authenticate(self, password_string):
        byte_object = password_string.encode('utf-8')
        return bcrypt.check_password_hash(self.password_hash, byte_object)
    
    # relationships
    users_books = db.relationship('UserBook', back_populates='user', cascade='all, delete-orphan')
    books = association_proxy('users_books', 'book')
    
    # serialization rules
    serialize_rules = ('-users_books.user', '-_password_hash', )
    
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
    book_img = db.Column(db.String)
    
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
    website = db.Column(db.String)
    author_img = db.Column(db.String)
    
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
    serialize_rules = ('-user.users_books', '-book.users_books', )
    
    def __repr__(self):
        return f'<UserBook {self.id}>'