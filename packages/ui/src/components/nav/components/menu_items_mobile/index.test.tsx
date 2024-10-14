import renderer from 'react-test-renderer';
import MenuItemsMobile from '@/components/nav/components/menu_items_mobile';
import MockTheme from '@/tests/mocks/MockTheme';
// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
const mockPush = jest.fn();

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    push: mockPush,
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Nav/MenuItemsMobile', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <MenuItemsMobile />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
