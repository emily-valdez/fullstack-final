#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Local imports
from app import app
from models import db, User, Book, Author

with app.app_context():
    
    # Delete all rows in tables
    Book.query.delete()
    Author.query.delete()
    
    
    # Add Author instances to database
    sjm = Author(name="Sarah J. Maas", publisher="Bloomsbury", tiktok="")
    
    abby = Author(name="Abby Jimenez", publisher="Hachette Book Group", tiktok="@authorabbyjimenez")
    
    db.session.add_all([sjm, abby])
    db.session.commit()
    
  
    # 1-to-many relationship between Author and Book
    sjm_acotar = Book(title="A Court of Thrones and Roses", year="2015", author_id="1", heart_count="2", pepper_count="5", author=sjm)
    
    abby_yourstruly = Book(title="Yours Truly", year="2023", author_id="2", heart_count="6", pepper_count="1", author=abby)
    

    db.session.add_all([sjm_acotar, abby_yourstruly])
    db.session.commit()