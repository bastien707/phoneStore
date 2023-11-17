from flask import Flask
from sqlalchemy import create_engine, URL
from sqlalchemy.orm import sessionmaker
from routes.order_route import order_bp
import sqlalchemy as db


def init_app():
    app = Flask(__name__)

    engine = db.create_engine(
        'mysql+mysqlconnector://root:abc@localhost:3307/phoneStore')
    connection = engine.connect()
    session = sessionmaker(bind=engine)
    app.session = session()
    # Register Blueprints
    app.register_blueprint(order_bp)

    return app


if __name__ == '__main__':
    init_app().run(debug=True)
