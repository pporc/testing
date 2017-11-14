import chai from 'chai'; // chai = { assert, equal... }
import sinon from 'sinon';
import { getDay, getAdultUsers, getRandomUsers, showMessage, Product } from './main';
import { days, defaultProduct, money } from './constants';

const testUsers = [ {age: 18}, {age: 14}, {age: 28}, {age: 54} ];
const { assert, expect } = chai;
chai.should();

describe('showMessage', () => {
	const stub = sinon.stub(window, 'alert');
	const text = 'test';

	it('should call alert', () => {
		showMessage()
		assert.isTrue(stub.called);
	})

	it('should call alert with argument', () => {
		stub.withArgs(text).returns(true);
		showMessage();
		assert.equal(stub.called, true);
	})
})

describe('getDay', function() {
	const dateNow = days[new Date().getDay()];

	it('should return dateNow for getDay()', () => {
  	assert.equal(getDay(), dateNow);
	});
});

describe('getAdultUsers', function() {
	it('should return {age: 28}, {age: 54} for getAdultUsers(testUsers)', () => {
  	assert.sameDeepMembers(getAdultUsers(testUsers), [ {age: 28}, {age: 54} ]);
	});
});

describe('getRandomUsers', function() {
	const stub = sinon.stub(Math, 'random');

	it('should return {age: 28}, {age: 54} for getRandomUsers(testUsers)', () => {
		stub.returns(0.5);
  	assert.sameDeepMembers(getRandomUsers(testUsers), [ {age: 28}, {age: 54} ]);
	});

	it('should return {age: 18}, {age: 14} for getRandomUsers(testUsers)', () => {
		stub.returns(0.7);
  	assert.sameDeepMembers(getRandomUsers(testUsers), [ { age: 18 }, { age: 14 } ]);
	});

	it('should return false for getRandomUsers()', () => {
  	assert.isFalse(getRandomUsers());
	});
});

describe('class Product', () => {
	let product;

	beforeEach(() => product = new Product());
	it('should create new object with title', () => {
		const testTitle = 'testTitle';

		assert.equal(new Product(testTitle).title, testTitle);
	})

	it('should create new object with price', () => {
		const testPrice = 25;

		assert.equal(new Product(null, testPrice).price, testPrice);
	})

	it('should create new object with default price', () => {

		assert.equal(new Product().price, 10);
	})

	it('should create new object with default title', () => {

		assert.equal(new Product().title, defaultProduct);
	})

	it('getPrice()', () => {
		assert.equal(product.getPrice(), product.price + money);
	})

	it('setPrice()', () => {
		assert.throws(product.setPrice)
	})

	it('setPrice() with argument > 10', () => {
		product.setPrice(15);
		assert.equal(product.value, 15);
	})

	it('setPrice() with argument < 10', () => {
		product.setPrice(5);
		assert.isUndefined(product.value);
	})
})
