from flask import Blueprint, request, jsonify
from database.db import db
from models.customer import Customer

customer_bp = Blueprint("customers", __name__)

@customer_bp.route("/customers", methods=["GET"])
def get_customers():
    customers = Customer.query.all()

    result = [
        {
            "id": c.id,
            "name": c.name,
            "phone": c.phone,
            "balance": c.balance
        }
        for c in customers
    ]

    return jsonify(result)


@customer_bp.route("/customers", methods=["POST"])
def create_customer():

    data = request.json

    customer = Customer(
        name=data["name"],
        phone=data.get("phone")
    )

    db.session.add(customer)
    db.session.commit()

    return jsonify({"message": "Customer created"})