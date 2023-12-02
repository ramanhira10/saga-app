import { render } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import store from './store';

const Component = () => {
  <Provider store={store}>
    <App name="app" id="app" />
  </Provider>
};

describe("App", () => {
  test('renders', () => {
    render(<Component name="app" id="app" />);
  });  
});


