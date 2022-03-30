import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <h1>Calendar App</h1>
    </div>

    </Provider>
  );
}

export default App;
