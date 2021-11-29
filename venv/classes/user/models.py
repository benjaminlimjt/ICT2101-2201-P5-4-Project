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

    def start_session(self):
        session['loggedIn'] = True
        session['user'] = self.toJSON()
        return ({"success": "Successfully logged in"}), 200

    def login(self):
        user = self.usernameExists(request.form.get('username'))
        if user and pbkdf2_sha256.verify(request.form.get('password'), user['password']):
            self._id = user['_id']
            self.username = user['username']
            self.name = user['name']
            self.role = user['role']
            return self.start_session()
        else:
            return ({"error" : "Invalid username/password"}), 400

    def logout(self):
        session.clear()
        return redirect('/login')

    def createUser(self):
        self._id = uuid.uuid4().hex
        self.username = request.form.get('username')
        self.password = pbkdf2_sha256.encrypt(request.form.get('password'))
        self.name = request.form.get('name')
        self.role = request.form.get('role')

        if self.usernameExists(self.username):
            return ({"error": "Username already in use"}), 400
        
        while self._idExists(self._id):
            self._id = uuid.uuid4().hex

        db.users.insert_one(self.toJSON())
        return ({"success": "Successfully added user"}), 200

    def updateUser(self):
        return None
    
    def deleteUser(self):
        return None
    
    def usernameExists(self, username):
        return db.users.find_one({'username': username})

    def _idExists(self, id):
        return db.users.find_one({'_id': id})
