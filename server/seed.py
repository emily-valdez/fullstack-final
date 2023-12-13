#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Local imports
from app import app
from models import db, Book, Author, User, UserBook

if __name__ == '__main__':
    with app.app_context():
        print("Clearing data...")
        Book.query.delete()
        Author.query.delete()
        User.query.delete()
        UserBook.query.delete()
    
        print("Starting seed...")
        print("Populating authors...")
        sjm = Author(name="Sarah J. Maas", publisher="Bloomsbury", website="https://sarahjmaas.com/", author_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702422783/li8bwpjsnkwmfdwhcvjg.webp")
        abby = Author(name="Abby Jimenez", publisher="Hachette Book Group", website="https://www.authorabbyjimenez.com/", author_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702423040/j1drc2qiostgccimiyah.webp")
        jar = Author(name="Jennifer L. Armentrout", publisher="Blue Box Press", website="https://jenniferlarmentrout.com/", author_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702429213/wea7yrpw68jzqx4zakhp.png")
        
        authors = [sjm, abby, jar]
    
        print("Printing books...")
        sjm_acotar = Book(title="A Court of Thorns and Roses", year="2015", author_id="1", heart_count="3", pepper_count="2", book_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702427585/oowhuwcmh1hexnpr5abh.jpg")
        jar_cogb = Book(title="The Crown of Gilded Bones", year="2021", author_id="3", heart_count="5", pepper_count="11", book_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702428843/cdhdzkwbdbi7tiwnj6nw.jpg")
        sjm_acosf = Book(title="A Court of Silver Flames", year="2022", author_id="1", heart_count="8", pepper_count="9", book_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702428491/q9swzxrrtlf8gwn9x17z.jpg")
        abby_yourstruly = Book(title="Yours Truly", year="2023", author_id="2", heart_count="6", pepper_count="1", book_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702428266/l8ppp68msjvxypag3zgk.jpg")
        books = [sjm_acotar, jar_cogb, sjm_acosf, abby_yourstruly]
    
        print("Adding users...")
        emily = User(username="morpheus")
        kassidy = User(username="kassinova")
        peyton = User(username="nymeria")
        users =[emily, kassidy, peyton]

        db.session.add_all(authors)
        db.session.add_all(books)
        db.session.add_all(users)
        db.session.commit()
        
        print("Seeding complete!")