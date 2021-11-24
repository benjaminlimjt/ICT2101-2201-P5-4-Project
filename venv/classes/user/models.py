from flask import Flask, request, session, redirect
import json
from passlib.hash import pbkdf2_sha256
import uuid
from db import db

class User:

    def __init__(self, _id="", username="", password="", name="", role=""):
        self._id = _id
        self.username = username
        self.password = password
        self.name = name
        self.role = role

    def toJSON(self):
        return {
            '_id': self._id,
            'username': self.username,
            'password': self.password,
            'name': self.name,
            'role': self.role
        }
        #return json.dumps(self, default=lambda o: o.__dict__,  indent=4)

    def login(self):
        return None
    
    def logout(self):
        session.clear()
        return redirect('/login')

    def start_session(self):
        session['loggedIn'] = True
        session['user'] = self.toJSON()

    def createUser(self):
        self._id = uuid.uuid4().hex
        self.username = request.form.get('username')
        self.password = pbkdf2_sha256.encrypt(request.form.get('password'))
        self.name = request.form.get('name')
        self.role = request.form.get('role')

        if self.usernameExists():
            return ({"error": "Username already in use"}), 400
        
        while self._idExists():
            self._id = uuid.uuid4().hex

        db.users.insert_one(self.toJSON())
        return ({"success": "Successfully added user"}), 200

    def updateUser(self):
        return None
    
    def deleteUser(self):
        return None
    
    def usernameExists(self):
        return db.users.find_one({'username': self.username})

    def _idExists(self):
        return db.users.find_one({'_id': self._id})
