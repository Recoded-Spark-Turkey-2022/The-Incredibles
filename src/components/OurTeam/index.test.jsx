import renderer from 'react-test-renderer';
import OurTeam from '.';

describe('OurTeam', () =>
  it('renders correctly', () => {
    const domTree = renderer.create(<OurTeam />).toJSON();
    expect(domTree).toMatchSnapshot();
  }));
