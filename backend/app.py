from flask import Flask
from flask_cors import CORS

from config import Config
from database.db import db

from routes.customer_routes import customer_bp
from routes.transaction_routes import transaction_bp

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)

db.init_app(app)

app.register_blueprint(customer_bp)
app.register_blueprint(transaction_bp)

@app.route("/")
def home():
    return {"message": "HisabKitab API Running"}

if __name__ == "__main__":
    app.run(debug=True)