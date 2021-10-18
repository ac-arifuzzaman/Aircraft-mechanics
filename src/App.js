import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import NOtFound from './Pages/Home/NotFound/NOtFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Home/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Home/Login/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/Booking/:Serviceid">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NOtFound></NOtFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
