import { Provider } from "react-redux";
import store from './store.js'
function App() {
  return (
    <Provider store={store}>
      <div>hello</div>
    </Provider>
  );
}

export default App;
