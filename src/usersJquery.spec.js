import chai from 'chai';
import sinon from 'sinon';

import { getUsers, postUser } from './usersJquery';

const { assert, expect } = chai;
chai.should();

describe('usersJquery getUser', () => {
  let stubGet;
  const callStubGet = (data, isError) => {
      if (isError) {
          return stubGet.returns(Promise.reject(data));
      }

      return stubGet.returns(Promise.resolve(data));
  };

  beforeEach(() => {
      // make stub for window.$
      stubGet = sinon.stub(window.$, 'get');
  });

  afterEach(() => {
      window.$.get.restore();
  });

  it('should call $.get()', () => {
      callStubGet();
      getUsers();
      expect(stubGet.called).to.be.true;
  });

  it('getUsers() should call console.log() on success', (done) => {
      const consoleStub = sinon.stub(console, 'log');

      callStubGet();

      getUsers().then(() => {
         expect(consoleStub.called).to.be.true;
         done();
         consoleStub.restore();
      });
  });

  it('getUsers() should call console.log() with arguments', (done) => {
    const consoleStub = sinon.stub(console, 'log');
    const testString = 'test';

    callStubGet(testString);
    
    getUsers().then(() => {
      expect(consoleStub.getCall(0).args[0]).to.equal(testString);
      done();
      consoleStub.restore();
    })
  })

  it('getUsers() should call console.error() on fail', (done) => {
    const consoleStub = sinon.stub(console, 'error');
    callStubGet(null, true);

    getUsers().then(() => {
      expect(consoleStub.called).to.be.true;
      done();
      consoleStub.restore();
    })
  })

  it('getUsers() should call console.error() with arguments', (done) => {
    const consoleStub = sinon.stub(console, 'error');
    const testString = 'test';

    callStubGet(testString, true);
    
    getUsers().then(() => {
      expect(consoleStub.getCall(0).args[0]).to.equal(testString);
      done();
      consoleStub.restore();
    })
  })
})

// post

describe('usersJquery postUser', () => {
  let stubPost;
  //const fakeData = 'text';
  const callStubPost = (data, isError) => {
      if (isError) {
          return stubPost.returns(Promise.reject(data));
      }

      return stubPost.returns(Promise.resolve(data));
  };

  beforeEach(() => {
      // make stub for window.$
      stubPost = sinon.stub(window.$, 'post');
  });

  afterEach(() => {
      window.$.post.restore();
  });

  it('should call $.post()', () => {
      callStubPost();
      postUser();
      expect(stubPost.called).to.be.true;
  });

  it('postUser() should call console.log() on success', (done) => {
      const consoleStub = sinon.stub(console, 'log');

      callStubPost();

      postUser().then(() => {
         expect(consoleStub.called).to.be.true;
         done();
         consoleStub.restore();
      });
  });

  it('getUser() should call console.log() with arguments', (done) => {
    const consoleStub = sinon.stub(console, 'log');
    const testString = 'test';

    callStubPost(testString);
    
    postUser().then(() => {
      expect(consoleStub.getCall(0).args[0]).to.equal(testString);
      done();
      consoleStub.restore();
    })
  })

  it('postUser() should call console.error() on fail', (done) => {
    const consoleStub = sinon.stub(console, 'error');
    callStubPost(null, true);

    postUser().then(() => {
      expect(consoleStub.called).to.be.true;
      done();
      consoleStub.restore();
    })
  })

  it('postUser() should call console.error() with arguments', (done) => {
    const consoleStub = sinon.stub(console, 'error');
    const testString = 'test';

    callStubPost(testString, true);
    
    postUser().then(() => {
      expect(consoleStub.getCall(0).args[0]).to.equal(testString);
      done();
      consoleStub.restore();
    })
  })
})