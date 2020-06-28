const orm = require("../config/orm.js")

// Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

const burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: (cols, vals, cb) => {
      orm.create("burgers", cols, vals, (res) => {
        cb(res);
      });
    },
    updateOne: (objColVals, condition, cb) => {
      orm.update("burgers", objColVals, condition, (res) => {
        cb(res);
      });
    },
    deleteOne: (condition, cb) => {
      orm.delete("burgers", condition, (res) => {
        cb(res);
      });
    }
  };
 
module.exports = burger;
