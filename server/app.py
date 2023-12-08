#!/usr/bin/env python3

from flask import Flask, request, make_response
from flask_restful import Api, Resource

# Local imports
from config import app, db, api
# Model imports
from models import User, Book, Author, UserBook


@app.route('/')
def index():
    return '<button>Please do not touch my backend.</button>'

class Users (Resource):
    def get(self):
        user_list = [n.to_dict() for n in User.query.all()]
        response = make_response (user_list, 200,)
        return response
api.add_resource(Users, '/users')
    
class UsersById (Resource):
    def get(self):
        user = User.query.get(id)
        if not user:
            return make_response ({'Error: User not found.'}, 404)
        return make_response(user.to_dict(), 200)
api.add_resource(UsersById, '/users/<id>')
    
class Books (Resource):
    def get(self):
        book_list = [n.to_dict() for n in Book.query.all()]
        response = make_response(book_list, 200)
        return response
api.add_resource(Books, '/books')

class BooksById (Resource):
    def get(self):
        book = Book.query.get(id)
        if not book:
            return make_response ({'Error: Book not found.'}, 404)
        return make_response(book.to_dict(), 200)
api.add_resource(BooksById, '/books/<id>')
        
class Authors (Resource):
    def get(self):
        author_list = [n.to_dict() for n in Author.query.all()]
        response = make_response (author_list, 200,)
        return response
api.add_resource(Authors, '/authors')

class AuthorsById (Resource):
    def get(self):
        author = Author.query.get(id)
        if not author:
            return make_response ({'Error: Author not found.'}, 404)
        return make_response(author.to_dict(), 200)
api.add_resource(AuthorsById, '/authors/<id>')

class UsersBooks (Resource):
    def post(self):
        params = request.json
        try:
            user_book = UserBook(
                user_id = params['user_id'],
                book_id = params['book_id']
            )
        except:
            return make_response({"Errors": ["validation errors"]}, 422)
        db.session.add(user_book)
        db.session.commit()
        return make_response(
            user_book.to_dict(rules = (
                'user_id', 'book_id', 'user', 'book', '-user.users_books', '-book.users_books'
            )), 201
        )
api.add_resource(UsersBooks, '/users_books')

class UsersBooksById (Resource):
    def delete(self, id):
        user_book = UserBook.query.get(id)
        if not user_book:
            return make_response({"Error": "UserBook not found."}, 404)
        db.session.delete(user_book)
        db.session.commit()
        return make_response ("", 204)
api.add_resource(UsersBooksById, '/users_books/<id>')
    
if __name__ == '__main__':
    app.run(port=5555, debug=True)

