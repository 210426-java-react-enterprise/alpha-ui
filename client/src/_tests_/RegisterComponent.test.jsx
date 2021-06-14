import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Register from "../components/Register";

Enzyme.configure({ adapter: new Adapter() });

test("Renders Register component", () => {
  const configureMockStore = configureStore();

  let initialState = {
    auth: {
      isLoading: false,
      username: "",
      token: "",
      isAuthenticated: false,
      isShown: false,
    },
  };

  const mockStore = configureMockStore(initialState);

  const wrapper = Enzyme.mount(
    <Provider store={mockStore}>
      <Register />
    </Provider>
  );

  expect(wrapper.find("div.modal-dialog")).toBeTruthy();
});


