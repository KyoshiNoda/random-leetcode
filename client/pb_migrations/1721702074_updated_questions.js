/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s3ip8184qv0j30o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kt0mqqpo",
    "name": "difficulty",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "easy",
        "medium",
        "hard"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s3ip8184qv0j30o")

  // remove
  collection.schema.removeField("kt0mqqpo")

  return dao.saveCollection(collection)
})
