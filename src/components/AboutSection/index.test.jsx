import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutSection from '.';

describe('AboutSection', () =>
  it('renders correctly', () => {
    const domTree = renderer
      .create(
        <Router>
          <AboutSection />
        </Router>
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  }));
