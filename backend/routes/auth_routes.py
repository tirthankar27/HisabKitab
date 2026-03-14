from flask import Blueprint, request, jsonify

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.json

    email = data.get("email")
    password = data.get("password")

    if email == "admin@test.com" and password == "123456":
        return jsonify({
            "message": "Login successful",
            "token": "sample-token"
        })

    return jsonify({"error": "Invalid credentials"}), 401