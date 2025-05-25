from flask import Flask
from flask_cors import CORS
from .routes import register_routes

def create_app():
    app = Flask(__name__, template_folder='../templates')
    app.config.from_object('config.Config')  # Cargar la configuración desde config.py

    # Configurar CORS
    CORS(app, resources=app.config['CORS_RESOURCES'], headers=app.config['CORS_HEADERS'])

    with app.app_context():
        register_routes(app)

    return app
