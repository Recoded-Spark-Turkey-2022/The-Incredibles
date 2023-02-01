import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactPage from '.';
import { store } from './../../app/store';
import { Provider } from 'react-redux';

describe('ContactPage', () =>
  it('renders correctly', () => {
    const domTree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <ContactPage />
          </Provider>
        </Router>
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  }));
