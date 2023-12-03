const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

module.exports = {
  hash: function (plainPassword) {
    let hashed = bcrypt.hashSync(plainPassword, salt);
    return hashed;
  },
  compare: function (plainPassword, hasedPassword) {
    let compared = bcrypt.compareSync(plainPassword, hasedPassword);
    return compared;
  },
};
