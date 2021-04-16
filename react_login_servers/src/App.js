import logo from './logo.svg';
import './App.css';
import Products from './Products.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My First React App!</h1>
        <Products />
        <Products />
        <Products />
      </div>
    );
  }
}

export default App;
