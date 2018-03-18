const Sequelize = require('sequelize');
const sequelize = new Sequelize('management-system', 'root', null, {
  host: 'localhost',
  port: 3306,
  dialect : 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false
  }
});

module.exports = sequelize
