export default (sequelize, DataType) => {
const Products_type = sequelize.define(
'product_type', {
  id: {
    type: DataType.STRING,
    primaryKey: true,
  },
  product_type_name: {
    type: DataType.STRING,
  },
  unit_price: {
    type: DataType.STRING,
  },
  quantity: {
    type: DataType.STRING,
  },
});
return Products_type;
};