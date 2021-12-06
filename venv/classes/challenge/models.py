from flask import Flask, request, session, redirect
import json
import uuid
import urllib.parse
from db import db

class Challenge:

    def __init__(self, _id="", challengeID="", challengeName="", challengeDescription="", challengeData=""):
        self._id = _id
        self.challengeID = challengeID
        self.challengeName = challengeName
        self.challengeDescription = challengeDescription
        self.challengeData = challengeData
    
    def toJSON(self):
        return {
            '_id': self._id,
            'challengeID': self.challengeID,
            'challengeName': self.challengeName,
            'challengeDescription': self.challengeDescription,
            'challengeData': self.challengeData
        }
    
    def insertChallenge(self):
        self._id = uuid.uuid4().hex
        self.challengeID = "0"
        self.challengeName = "Tutorial"
        self.challengeDescription = "Welcome to the Tutorial!"
        self.challengeData = [
                        [1,1,1,1,1],
                        [3,0,0,0,1],
                        [1,1,1,0,1],
                        [1,2,0,0,1],
                        [1,1,1,1,1]
                        ]

        if not db.challenges.find_one({'challengeID': "0"}):
            db.challenges.insert_one(self.toJSON())

        

        self._id = uuid.uuid4().hex
        self.challengeID = "1"
        self.challengeName = "Save Pusheen!"
        self.challengeDescription = "Help Save Pusheen!"
        self.challengeData = [
                        [1,1,1,1,1],
                        [3,0,0,0,1],
                        [1,1,1,0,1],
                        [1,2,0,0,1],
                        [1,1,1,1,1]
                        ]

        if not db.challenges.find_one({'challengeID': "1"}):
            db.challenges.insert_one(self.toJSON())


        return "Successfully added challenge"

    def createChallenge(self):

        parsedData = urllib.parse.parse_qs(request.form['formData'])
    
        self._id = uuid.uuid4().hex
        self.challengeID = parsedData['challengeID'][0]
        self.challengeName = parsedData['challengeName'][0]
        self.challengeDescription = parsedData['challengeDescription'][0]
        self.challengeData = json.loads(request.form['challengeData'])

        db.challenges.insert_one(self.toJSON())
        return "Successfully created challenge."
