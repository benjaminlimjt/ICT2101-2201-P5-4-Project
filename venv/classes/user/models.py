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
        session.clear()
        session['loggedIn'] = True
        session['user'] = self.toJSON()
        return ({"success": "Successfully logged in"}), 200

    def login(self):
        user = self.fetchByUsername(request.form.get('username'))
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

    def insertUser(self):
        self._id = uuid.uuid4().hex
        self.username = "admin"
        self.password = pbkdf2_sha256.encrypt("admin")
        self.name = "admin"
        self.role = "admin"

        if self.fetchByUsername(self.username):
            return ({"error": "Username already in use"}), 400
            
        while self.fetchBy_id(self._id):
            self._id = uuid.uuid4().hex

        db.users.insert_one(self.toJSON())
        return ({"success": "Successfully added user"}), 200

    def createUser(self):
        self._id = uuid.uuid4().hex
        self.username = request.form.get('username')
        self.password = pbkdf2_sha256.encrypt(request.form.get('password'))
        self.name = request.form.get('name')
        self.role = request.form.get('role')

        if self.fetchByUsername(self.username):
            return ({"error": "Username already in use"}), 400
        
        if self.role != 'student' and self.role != 'admin':
            return ({"error": "invalid role"}), 400
        
        while self.fetchBy_id(self._id):
            self._id = uuid.uuid4().hex

        db.users.insert_one(self.toJSON())
        return ({"success": "Successfully added user"}), 200

    def updateUser(self):
        user = self.fetchBy_id(request.form.get('_id'))
        self = User(user['_id'], user['username'], user['password'], user['name'], user['role'])

        if self.username != request.form.get('username') and self.fetchByUsername(request.form.get('username')):
            return "Error: Username already in use"

        self.username = request.form.get('username')
        self.password = pbkdf2_sha256.encrypt(request.form.get('password'))
        self.name = request.form.get('name')
        self.role = request.form.get('role')

        db.users.update_one({'_id': self._id}, { '$set': {'username':self.username}})
        db.users.update_one({'_id': self._id}, { '$set': {'password':self.password}})
        db.users.update_one({'_id': self._id}, { '$set': {'name':self.name}})
        db.users.update_one({'_id': self._id}, { '$set': {'role':self.role}})

        if session['user']['_id'] == self._id:
            self.start_session()
        return "Successfully updated user"
    
    def deleteUser(self):
        db.users.delete_one({'_id': request.form.get('_id')})
        return "Successfully deleted user"
    
    def fetchByUsername(self, username):
        return db.users.find_one({'username': username})

    def fetchBy_id(self, id):
        return db.users.find_one({'_id': id})
