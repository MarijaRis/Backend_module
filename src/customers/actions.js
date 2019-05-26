import hat from 'hat';
import Bluebird from 'bluebird';

import models from '../models/index';


const Customer = models.Customer;

//listing customers
const list = async(req, res, next) => {
    const result: Array = await Customer.findAll();
    res.status(200).send(result);
    await next;
};


//get customer by
const get = async(req, res, next) => {
    const { id }: { id: string } = req.params;

    const result: Object = await Customer.findAll({ where: { id }});
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

  await Customer.create({
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

  const customer = await Customer.findOne({where: {id}});
  if(customer){
    await Customer.update(updateData, {where: {id}});
    res.send(`The customer with id ${id} has been updated.`).status(204);
    await next;
}
res.status(400).send(`The customer with id ${id} doesn't exist.`);
await next;
}


//delete customer
const del = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  
  try {
    const customer = await Customer.findOne({ where : { id }})
    if(!customer) {
      res.status(404).send(`Customer with id ${ id } doesn't exist!`)
      await next;
    }
    await Customer.destroy({ where: { id }});
    res.status(202).send({ info: `Customer ${id} has been removed!`});
    await next;
  }
  catch(e){
    res.status(500).send()
  }
  
};


export default {
    list, 
    get,
    create,
    update,
    del
};


