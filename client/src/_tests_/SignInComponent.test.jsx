import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import SignIn from "../components/SignIn";

Enzyme.configure({ adapter: new Adapter() });
let configureMockStore;
let mockStore;
let initialState;

beforeEach(() => {
  configureMockStore = configureStore();
  initialState = {
    auth: {
      isLoading: false,
      username: "",
      token: "",
      isAuthenticated: false,
      isShown: false,
    },
  };

  mockStore = configureMockStore(initialState);
});

afterEach(() => {
  configureMockStore = null;
  mockStore = null;
  initialState = null;
});

test("Renders SignIn component", () => {
  const wrapper = Enzyme.mount(
    <Provider store={mockStore}>
      <SignIn />
    </Provider>
  );

  expect(wrapper.find("div.modal-dialog")).toBeTruthy();
  expect(wrapper.find("input#username").text()).toBe("");
  expect(wrapper.find("input#password").text()).toBe("");
});

