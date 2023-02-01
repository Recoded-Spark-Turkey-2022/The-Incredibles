import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutPage from '.';
import { store } from './../../app/store';
import { Provider } from 'react-redux';

describe('AboutPage', () =>
  it('renders correctly', () => {
    const domTree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <AboutPage />
          </Provider>
        </Router>
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  }));
