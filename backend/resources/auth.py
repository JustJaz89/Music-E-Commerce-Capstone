from flask import request
from flask_jwt_extended import create_access_token, verify_jwt_in_request
from flask_restful import Resource
from database.models import db, User, Track
from database.schemas import register_schema, user_schema, track_schema, tracks_schema, contact_schema, cart_item_schema
from marshmallow import ValidationError
import datetime


class RegisterResource(Resource):
    """ User Registration, creates new user """
    def post(self):
        form_data = request.get_json()
        try:
            new_user = register_schema.load(form_data)
            new_user.hash_password()
            db.session.add(new_user)
            db.session.commit()
            return user_schema.dump(new_user), 201
        except ValidationError as err:
            return err.messages, 400

class LoginResource(Resource):
    """ User Login, responds with access token """
    def post(self):
        form_data = request.get_json()
        user = db.one_or_404(
            User.query.filter_by(username=form_data.get('username')),
            description=f"No user with that username."
        )
        authorized = user.check_password(form_data.get('password'))
        if not authorized:
            return {'error': 'Username or password invalid'}, 401
        expires = datetime.timedelta(days=7)
        print(user.id)
        additional_claims = {
            'id': user.id,
            'username': user.username,
            'first_name': user.first_name
        }
        access_token = create_access_token(identity=str(user.id), additional_claims=additional_claims, expires_delta=expires)
        return {'access': access_token}, 200
    
class TrackListResource(Resource):
    def get(self):
        all_tracks = Track.query.all()
        return tracks_schema.dump(all_tracks)
    
    def post(self):
        form_data = request.get_json()
        try:
            new_track = track_schema.load(form_data)
            db.session.add(new_track)
            db.session.commit()
            return track_schema.dump(new_track), 201
        except ValidationError as err:
            return err.messages, 400
        
class TrackResource(Resource):
    def get(self, track_id):
        track_from_db = Track.query.get_or_404(track_id)
        return track_schema.dump(track_from_db), 200
    
    def put(self, track_id):
        track_from_db = Track.query.get_or_404(track_id)
        if "title" in request.json:
            track_from_db.title = request.json["title"]
        if "time" in request.json:
            track_from_db.time = request.json["time"]
        if "bpm" in request.json:
            track_from_db.bpm = request.json["bpm"]
        if "genre" in request.json:
            track_from_db.genre = request.json["genre"]
        if "release_date" in request.json:
            track_from_db.release_date = request.json["release_date"]
        if "price" in request.json:
            track_from_db.price = request.json["price"]
        db.session.commit()
        return track_schema.dump(track_from_db), 200
    
    def delete(self, track_id):
        track_from_db = Track.query.get_or_404(track_id)
        db.session.delete(track_from_db)
        db.session.commit()
        return "", 204 
    
# class GetTrackInformationResource(Resource):
#     def get(self, track_id, title, time, bpm, genre, release_date, price):
#         tracks = Track.query.filter_by(track_id=track_id)
#         tracks = tracks_schema.dump(tracks)
#         response = {
#             "track_id": track_id,
#             "title": title,
#             "time": time,
#             "bpm": bpm,
#             "genre": genre,
#             "release_date": release_date,
#             "price": price,
#         }
#         try:
#             verify_jwt_in_request()
#             # user_id = get_jwt_identity()
#             # is_favorited = Favorite.query.filter_by(book_id=book_id, user_id=user_id).first() is not None
#             # response['is_favorited'] = is_favorited
#         except:
#             pass
        
#         return response, 200

class ContactResource(Resource):  
    def post(self):
        form_data = request.get_json()
        # name = form_data["name"]
        # email = form_data["email"]
        # message = form_data["message"]
        try:
            new_contact = contact_schema.load(form_data)
            db.session.add(new_contact)
            db.session.commit()
            return contact_schema.dump(new_contact), 201
        except ValidationError as err:
            return err.messages, 400
        
class CartItemResource(Resource):  
    def post(self):
        form_data = request.get_json()
        try:
            new_cart_item = cart_item_schema.load(form_data)
            db.session.add(new_cart_item)
            db.session.commit()
            return cart_item_schema.dump(new_cart_item), 201
        except ValidationError as err:
            return err.messages, 400