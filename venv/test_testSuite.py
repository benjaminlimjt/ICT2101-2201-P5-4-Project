import pytest
from flask import current_app
from app import app
from classes.user.models import User
from classes.challenge.models import Challenge

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
def test_insertChallenge():
    expected = "Successfully added challenge"
    assert expected == Challenge().insertChallenge()
def test_createChallenge(client):
    rv = client.post("/admin/manageChallenges/createChallenges")
    assert rv.status_code == 200
def test_login(client):
    rv = client.post("/login")
    assert rv.status_code == 200
def test_logout(client):
    rv = client.post("/logout")
    assert rv.status_code == 200
def test_createUser(client):
    rv = client.post("/admin/manageUsers/createUser")
    assert rv.status_code == 200
def test_updateUser(client):
    rv = client.post("/admin/manageUsers/updateUserFlow")
    assert rv.status_code == 200
def test_deleteUser(client):
    rv = client.post("/admin/manageUsers/deleteUser")
    assert rv.status_code == 200
def test_fetchByUsername():
    assert User().fetchByUsername("test") == {"_id":"11a8fb36cb8946e79ec26a6ca984675f","name":"sss","password":"$pbkdf2-sha256$29000$jpGydo5xzrm39p4TQijFuA$.Qss4egAdtK/ivHjS1.WlZ0QKHAuUelAtPE14hcsMvM","username":"test"}
def test_fetchBy_id():
    assert User().fetchBy_id("11a8fb36cb8946e79ec26a6ca984675f") == {"_id":"11a8fb36cb8946e79ec26a6ca984675f","name":"sss","password":"$pbkdf2-sha256$29000$jpGydo5xzrm39p4TQijFuA$.Qss4egAdtK/ivHjS1.WlZ0QKHAuUelAtPE14hcsMvM","username":"test"}




    