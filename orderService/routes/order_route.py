from flask import Blueprint, current_app as app, jsonify, request
from models.order import Order


order_bp = Blueprint('order', __name__)


def serialize_order(Order):
    return {
        'id': Order.id,
        'phone_id': Order.phone_id,
        'userName': Order.userName,
        'address': Order.address,
    }


@order_bp.route('/')
def order():
    return 'Order Service!'


@order_bp.route('/order', methods=['GET'])
def get_order():
    orders = app.session.query(Order).all()

    orders_list = [serialize_order(order) for order in orders]

    return jsonify(orders=orders_list)


@order_bp.route('/order', methods=['POST'])
def post_order():

    data = request.json

    order = Order(
        phone_id=data['phone_id'],
        userName=data['userName'],
        address=data['address']
    )

    app.session.add(order)
    app.session.commit()

    return jsonify(serialize_order(order))
