import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from './src/_mocks_/handlers';

export const server = setupServer(...handlers);

// establish API mocking before all tests
beforeAll(() => server.listen());

// reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// clean up after the tests are finished
afterAll(() => server.close())

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addEventListener: function () { },
      removeListener: function () { },
    }
  }

