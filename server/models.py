from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db, metadata

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
    
    # Add serialization rules
    
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String)
    #password_hash
    
    # Add relationships
    books = db.relationship(
        'Book', secondary=users_books, back_populates='users'
    )
    
    # Add validations
    def validate_username(self, key, username):
        if len(username) > 1:
            return username
        else:
            raise ValueError('Username must be longer than one character.')
    
    def __repr__(self):
        return f'<User {self.id}, {self.username}>'
       


class Book(db.Model, SerializerMixin):
    __tablename__ = 'books'
    
    # Add serialization rules
    
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String)
    year = db.Column(db.Integer)
    author_id = db.Column(db.String, db.ForeignKey('authors.id'))
    heart_count =db.Column(db.Integer)
    pepper_count =db.Column(db.Integer)
    
    # Add relationships
    users = db.relationship(
        'User', secondary=users_books, back_populates='users'
    )
    author = db.relationship('Author', back_populates="books")
    
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
        
    def __repr__(self):
        return f'<Books {self.id}, {self.title}, {self.year}>'
    
    
class Author(db.Model, SerializerMixin):
    __tablename__ = 'authors'
    
    # Add serialization rules
    
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    publisher = db.Column(db.String)
    tiktok = db.Column(db.String)
    
    # Add relationships
    books = db.relationship('Book')
        
    def __repr__(self):
        return f'<Author {self.id}, {self.name}, {self.publisher}, {self.tiktok}>'