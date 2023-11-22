from flask import Flask
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from routes.order_route import order_bp


def init_app():
    app = Flask(__name__)
    engine = create_engine(
        'mysql+mysqlconnector://root:abc@db_container:3306/phoneStore')
    engine.connect()  # Ensure connection is established

    session = sessionmaker(bind=engine)
    app.session = session()

    app.register_blueprint(order_bp)

    return app


if __name__ == '__main__':
    init_app().run(debug=True, host='0.0.0.0', port=5000)
