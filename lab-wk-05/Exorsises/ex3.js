db.getCollection('Restaurants').find({ "cuisine" : { $eq : "Delicatessen"},
        "city" : { $not : { $eq : "Brooklyn"}}},
        { "_id" : 0,"cuisine" : 1 , "name" : 1, "city" : 1, "restaurant_id" : 1})
        .sort({"name" : 1})