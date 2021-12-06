from flask import Flask, jsonify, request, session, redirect
import json
from bson.json_util import dumps

from passlib.hash import pbkdf2_sha256
import uuid
from db import db

class Processor:
    def sendMovementCommand(self):
        # Create a data object
        data ={
            "_id":uuid.uuid4().hex,
            "command":request.get_json()
        }
        db.carMovement.drop()
        db.create_collection("carMovement")
        if db.carMovement.insert_one(data):
            print("COMMAND update=",request.get_json()); 
            return "Successfully sent command"
        return "Processor.sendCommand failed"
    def getMovementCommand(self):
        cursor = db.carMovement.find()
        for record in cursor:
            return ">"+record["command"]+">"
        # list_cur = list(cursor)
        # json_data = dumps(list_cur)
        # return json_data
    def updateSensorData(self,data):
        data ={
            "_id":uuid.uuid4().hex,
            "sensorData":data
        }
        db.carSensorData.drop()
        db.create_collection("carSensorData")
        if db.carSensorData.insert_one(data):
             return "Successfully inserted Sensor Data."
        return "Processor.updateSensorData failed"
    def getSensorData(self):
        cursor = db.carSensorData.find()
        for record in cursor:
            # print(record)
            return record["sensorData"]
