const axios = require('axios');
const { User } = require('../db');
const { createUserDb, allUserDb } = require("../services/User");
const { response } = require ("../response/response");


const getInfo = async () => {
    return allUserDb();
};
console.log (getInfo());

const createUser = (req, res, next) => {
    const data = req.body;
    return createUserDb(data)
      .then((user) =>
        response(req, res, next, 201, "User creado con exito", user)
      )
      .catch((error) => {
        console.error(error);
      });
  };

module.exports = {getInfo, createUser}