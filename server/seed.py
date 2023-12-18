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
        casey = Author(name="Casey McQuiston", publisher="St. Martin's Griffin", website="https://www.caseymcquiston.com/", author_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702480987/ffrteclj1jnknjnqol7g.webp")
        ana = Author(name="Ana Huang", publisher="Bloom Books", website="https://anahuang.com/", author_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702481501/vupk5dy9cbkzhgxfzwwf.png")
        ali = Author(name="Ali Hazelwood", publisher="Berkley Books", website="https://alihazelwood.com/", author_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702787836/pn9dz0lafs66isv50rdm.jpg")
        ch = Author(name="Colleen Hoover", publisher="Grand Central Publishing", website="https://www.colleenhoover.com/", author_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702896012/st48yucbfnylcwxtssyd.png")
        ssc = Author(name="Scarlett St. Clair", publisher="Sourcebooks", author_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702896223/jd95obspf3kn7l8s41lb.jpg", website="https://scarlettstclair.com/")
        rf = Author(name="R.F. Kuang", publisher="Harper Voyager", author_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702896866/bpaqyofzfv8fbwqt7mdi.jpg", website="https://rfkuang.com/")
        smg = Author(name="Silvia Moreno-Garcia", publisher="Del Rey", author_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702897096/ddri2htysnpbslinkig5.jpg", website="https://silviamoreno-garcia.com/")
        # Author(name="", publisher="", author_img="", website="")
        authors = [sjm, abby, jar, casey, ana, ali, ch, ssc, rf, smg]
        
    
        print("Printing books...")
        sjm_acotar = Book(title="A Court of Thorns and Roses", year="2015", author_id="1", heart_count="3", pepper_count="2", book_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702427585/oowhuwcmh1hexnpr5abh.jpg")
        jar_cogb = Book(title="The Crown of Gilded Bones", year="2021", author_id="3", heart_count="5", pepper_count="11", book_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702428843/cdhdzkwbdbi7tiwnj6nw.jpg")
        sjm_acosf = Book(title="A Court of Silver Flames", year="2022", author_id="1", heart_count="8", pepper_count="9", book_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702428491/q9swzxrrtlf8gwn9x17z.jpg")
        abby_yourstruly = Book(title="Yours Truly", year="2023", author_id="2", heart_count="6", pepper_count="1", book_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702428266/l8ppp68msjvxypag3zgk.jpg")
        casey_rwrb = Book(title="Red, White, & Royal Blue", year="2019", author_id="4", heart_count="10", pepper_count="4", book_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702480702/nvyfkmpveikp0u0htcus.webp")
        ana_twisted = Book(title="Twisted Love", year="2022", author_id="5", heart_count="8", pepper_count="9", book_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702481405/bbuwrcmq26rftb5f2wxa.webp")
        ali_love= Book(title="The Love Hypothesis", year="2021", author_id=6, heart_count="9", pepper_count="5", book_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702788137/bdisa4qvrouipzsxqq1g.jpg")
        ch_verity = Book(title="Verity", year="2018", author_id="7", heart_count="3", pepper_count="6", book_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702895767/q78ip3ufdyjewlt8nmnq.webp")
        ssc_tod = Book(title="A Touch of Darkness", year="2019", author_id="8", heart_count="11", pepper_count="9", book_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702896402/trfgzlsihwnpu5mhzgdf.jpg")
        rf_babel = Book(title="Babel", year="2022", author_id="9", heart_count="7", pepper_count="0", book_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702896769/sc75fze9kvshqittqat9.jpg")
        smg_mg = Book(title="Mexican Gothic", year="2020", author_id="10", heart_count="9", pepper_count="0", book_img="https://res.cloudinary.com/debhztqlv/image/upload/v1702897231/kb3wjzlfraplq4eovgbj.webp")
        # Book(title="", year="", author_id="", heart_count="", pepper_count="", book_img="")
        books = [sjm_acotar, jar_cogb, sjm_acosf, abby_yourstruly, casey_rwrb, ana_twisted, ali_love, ch_verity, ssc_tod, rf_babel, smg_mg]
    
    
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