import pymongo
# Database Stuffs
client = pymongo.MongoClient('mongodb://guido:Student%40sit@localhost:27017/guido')
db = client['guido']