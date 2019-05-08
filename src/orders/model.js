export default (sequelize, DataType) => {
  const Order = sequelize.define(
    'orders', {
      id: {
        type: DataType.STRING,
        primaryKey: true,
      },
      productTypeId: {
        type: DataType.STRING,
        defaultValue: null,
      },
      invoiceId: {
        type: DataType.STRING,
        defaultValue: null,
      },
      order_date: {
        type: DataType.STRING,
        defaultValue: null,
      },
  });  
    return Order;
};