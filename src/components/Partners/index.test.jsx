import renderer from 'react-test-renderer';
import Partners from '.';

describe('Partners', () =>
  it('renders correctly', () => {
    const domTree = renderer.create(<Partners />).toJSON();
    expect(domTree).toMatchSnapshot();
  }));
