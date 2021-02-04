import React , {Component} from 'react';
import Login from './Login';

const Router = require("react-router-dom").BrowserRouter;
const Link=require("react-router-dom").Link;

class NavBar extends Component {

    render(){
        
        return(
            <Router>
            <nav className="navigation" id="home">
                <a className="nav-brand" href="/" > RES </a>
                <ul className="nav-list">
                    <li><Link to="/products" onClick={() => window.location.href="/products"} >Products</Link></li>
                    <li><Link  to="/" onClick={() => window.location.href="/"} >Home</Link></li>
                    <li><Link to="/services" onClick={() => window.location.href="/services"} >Services</Link></li>
                </ul>
                <Login />
                
            </nav>
            </Router>
        )
    }

}

export default NavBar;
