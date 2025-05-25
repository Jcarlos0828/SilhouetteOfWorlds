def register_routes(app):
    from .routes import document_bp
    app.register_blueprint(document_bp)
