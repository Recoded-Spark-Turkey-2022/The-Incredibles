import renderer from 'react-test-renderer';
import LocationSection from '.';

describe('LocationSection', () =>
  it('renders correctly', () => {
    const domTree = renderer.create(<LocationSection />).toJSON();
    expect(domTree).toMatchSnapshot();
  }));
