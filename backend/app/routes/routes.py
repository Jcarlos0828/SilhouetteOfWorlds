import tempfile
import os
import uuid
from flask import current_app as app, jsonify, Response, render_template, request, send_file, Blueprint
#from google.api_core.exceptions import InvalidArgument
#from google.auth import exceptions as google_exceptions

# Constantes para extensiones y tipos MIME
PDF_EXTENSION = '.pdf'
PDF_CONTENT_TYPE = 'application/pdf'

# Variables globales para almacenar temporalmente el JSON, el CSV y el PDF
response_json = None
response_csv = None
uploaded_pdf_path = None

document_bp = Blueprint('document_bp', __name__)

@document_bp.route('/')
def index():
    return render_template('index.html')
