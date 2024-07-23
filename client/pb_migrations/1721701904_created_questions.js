/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "s3ip8184qv0j30o",
    "created": "2024-07-23 02:31:44.562Z",
    "updated": "2024-07-23 02:31:44.562Z",
    "name": "questions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nn25fres",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "f0eflmtx",
        "name": "link",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "wbtr55in",
        "name": "topic",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 17,
          "values": [
            "Array Hashing",
            "Two Pointer",
            "Sliding Window",
            "Stack",
            "Binary Search",
            "Linked List",
            "Trees",
            "Heap/Priority Queue",
            "Backtracking",
            "Tries",
            "Graphs",
            "Advanced Graphs",
            "1-D Dynamic Programming",
            "2-D Dynamic Programming",
            "Greedy",
            "Math & Geometry",
            "Bit Manipulation"
          ]
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("s3ip8184qv0j30o");

  return dao.deleteCollection(collection);
})
