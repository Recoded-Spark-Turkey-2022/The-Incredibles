import renderer from 'react-test-renderer';
import OurStory from '.';

describe('OurStory', () =>
  it('renders correctly', () => {
    const domTree = renderer.create(<OurStory />).toJSON();
    expect(domTree).toMatchSnapshot();
  }));
