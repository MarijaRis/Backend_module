import hat from 'hat';
import models from '../models/index';

const Product_type = models.Products_type;

const list = async(req, res, next) => {
    const result: Array = await Product_type.findAll();
    res.status(200).send(result);
    await next;
  };

  const get = async(req, res, next) => {
    const { id }: { id: string } = req.params;
  
    const result: Object = await Product_type.findAll({ where: { id }});
    res.status(200).send(result);
  
    await next;
  };

  const create = async(req, res, next) => {
    const {
      product_type_name,
      unit_price,
      quantity
    }: {
      product_type_name: ?string,
      unit_price: ?string,
      quantity: ?string
    } = req.body;

    const productTypeId = hat(); 

    await Product_type.create({
      id: productTypeId,
      product_type_name,
      unit_price,
      quantity
    });
    res.status(201).send({ info: 'Product_type has been created' });

    await next;
  };

  const update = async(req, res, next) => {
    const { id }: { id: string } = req.params;
  
    const updateData: {
      product_type_name: ?string,
      unit_price: ?string,
      quantity: ?string
    } = Object.assign({}, req.body);
  
    await Product_type.update(updateData, { where: { id}});
    res.status(200).send(`Product_type ${id} has been updated`);
  
    await next;
  };

  const del = async(req, res, next) => {
    const { id }: { id: string } = req.params;
  
    await Product_type.destroy({ where: { id}});
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