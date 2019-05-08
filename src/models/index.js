import Sequelize from 'sequelize';
import connection from '../db/sequelize';

const models = {
  Customer: connection.import('../customers/model'),
  Order: connection.import('../orders/model'),
  Product: connection.import('../products/model'),
  Products_type: connection.import('../product_type/model'),
  Invoice: connection.import('../invoices/model'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  };
});

//Realtions
models.Customer.belongsTo(models.Order);
// models.Customer.hasMany(models.Order);
// models.Invoice.belongsTo(models.Order);
// models.Products_type.belongsTo(models.Order);
models.Product.belongsTo(models.Products_type);
models.Order.belongsTo(models.Invoice);
models.Order.belongsTo(models.Products_type);
models.Product.hasMany(models.Order);

models.connection = connection;
models.Sequelize = Sequelize;

export default models;