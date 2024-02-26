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

// Products belongToMany Tags (through ProductTag)
Product.hasOne(Tag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(Product, {
  foreignKey: 'product_id',
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
