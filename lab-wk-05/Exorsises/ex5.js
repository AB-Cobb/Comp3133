db.getCollection("Restaurants").find({ $or : [
    {"name" : /Thai?/},
    {"address.street" : /Street?/},
    {"address.zipcode" : "17988"}
    ]})