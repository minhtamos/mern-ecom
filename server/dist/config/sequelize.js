"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// const sequelize = new Sequelize('UQRP7eS5tP', 'UQRP7eS5tP', 'HeCrNGQNYr', {
//     host: 'remotemysql.com',
//     port: 3306,
//     dialect: 'mysql'
// });
const sequelize = new sequelize_1.Sequelize("mysql://jn2Sep8vJX:cHLEv1lOPS@remotemysql.com:3306/jn2Sep8vJX");
// sequelize
//   .sync()
//   .then(() => {
//     return User.create({
//       username: "janedoe"
//     });
//   })
//   .then(function(jane) {
//     console.log(
//       jane.get({
//         plain: true
//       })
//     );
//   });
exports.default = sequelize;
