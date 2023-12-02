import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import Cats from '..';

jest.mock('../../../services/cats-api');

const Component = () => {
  return (
    <Provider store={store}>
      <Cats name="cats" id="cats" />
    </Provider>
  );
};

describe('Cats', () => {
  test('render', async () => {
    render(<Component name="cats" id="cats" />);
    
    const title = await screen.findByText('Cat Species Gallery');
    expect(title).toBeInTheDocument();
  });

  test('render with the api data', async () => {
    render(<Component name="cats" id="cats" />);

    const fake_name = await screen.findByText('fake_name');
    expect(fake_name).toBeInTheDocument();
  });
});


