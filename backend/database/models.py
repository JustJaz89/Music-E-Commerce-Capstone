from flask_bcrypt import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    phone_number = db.Column(db.String(100), nullable=False)

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def __repr__(self):
        return self.username

class Car(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    make = db.Column(db.String(255), nullable=False)
    model = db.Column(db.String(255), nullable=False)
    year = db.Column(db.Integer)
    # Adds user_id as an Integer column on the car table which references the id column on user table
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    # Establishes object relation between car-user so we can grab values like car.user.username
    user = db.relationship("User")

# TODO: Add your models below, remember to add a new migration and upgrade database

class Track(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    track_img = db.Column(db.String(255), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    time = db.Column(db.Numeric(4,2), nullable=False)
    bpm = db.Column(db.Integer)
    genre = db.Column(db.String(255), nullable=False)
    release_date = db.Column(db.Date)
    price = db.Column(db.Numeric(4,2), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User")

    def __repr__(self):
        return f"{self.title} {self.time} {self.bpm} {self.genre} {self.release_date} {self.price}"

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    message = db.Column(db.String(255), nullable=False)

class CartItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    track_id = db.Column(db.Integer)
    quantity = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey("user_id"))