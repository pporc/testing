import chai from 'chai';
import sinon from 'sinon';

const { assert, expect } = chai;
chai.should();

describe('users', () => {
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
}
)