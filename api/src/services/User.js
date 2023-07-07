const {User} = require ("../db");


const allUserDb = () => {
  return User.findAll();
};

const createUserDb = (data) => {
    return User.create(data);
};


module.exports = { createUserDb, allUserDb }