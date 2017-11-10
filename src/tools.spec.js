import chai from 'chai'; // chai = { assert, equal... }
import { getDay, getAdultUsers, getRandomUsers } from './main';
import { days } from './constants';

const testUsers = [ {age: 18}, {age: 14}, {age: 28}, {age: 54} ];
const { assert, expect } = chai;
chai.should();

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
	const originRandom = Math.random;

	it('should return {age: 28}, {age: 54} for getRandomUsers(testUsers)', () => {
		Math.random = () => 0.5;
  	assert.sameDeepMembers(getRandomUsers(testUsers), [ {age: 28}, {age: 54} ]);
	});

	it('should return {age: 18}, {age: 14} for getRandomUsers(testUsers)', () => {
		Math.random = () => 0.7;
  	assert.sameDeepMembers(getRandomUsers(testUsers), [ { age: 18 }, { age: 14 } ]);
	});

	it('should return false for getRandomUsers()', () => {
  	assert.isFalse(getRandomUsers());
	});

	Math.random = originRandom;
});
