import pymongo
# Database Stuffs
client = pymongo.MongoClient('localhost',27017)
db = client['guido']