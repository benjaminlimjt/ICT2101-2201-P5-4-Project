from flask import Flask, request, session, redirect
import json
import uuid
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
        self.challengeID = "1"
        self.challengeName = "Challenge Name"
        self.challengeDescription = "Description"
        self.challengeData = [
                        [0,0,0,0,0],
                        [0,0,0,0,0],
                        [0,0,0,0,0],
                        [0,0,0,0,0],
                        [0,0,0,0,0]
                        ]

        db.challenges.insert_one(self.toJSON())
        return "Successfully added challenge"
