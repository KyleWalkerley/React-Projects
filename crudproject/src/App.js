import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import User from './User';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserForm from './Userform';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div> 
            <Switch> 
              <Route exact path="/" component={User} /> 
              <Route path="/*" component={NotFound} /> 
            </Switch> 
          </div> 
        </BrowserRouter> 
      </div>
    );
  }
}

export default App;

class NotFound extends Component {
  render(){
    return <div>Not Found</div>
  }
}