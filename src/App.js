import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ForgotPass from './component/ForgotPass';
import Login from './component/Login';
import Navbar from "./component/Navbar";
import Profile from './Page/Profile';
import Register from './component/Register';
import Home from './Page/Home';

function App() {
  return (
    <Router> 
      {/* login & resgister page */}
        <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/forgotpassword">
        <ForgotPass />
      </Route>

      {/* main page */}
      <div>
      <Navbar />
      <Route exact path ="/">
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      </div> 

      </Switch>
    </Router>
  );
}

export default App;
