import hat from 'hat';

import models from '../models/index';

const Orders = models.Order;


const list = async(req, res, next) => {
  const result: Array = await Orders.findAll();
  res.status(200).send(result);
  await next;
};

const get = async(req, res, next) => {
  const { id }: { id: string } =  req.params;

  const result: Object = await Orders.findAll({ where: { id }});
  res.status(200).send(result);

  await next;
};


const create = async(req, res, next) => {
  const {
    productTypeId,
    invoiceId,
    order_date
  }:{
    productTypeId: ?string,
    invoiceId: ?string,
    order_date: ?string
  } = req.body;

  const orderId = hat();

  await Orders.create({
    id: orderId,
    productTypeId,
    invoiceId,
    order_date
  });
  res.status(201).send({ info: 'Order has been created'});

  await next;
};

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const updateData: {
    productTypeId: ?string,
    invoiceId: ?string,
    order_date: ?string
  } = Object.assign({}, req.body);

  await Orders.update(updateData, { where: { id }});
  res.status(200).send(`Order ${ id } has been updated`);

  await next;
};

const del = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  await Orders.destroy({ where: { id }});
  res.status(202). send({ info: `Order ${ id } has been removed!`});

  await next;
};

export default {
  list,
  get,
  create,
  update, 
  del
};