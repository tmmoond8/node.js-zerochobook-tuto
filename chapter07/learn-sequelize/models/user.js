module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    married: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('now()'),
    },
  }, {
    timestamps: false,
  })
}

// INSERT INTO nodejs.users (name, age, married, comment) VALUES ('zero', 24, 0,'자기소개1');
// const { User } = require('../models')
// User.create({
//   name:'zero',
//   age: 24,
//   married: false,
//   comment:'자기소개1',
// });

// SELECT * FROM nodejs.users;
// User.findAll({});

// SELECT * FROM nodejs.users LIMIT 1;
// User.find({});

// SELECT name, married FROM nodejs.users;
// User.findAll({
//   attributes: ['name','married'],
// });

// SELECT name, age FROM nodejs.users WHERE married = 1 AND age > 30;
// const { User, Sequelize: { Op } } = require('../models');
// User.findAll({
//   attributes: ['name','age'],
//   where: {
//     married: 1,
//     age: { [Op.gt]: 30 },
//   },
// });

// SELECT id, name FROM users WHERE married = 0 OR age > 30;
// const { User, Sequelize: { Op } } = require('../models');
// User.findAll({
//   attributes: ['id','name'],
//   where: {
//     [Op.or]: [{ married: 0 }, { age: { [Op.gt]: 30 } }],
//   },
// });

// SELECT id, name FROM users ORDER BY age DESC;
// User.findAll({
//   attributes: ['id','name'],
//   order: [['age','DESC']],
// });

// SELECT id, name FROM users ORDER BY age DESC LIMIT 1;
// User.findAll({
//   attributes: ['id','name'],
//   order: ['age','DESC'],
//   limit: 1,
// });

// SELECT id, name FROM users ORDER BY age DESC LIMIT 1 OFFSET 1;
// User.findAll({
//   attributes: ['id','name'],
//   order: ['age','DESC'],
//   limit: 1,
//   offset: 1,
// });

// UPDATE nodejs.users SET comment ='바꿀 내용' WHERE id = 2;
// User.update({
//   comment:'바꿀 내용',
// }, {
//   where: { id: 2 },
// });

// DELETE FROM nodejs.users WHERE id = 2;
// User.destory({
//   where: { id: 2 },
// });
