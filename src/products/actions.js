import hat from 'hat';

import models from '../models/index';

const Products = models.Product;

const list = async(req, res, next) => {
  const result: Array = await Products.findAll();
  res.status(200).send(result);
  await next;
};

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const result: Object = await Products.findAll({ where: { id }});
  res.status(200).send(result);

  await next;
};

const create = async(req, res, next) => {
  const {
    product_name

  }: {
    product_name: ?string
  } = req.body;

  const productsId = hat();

  await Products.create({
    id: productsId,
    product_name
  });
  res.status(201).send({ info: `Product has been created`});

  await next;
};

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const updateData: {
    product_name: ?string
  } = Object.assign({}, req.body);

  await Products.update(updateData, { where: { id}});
  res.status(200).send(`Product ${id} has been updated`);

  await next;
};

const del = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  await Products.destroy({ where: { id}});
  res.status(202). send({ info: `Product ${id} has been removed`});

  await next;
};

export default {
  list,
  get,
  create,
  update, 
  del
};