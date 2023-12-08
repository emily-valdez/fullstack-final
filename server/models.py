from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db, metadata, bcrypt

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
    
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String)
    # _password_hash = db.Column(db.String)
    
    # @property
    # def password_hash(self):
    #     return self._password_hash

    # @password_hash.setter
    # def password_hash(self, password):
    #     password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
    #     self._password_hash = password_hash.decode('utf-8')

    # def authenticate(self, password):
    #     return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))
    
    # Add relationships
    books = db.Relationship('Book', secondary=users_books, back_populates='users')
    
    # Add serialization rules
    
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
    
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String)
    year = db.Column(db.Integer)
    heart_count =db.Column(db.Integer)
    pepper_count =db.Column(db.Integer)
    author_id = db.Column(db.String, db.ForeignKey('authors.id'))
    
    # Add relationships
    users = db.Relationship('User', secondary=users_books, back_populates='books')
    authors = db.Relationship('Author', back_populates="books")
    
    # Add serialization rules
    
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
    
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    publisher = db.Column(db.String)
    tiktok = db.Column(db.String)
    
    # Add relationships
    books = db.Relationship('Book', back_populates="author")
    
    # Add serialization rules
        
    def __repr__(self):
        return f'<Author {self.id}, {self.name}, {self.publisher}, {self.tiktok}>'
    
class UserBook(db.Model, SerializerMixin):
    __tablename__ = 'users_books'
    
    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'))
    
    # Add relationships
    user = db.Relationship('User', back_populates = 'users_books')
    book = db.Relationship('Book', back_populates = 'user_books')
    
    # Add serialization rules
    serialize_rules = ('-user.users_books', '-book.users.books', )
    
    def __repr__(self):
        return f'<UserBook {self.id}'