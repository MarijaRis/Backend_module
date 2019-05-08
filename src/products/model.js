export default (sequelize, DataType) => {
  const Product = sequelize.define(
    'products', {
      id: {
        type: DataType.STRING,
        primaryKey: true,
      },
      product_name: {
        type: DataType.STRING,
      }

    });
    return Product;
};