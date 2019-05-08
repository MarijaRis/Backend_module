import hat from 'hat';

import models from '../models/index';

const Invoices = models.Invoice;

const list = async(req, res, next) => {
  const result: Array = await Invoices.findAll();
  res.status(200).send(result);

  await next;
};

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const result: Object = await Invoices.findAll({ where: { id }});
  res.status(200).send(result);

  await next;
};

const create = async(req, res, next) => {
  const {
    total_invoice,
    payment_date
  }: {
    total_invoice: ?string,
    payment_date: ?string
  } = req.body;

  const invoiceId = hat();

  await Invoices.create({
    id: invoiceId,
    total_invoice,
    payment_date
  });
  res.status(201).send({ info: 'Invoice has been created'});
  await next;
};

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const updateData: {
    total_invoice: ?string,
    payment_date: ?string
  } = Object.assign({}, req.body);

  await Invoices.update(updateData, { where: { id }});
  res.status(200).send(`Invoice ${id} has been updated`);

  await next;
};

const del = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  await Invoices.destroy({ where: { id }});
  res.status(200).send({ info: `Invoice ${id} has been removed!`});

  await next;
};

export default {
  list, 
  get, 
  create, 
  update,
  del
};