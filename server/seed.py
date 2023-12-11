#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Local imports
from app import app
from models import db, Book, Author, User, UserBook

if __name__ == '__main__':
    with app.app_context():
        print("Clearing data")
        Book.query.delete()
        Author.query.delete()
        User.query.delete()
        UserBook.query.delete()
    
        print("Starting seed...")
        print("Populating authors")
        sjm = Author(name="Sarah J. Maas", publisher="Bloomsbury", tiktok="")
        abby = Author(name="Abby Jimenez", publisher="Hachette Book Group", tiktok="@authorabbyjimenez")
        authors = [sjm, abby]
    
        print("Printing books")
        sjm_acotar = Book(title="A Court of Thrones and Roses", year="2015", author_id="1", heart_count="2", pepper_count="5")
        abby_yourstruly = Book(title="Yours Truly", year="2023", author_id="2", heart_count="6", pepper_count="1")
        books = [sjm_acotar, abby_yourstruly]
    

        db.session.add_all(authors)
        db.session.add_all(books)
        db.session.commit()
        
        print("Seeding complete!")