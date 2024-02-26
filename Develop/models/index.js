// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category - The association can also be created from the Procuct side
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Sequelize website example
// const User_Profile = sequelize.define('User_Profile', {
//   selfGranted: DataTypes.BOOLEAN
// }, { timestamps: false });
// User.belongsToMany(Profile, { through: User_Profile });
// Profile.belongsToMany(User, { through: User_Profile });

// The Super Many-to-Many relationship
// User.belongsToMany(Profile, { through: Grant });
// Profile.belongsToMany(User, { through: Grant });
// User.hasMany(Grant);
// Grant.belongsTo(User);
// Profile.hasMany(Grant);
// Grant.belongsTo(Profile);
// Per //stackoverflow.com/questions/22958683/how-to-implement-many-to-many-association-in-sequelize 
// we seem to need to use "through". 

// Could not find an in-class example of this many-to-many, but per sequelize, the comment and SO, the 
// use of "through" seems mandatory. MJS 2.26.24
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: 'ProductTag', 
  foreignKey: 'product_id', // per stackOverflow
  // onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'ProductTag', 
  foreignKey: 'tag_id',  // also per stackOverflow
});

// Driver.hasOne(License, {
//  foreignKey: 'driver_id',
//  onDelete: 'CASCADE',
// });

// License.belongsTo(Driver, {
//   foreignKey: 'driver_id',
// });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
