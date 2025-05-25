import os
import atexit
import shutil
from app import create_app
from dotenv import load_dotenv
from flask_cors import CORS

def cleanup_pycache():
    """Clean up all __pycache__ directories in the project."""
    for root, dirs, files in os.walk('.'):
        if '__pycache__' in dirs:
            pycache_path = os.path.join(root, '__pycache__')
            try:
                shutil.rmtree(pycache_path)
                print(f"Cleaned up: {pycache_path}")
            except Exception as e:
                print(f"Error cleaning {pycache_path}: {e}")

# Register the cleanup function to run when the program exits
atexit.register(cleanup_pycache)

load_dotenv() 
app = create_app()
CORS(app) 
load_dotenv()

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8010)
