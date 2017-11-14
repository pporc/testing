// import chai from 'chai';
// import sinon from 'sinon';
// const { expect } = chai;
// import { getUsers } from './users';

// describe('users', () => {
// 	let stub;
// 	const callStub = (data, isError) => {
// 		if(isError) {
// 			return stub.returns(Promise.reject(data))
// 		}

// 		const fakeFetch = () => {
// 			Promise.resolve({
// 				json() { return Promise.resolve(data); }
// 			});
// 		}	

// 		return stub.returns(fakeFetch());
// 	};

// 	beforeEach(() => {
// 		stub = sinon.stub(window, 'fetch');
// 	})

// 	afterEach(() => {
// 		window.fetch.restore();
// 	})

// 	it('should call fetch() method', () => {
// 		callStub();
// 		getUsers();
// 		expect(stub.called).to.be.true;
// 	});

// 	it('getUsers should call console.log() on success', (done) => {
// 		const consoleStub = sinon.stub(console, 'log');
// 		callStub();

// 		getUsers().then(() => {
// 			expect(consoleStub.called).to.be.true;
// 			done();
// 			consoleStub.restore();
// 		})
// 	})

// 	it('should call console.log() with arguments', () => {
// 		const consoleStub = sinon.stub(console, 'log');
// 		const testString = 'test';

// 		callStub(testString);
		
// 		getUsers().then(() => {
// 			expect(consoleStub.getCall(0).args[0]).to.equal(testString);
// 			done();
// 			consoleStub.restore();
// 		})
// 	})

// 	it('should call console.error() on fail', (done) => {
// 		const consoleStub = sinon.stub(console, 'error');
// 		callStub(null, true);

// 		getUsers().then(() => {
// 			expect(consoleStub.called).to.be.true;
// 			done();
// 			consoleStub.restore();
// 		})
// 	})

// 	it('should call console.error() with arguments', (done) => {
// 		const consoleStub = sinon.stub(console, 'error');
// 		const testString = 'test';

// 		callStub(testString, true);
		
// 		getUsers().then(() => {
// 			expect(consoleStub.getCall(0).args[0]).to.equal(testString);
// 			done();
// 			consoleStub.restore();
// 		})
// 	})

// });


