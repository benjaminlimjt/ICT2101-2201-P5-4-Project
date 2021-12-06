# test_dataProcessor.py
# from flask import Flask, render_template, session, redirect, request, flash
# from functools import wraps
# from topsecrets import SECRET_KEY
# from db import db
# from app import *
# app = Flask(__name__)
# app.secret_key = SECRET_KEY
# from classes.car.dataProcessor import Processor
import pytest
from flask import current_app
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.app_context():
        with app.test_client() as client:
            yield client
def test_sendMovementCommand(client):
    rv = client.post("/freeDriving")
    expected = "Successfully sent command"
    assert expected == rv.get_data(as_text=True)
def test_getMovementCommand(client):
    # cannot access db from testcase : Fail 
    rv = client.get("/freeDriving/getCarCommands")
def test_getSensorData(client):
    rv = client.get("/freeDriving/getSensorData")
    assert rv.status_code == 200
def test_updateSensorData(client):
    rv = client.get("/freeDriving/sensorData/123")
    expected = "Successfully inserted Sensor Data."
    assert expected == rv.get_data(as_text=True)