const ProductDB = require('../models/productDB.js');
const CustomerDB = require('../models/customerDB.js');
const Product = ProductDB.getModel();
const Customer = CustomerDB.getModel();

(async() => {

	await Product.deleteMany({});
	await Customer.deleteMany({});

	let shirt1 = new Product({
		name:'Shirt 2', image:'tee21.jpg', price:15.99, sizes: [
			{size: 'XS', quantity: 10},
			{size: 'S', quantity: 15},
			{size: 'M', quantity: 12},
			{size: 'L', quantity: 8},
			{size: 'XL', quantity: 5}
		]
	}); 
    let shirt2 = new Product({
		name:'Shirt 2', image:'tee2.jpg', price:15.99, sizes: [
			{size: 'XS', quantity: 10},
			{size: 'S', quantity: 15},
			{size: 'M', quantity: 12},
			{size: 'L', quantity: 8},
			{size: 'XL', quantity: 5}
		]
	}); 
    let shirt3 = new Product({
		name:'Shirt 3', image:'tee3.jpg', price:15.99, sizes: [
			{size: 'XS', quantity: 10},
			{size: 'S', quantity: 15},
			{size: 'M', quantity: 12},
			{size: 'L', quantity: 8},
			{size: 'XL', quantity: 5}
		]
	}); 
    let shirt4 = new Product({
		name:'Shirt 4', image:'tee4.jpg', price:15.99, sizes: [
			{size: 'XS', quantity: 10},
			{size: 'S', quantity: 15},
			{size: 'M', quantity: 12},
			{size: 'L', quantity: 8},
			{size: 'XL', quantity: 5}
		]
	}); 
    let shirt5 = new Product({
		name:'Shirt 5', image:'tee5.jpg', price:15.99, sizes: [
			{size: 'XS', quantity: 10},
			{size: 'S', quantity: 15},
			{size: 'M', quantity: 12},
			{size: 'L', quantity: 8},
			{size: 'XL', quantity: 5}
		]
	}); 
    let shirt6 = new Product({
		name:'Shirt 6', image:'tee6.jpg', price:15.99, sizes: [
			{size: 'XS', quantity: 10},
			{size: 'S', quantity: 15},
			{size: 'M', quantity: 12},
			{size: 'L', quantity: 8},
			{size: 'XL', quantity: 5}
		]
	}); 

	await Promise.all([
		shirt1.save(),
        shirt2.save(),
        shirt3.save(),
        shirt4.save(),
        shirt5.save(),
        shirt6.save(),
	]);

	let janeDoe = new Customer({
		firstName: 'Jane', lastName: 'Doe', orders: [
			{product: shirt1._id, size: 'M', quantity: 2},
		]
	});

	let johnSmith = new Customer({
		firstName: 'John', lastName: 'Smith', orders: [
			{product: shirt2._id, size: 'L', quantity: 1},
		]
	});

	await Promise.all([
		janeDoe.save(),
		johnSmith.save()
	]);

	let currentCustomers = await Customer.find({}).populate('orders.product');
	console.log(currentCustomers);

	process.exit();

})();
