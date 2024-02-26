const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

// ProductTag
//     id            Integer    NOT null values    primary key    auto increment
//     product_id    Integer    References the product model's id
//     tag_id        Integer    References the tag model's id
ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // This column will store a reference of the `id` of the `Product` that owns this Product-tag
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `product` model, which we set in `Product.js`
        model: 'product',
        key: 'id',
      },
    },
    // This column will store a reference of the `id` of the `Tag` that owns this Product-tag
    tag_id: {
          type: DataTypes.INTEGER,
          references: {
            // This references the `tag` model, which we set in `Tag.js`
            model: 'tag',
            key: 'id',
          },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
