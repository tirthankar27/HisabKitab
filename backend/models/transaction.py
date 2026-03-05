from database.db import db

class Transaction(db.Model):
    __tablename__ = "transactions"

    id = db.Column(db.Integer, primary_key=True)

    customer_id = db.Column(
        db.Integer,
        db.ForeignKey("customers.id"),
        nullable=False
    )

    amount = db.Column(db.Float, nullable=False)

    type = db.Column(db.String(20))  
    # credit = customer owes you
    # payment = customer paid

    note = db.Column(db.String(255))

    created_at = db.Column(db.DateTime, server_default=db.func.now())