from flask import Flask, jsonify, request, session, redirect
import json

from passlib.hash import pbkdf2_sha256
import uuid
from db import db

class Processor:
    def sendCommand(self):
        # Create a data object
        data ={
            "_id":uuid.uuid4().hex,
            "command":request.form.get('inputCmd')
        }
        if db.carData.insert_one(data):
             return jsonify(data), 200
        return "Processor.sendCommand failed"
        
        # return ({"success": "Successfully added user"}), 200
