export default (sequelize, DataType) => {
  const Customer = sequelize.define(
    'customers', {
      id: {
        type: DataType.STRING,
        primaryKey: true,
      },
      firstName: {
        type: DataType.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataType.STRING,
        allowNull: false,
      },
      address: {
        type: DataType.STRING,
      },
      phone: {
        type: DataType.STRING,
      },
      email: {
        type: DataType.STRING,
      },
      orderId: {
        type: DataType.STRING,
      },
    });
    return Customer;
  };