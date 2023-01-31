import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import UserStory from '.';

describe('UserStory', () =>
  it('renders correctly', () => {
    const domTree = renderer
      .create(
        <Router>
          <UserStory />
        </Router>
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  }));
