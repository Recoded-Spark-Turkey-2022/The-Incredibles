import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Brief from '.';

describe('Brief', () =>
  it('renders correctly', () => {
    const domTree = renderer
      .create(
        <Router>
          <Brief />
        </Router>
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  }));
