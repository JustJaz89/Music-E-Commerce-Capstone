from flask_marshmallow import Marshmallow
from marshmallow import post_load, fields
from database.models import User, Car, Track, Contact, CartItem

ma = Marshmallow()

# Auth Schemas
class RegisterSchema(ma.Schema):
    """
    Schema used for registration, includes password
    """
    id = fields.Integer(primary_key=True)
    username = fields.String(required=True)
    password = fields.String(required=True)
    first_name = fields.String(required=True)
    last_name = fields.String(required=True)
    email = fields.String(required=True)
    phone_number = fields.String(required=True)
    class Meta:
        fields = ("id", "username",  "password", "first_name", "last_name", "email", "phone_number")

    @post_load
    def create_user(self, data, **kwargs):
        return User(**data)
    
class UserSchema(ma.Schema):
    """
    Schema used for displaying users, does NOT include password
    """
    id = fields.Integer(primary_key=True)
    username = fields.String(required=True)
    first_name = fields.String(required=True)
    last_name = fields.String(required=True)
    email = fields.String(required=True)
    phone_number = fields.String(required=True)
    class Meta:
        fields = ("id", "username", "first_name", "last_name", "email", "phone_number")

register_schema = RegisterSchema()
user_schema = UserSchema()
users_schema = UserSchema(many=True)


# Car Schemas
class CarSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    make = fields.String(required=True)
    model = fields.String(required=True)
    year = fields.Integer()
    user_id = fields.Integer()
    user = ma.Nested(UserSchema, many=False)
    class Meta:
        fields = ("id", "make", "model", "year", "user_id", "user")
    
    @post_load
    def create_car(self, data, **kwargs):
        return Car(**data)

car_schema = CarSchema()
cars_schema = CarSchema(many=True)


# TODO: Add your schemas below

class TrackSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    title_img = fields.String(required=True)
    title = fields.String(required=True)
    time = fields.Float()
    bpm = fields.Integer()
    genre = fields.String(required=True)
    release_date = fields.Date()
    price = fields.Float()
    class Meta:
        fields = ("id", "title", "time", "bpm", "genre", "release_date", "price")

    @post_load
    def create_track(self, data, **kwargs):
        return Track(**data)
    
track_schema = TrackSchema()
tracks_schema = TrackSchema(many=True)

class ContactSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    name = fields.String(required=True)
    email = fields.String(required=True)
    message = fields.String(required=True)
    class Meta:
        fields = ("id", "name", "email", "message")

    @post_load
    def create_contact(self, data, **kwargs):
        return Contact(**data)
    
contact_schema = ContactSchema()
contacts_schema = ContactSchema(many=True)

class CartItemSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    track_id = fields.Integer()
    quantity = fields.Integer()
    class Meta:
        fields = ("id", "track_id", "quantity")

    @post_load
    def create_cart_item(self, data, **kwargs):
        return CartItem(**data)
    
cart_item_schema = CartItemSchema()
cart_items_schema = CartItemSchema(many=True)