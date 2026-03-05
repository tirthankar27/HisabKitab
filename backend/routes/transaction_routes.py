from flask import Blueprint, request, jsonify
from database.db import db
from models.transaction import Transaction
from models.customer import Customer

transaction_bp = Blueprint("transactions", __name__)

@transaction_bp.route("/transactions", methods=["POST"])
def add_transaction():

    data = request.json

    transaction = Transaction(
        customer_id=data["customer_id"],
        amount=data["amount"],
        type=data["type"],
        note=data.get("note")
    )

    customer = Customer.query.get(data["customer_id"])

    if data["type"] == "credit":
        customer.balance += data["amount"]
    else:
        customer.balance -= data["amount"]

    db.session.add(transaction)
    db.session.commit()

    return jsonify({"message": "Transaction added"})