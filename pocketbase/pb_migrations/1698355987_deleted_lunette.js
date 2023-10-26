/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("e1qvtczpibc5plz");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "e1qvtczpibc5plz",
    "created": "2023-10-26 21:27:59.818Z",
    "updated": "2023-10-26 21:27:59.818Z",
    "name": "lunette",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rsw0yp8h",
        "name": "libelle_lunette",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
