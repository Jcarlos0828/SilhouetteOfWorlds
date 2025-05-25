import os
from dotenv import load_dotenv

# Cargar variables de entorno desde el archivo .env
basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, '.env'))

class Config:
    DEBUG = os.getenv('FLASK_ENV') == 'development'
    CORS_RESOURCES = {r"/*": {"origins": "*"}}
    CORS_HEADERS = 'Content-Type'
