import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./components/redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import BreadContainer from "./components/BreadContainer";
import ItemContainer from "./components/ItemContainer";
import Users from "./components/Users";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <h2>Using the hooks for Cake </h2>
        <HooksCakeContainer />
        <IceCreamContainer />
        <h2>Using the hooks for Ice-Cream</h2>
        <HooksIceCreamContainer />
        <BreadContainer />
        <ItemContainer cake />
        <ItemContainer /> */}
        <Users />
      </div>
    </Provider>
  );
}

export default App;
