export default (sequelize, DataType) => {
  const Invoice = sequelize.define(
   'invoices', {
    id: {
      type: DataType.STRING,
      primaryKey: true,
     },
    payment_date: {
      type: DataType.STRING,
    },
    total_invoice: {
      type: DataType.STRING,
    },
   });
   return Invoice;
};