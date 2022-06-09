const { List } = require("../models");

module.exports = {
  create: async (req, res) => {
    try {
      const createList = await List.create(req.body);
      res.status(201).json(createList);
    } catch (err) {
      console.log("created list error", err);
      res.json(err);
    }
  },
  getAll: async (req, res) => {
    try {
      const lists = await List.findAll({
        where: {
          user_id: req.params.id,
        },
      });
      res.status(200).json(lists);
    } catch (err) {
      console.log("getting list error", err);
      res.json(err);
    }
  },
  deleteList: async (req, res) => {
    try {
      const deletedLists = await List.destroy({
        where: {
          id: req.params.listId,
        },
      });
      res.status(202).json(deletedLists);
    } catch (err) {
      console.log("Deleting list error", err);
      res.json(err);
    }
  },
  updateList: async (req, res) => {
    try {
      const updatedList = await List.update({ title: req.body.title }, {
        where: {
            id: req.params.listId,
        },
      });
      res.status(200).json(updatedList);
    } catch (err) {
      console.log("Updating list error", err);
      res.json(err);
    }
  }
};
