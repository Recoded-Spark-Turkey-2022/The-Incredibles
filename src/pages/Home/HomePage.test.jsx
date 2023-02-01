import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';

describe('HomePage', () =>
  it('renders correctly', () => {
    const domTree = renderer
      .create(
        <Router>
          <HomePage />
        </Router>
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  }));
