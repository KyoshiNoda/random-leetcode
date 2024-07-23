/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s3ip8184qv0j30o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "izmllaw1",
    "name": "comfort_level",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "low",
        "medium",
        "high"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s3ip8184qv0j30o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "izmllaw1",
    "name": "comfort_level",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "low",
        "medium",
        "high"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
