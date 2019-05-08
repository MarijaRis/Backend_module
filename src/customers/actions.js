import hat from 'hat';

import models from '../models/index';


const Customers = models.Customer;

//listing customers
const list = async(req, res, next) => {
    const result: Array = await Customers.findAll();
    res.status(200).send(result);
    await next;
};


//get customer by
const get = async(req, res, next) => {
    const { id }: { id: string } = req.params;

    const result: Object = await Customers.findAll({ where: { id }});
    res.status(200).send(result);

    await next;
};


//create customer
const create = async(req, res, next) => {
  const {
    firstName, 
    lastName,
    address,
    phone, 
    email,
    orderId
  }:{
    firstName: string,
    lastName: string,
    address: ?string,
    phone: ?string, 
    email: ?string,
    orderId: ?string
  } = req.body;

  const customerId = hat();

  await Customers.create({
    id: customerId,
    firstName, 
    lastName,
    address,
    phone, 
    email,
    orderId
  });
  res.status(201).send({ info: 'Customer has been created'});

  await next;
};

//update customer
const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const updateData: {
    firstName: ?string,
    lastName: ?string,
    address: ?string,
    phone: ?string, 
    email: ?string,
    orderId: ?string
  } = Object.assign({}, req.body);

  await Customers.update(updateData, { where: { id }})
  res.status(200).send(`Customer ${id} has been updated`);

  await next;
};


//delete customer
const del = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  await Customers.destroy({ where: { id }});
  res.status(202).send({ info: `Customer ${id} has been removed!`});

  await next;
};


export default {
    list, 
    get,
    create,
    update,
    del
};


