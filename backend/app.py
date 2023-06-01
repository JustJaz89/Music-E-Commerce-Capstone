from flask import Flask, flash, session, render_template, request, redirect, url_for
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_restful import Api
from flask_migrate import Migrate
from database.models import db
from database.schemas import ma
from resources.auth import LoginResource, RegisterResource, TrackListResource, TrackResource, ContactResource, CartItemResource
from resources.cars import AllCarResource, UserCarResource
from dotenv import load_dotenv
from os import environ
# from app import app
# from flask_bcrypt import generate_password_hash, check_password_hash
# from flask_sqlalchemy import SQLAlchemy

# db = SQLAlchemy()

# Adds variables from .env file to environment
load_dotenv()

# Creates instances of additional libraries
bcrypt = Bcrypt()
jwt= JWTManager()
cors = CORS()
migrate = Migrate()

def create_app():
    """
    App factory that creates app instance
    """
    # Creates app instance
    app = Flask(__name__)

    # Loads config properties from .env file
    app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('SQLALCHEMY_DATABASE_URI')
    app.config['JWT_SECRET_KEY'] = environ.get('JWT_SECRET_KEY')

    # Registers all routes with API
    api = create_routes()

    # Registers Flask app with additional libraries created/imported above
    db.init_app(app)
    ma.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    cors.init_app(app)
    api.init_app(app)
    migrate.init_app(app, db)

    return app


def create_routes():
    """
    Creates Flask Restful instance and registers all Resource routes
    """
    api = Api()
    api.add_resource(RegisterResource, '/api/auth/register')
    api.add_resource(LoginResource, '/api/auth/login')
    api.add_resource(AllCarResource, '/api/cars')
    api.add_resource(UserCarResource, '/api/user_cars')
    # TODO: Create files for your Resources in resources folder, add them here
    api.add_resource(TrackListResource, '/api/tracks')
    api.add_resource(TrackResource, '/api/tracks/<int:track_id>')
    # api.add_resource(GetTrackInformationResource, '/api/<string:track_id>')
    api.add_resource(ContactResource, '/api/contact')
    api.add_resource(CartItemResource, '/api/cart')
    
    return api

# @app.route('/add', methods=['POST'])
# def add_product_to_cart():
# 	cursor = None
# 	try:
# 		_quantity = int(request.form['quantity'])
# 		_code = request.form['code']
# 		# validate the received values
# 		if _quantity and _code and request.method == 'POST':
# 			conn = db.connect()
# 			cursor = conn.cursor(db.cursors.DictCursor)
# 			cursor.execute("SELECT * FROM product WHERE code=%s", _code)
# 			row = cursor.fetchone()
			
# 			itemArray = { row['code'] : {'name' : row['name'], 'code' : row['code'], 'quantity' : _quantity, 'price' : row['price'], 'image' : row['image'], 'total_price': _quantity * row['price']}}
			
# 			all_total_price = 0
# 			all_total_quantity = 0
			
# 			session.modified = True
# 			if 'cart_item' in session:
# 				if row['code'] in session['cart_item']:
# 					for key, value in session['cart_item'].items():
# 						if row['code'] == key:
# 							#session.modified = True
# 							#if session['cart_item'][key]['quantity'] is not None:
# 							#	session['cart_item'][key]['quantity'] = 0
# 							old_quantity = session['cart_item'][key]['quantity']
# 							total_quantity = old_quantity + _quantity
# 							session['cart_item'][key]['quantity'] = total_quantity
# 							session['cart_item'][key]['total_price'] = total_quantity * row['price']
# 				else:
# 					session['cart_item'] = array_merge(session['cart_item'], itemArray)

# 				for key, value in session['cart_item'].items():
# 					individual_quantity = int(session['cart_item'][key]['quantity'])
# 					individual_price = float(session['cart_item'][key]['total_price'])
# 					all_total_quantity = all_total_quantity + individual_quantity
# 					all_total_price = all_total_price + individual_price
# 			else:
# 				session['cart_item'] = itemArray
# 				all_total_quantity = all_total_quantity + _quantity
# 				all_total_price = all_total_price + _quantity * row['price']
			
# 			session['all_total_quantity'] = all_total_quantity
# 			session['all_total_price'] = all_total_price
			
# 			return redirect(url_for('.products'))
# 		else:			
# 			return 'Error while adding item to cart'
# 	except Exception as e:
# 		print(e)
# 	finally:
# 		cursor.close() 
# 		conn.close()
		
# @app.route('/')
# def products():
# 	try:
# 		conn = db.connect()
# 		cursor = conn.cursor(db.cursors.DictCursor)
# 		cursor.execute("SELECT * FROM product")
# 		rows = cursor.fetchall()
# 		return render_template('products.html', products=rows)
# 	except Exception as e:
# 		print(e)
# 	finally:
# 		cursor.close() 
# 		conn.close()

# @app.route('/empty')
# def empty_cart():
# 	try:
# 		session.clear()
# 		return redirect(url_for('.products'))
# 	except Exception as e:
# 		print(e)

# @app.route('/delete/<string:code>')
# def delete_product(code):
# 	try:
# 		all_total_price = 0
# 		all_total_quantity = 0
# 		session.modified = True
		
# 		for item in session['cart_item'].items():
# 			if item[0] == code:				
# 				session['cart_item'].pop(item[0], None)
# 				if 'cart_item' in session:
# 					for key, value in session['cart_item'].items():
# 						individual_quantity = int(session['cart_item'][key]['quantity'])
# 						individual_price = float(session['cart_item'][key]['total_price'])
# 						all_total_quantity = all_total_quantity + individual_quantity
# 						all_total_price = all_total_price + individual_price
# 				break
		
# 		if all_total_quantity == 0:
# 			session.clear()
# 		else:
# 			session['all_total_quantity'] = all_total_quantity
# 			session['all_total_price'] = all_total_price
		
# 		#return redirect('/')
# 		return redirect(url_for('.products'))
# 	except Exception as e:
# 		print(e)
		
# def array_merge( first_array , second_array ):
# 	if isinstance( first_array , list ) and isinstance( second_array , list ):
# 		return first_array + second_array
# 	elif isinstance( first_array , dict ) and isinstance( second_array , dict ):
# 		return dict( list( first_array.items() ) + list( second_array.items() ) )
# 	elif isinstance( first_array , set ) and isinstance( second_array , set ):
# 		return first_array.union( second_array )
# 	return False