#!/usr/bin/env python3
import ipdb
from flask import request, make_response, session
from flask_restful import Resource
# from flask_migrate import Migrate

# Local imports
from config import app, db, api

# Model imports
from models import User, Book, Author, UserBook

# class Users (Resource):
#     def get(self):
#         user_list = [n.to_dict() for n in User.query.all()]
#         response = make_response (user_list, 200,)
#         return response
# api.add_resource(Users, '/api/v1/users')
    
# class UsersById (Resource):
#     def get(self):
#         user = User.query.get(id)
#         if not user:
#             return make_response ({'Error: User not found.'}, 404)
#         return make_response(user.to_dict(), 200)
# api.add_resource(UsersById, '/api/v1/users/<int:id>')

class Users(Resource):
    def post(self):
        data = request.get_json()
        user = User(username=data['username'], email=data['email'], password_hash=data['password'])
        db.session.add(user)
        db.session.commit()
        session['user_id'] = user.id
        return make_response({'user': user.to_dict()}, 201 )
api.add_resource(Users, '/api/v1/users')  
    

@app.route('/api/v1/authorized')
def authorized():
    try:
        user = User.query.filter_by(id=session.get('user_id')).first()
        return make_response(user.to_dict(), 200)
    except:
        return make_response({ "error": "User not found"}, 404)

@app.route('/api/v1/logout', methods=['DELETE'])
def logout():
    session['user_id'] = None 
    return make_response('', 204)

@app.route('/api/v1/login', methods=['POST'])
def login():
    data = request.get_json()
    try:
        user = User.query.filter_by(username=data['username']).first()
        if user.authenticate(data['password']):
            session['user_id'] = user.id
            return make_response({'user': user.to_dict()}, 200)
        else:
            return make_response({'error': 'incorrect password'}, 401)
    except:
        return make_response({'error': 'username incorrect'}, 401)
    
class Books (Resource):
    def get(self):
        book_list = [n.to_dict() for n in Book.query.all()]
        response = make_response(book_list, 200)
        return response

    # def post(self):
    #     data = request.json
    #     try:
    #         newBook = Book(
    #             title = data['title'],
    #             year = data['year'],
    #             heart_count = 0,
    #             pepper_count = 0,
    #             author_id = [],
    #             book_img = data['image']
    #         )
    #         db.session.add(newBook)
    #         db.session.commit()
    #         return make_response(newBook.to_dict), 202
    #     except ValueError:
    #         return make_response({"error", 404})
api.add_resource(Books, '/api/v1/books')

class BooksById (Resource):
    def get(self, id):
       book = Book.query.get(id)
       if not book:
           return make_response({"error"}, 404)
       return make_response({'book': book.to_dict()}, 200)
    
    def patch(self, id):
        data = request.get_json()
        book = Book.query.filter(Book.id==id).first()
        for attr in data:
            setattr(book, attr, data[attr])
            db.session.add(book)
            db.session.commit()
            
        response_dict = book.to_dict()
        response = make_response(response_dict, 200)
        return response
    
api.add_resource(BooksById, '/api/v1/books/<int:id>')
        
class Authors (Resource):
    def get(self):
        author_list = [n.to_dict() for n in Author.query.all()]
        response = make_response (author_list, 200,)
        return response
api.add_resource(Authors, '/api/v1/authors')

class AuthorsById (Resource):
    def get(self):
        author = Author.query.get(id)
        if not author:
            return make_response ({'Error: Author not found.'}, 404)
        return make_response(author.to_dict(), 200)
api.add_resource(AuthorsById, '/api/v1/authors/<int:id>')

class UsersBooks (Resource):
    def get(self):
        user = User.query.filter(User.id == session['user_id']).first()
        return make_response([book.to_dict() for book in user.books], 200)
    
    def post(self):
        params = request.json
        try:
            newuser_book = UserBook(
                user_id = params['user_id'],
                book_id = params['book_id']
            )
        except:
            return make_response({"Errors": ["validation errors"]}, 422)
        db.session.add(newuser_book)
        db.session.commit()
        return make_response(
            newuser_book.to_dict(rules = (
                'user_id', 'book_id', 'user', 'book', '-user.users_books', '-book.users_books'
            )), 201
        )
api.add_resource(UsersBooks, '/api/v1/users_books')

# class UsersBooksById (Resource):
#     def delete(self, id):
#         user_book = UserBook.query.get(id)
#         if not user_book:
#             return make_response({"Error": "UserBook not found."}, 404)
#         db.session.delete(user_book)
#         db.session.commit()
#         return make_response ("", 204)
# api.add_resource(UsersBooksById, '/api/v1/users_books/<int:id>')

@app.route('/')
def index():
    return '<h1>Please do not touch my backend.</h1>'

@app.before_request
def check_logged_id():
    if request.endpoint in ['books'] and not session.get('user_id'):
        return make_response({'error': 'Unauthorized. Please login'}, 401)
    
if __name__ == '__main__':
    app.run(port=5555, debug=True)


# book = Book.query.filter_by(id=id).first()
        # for attr in request.form:
        #     setattr(record, attr, request.form[attr])
            
        # db.session.add(record)
        # db.session.commit()
        
        # response_dict = record.to_dict()
        # response = make_response(response_dict, 200)
        # return response
        
         # def patch(self, id):
    #     spicy = Book.query.filter_by(id=id).first()
    #     params = request.json
    #     spicy.pepper_count = params['pepper_count']
    #     db.session.commit()
    #     return make_response({'spicy': spicy.to_dict()}, 200)