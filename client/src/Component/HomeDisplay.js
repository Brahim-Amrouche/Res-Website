import React , {Component} from 'react';
import Products from '../sources/Products.mp4';
import Services from '../sources/Services.mp4';

const Router = require("react-router-dom").BrowserRouter;
const Link=require("react-router-dom").Link;

class HomeDisplay extends Component {

    render(){

        return(
            <Router>
            <div className="display">
                <video id="background-video-1" autoPlay loop muted>
                    <source src={Products} type="video/mp4"/> 
                </video>
                <video id="background-video-2" autoPlay loop muted>
                    <source src={Services} type="video/mp4"/>
                </video>
                <div id="description">
                    <h1>A Platera Of Products and Services <br/> <span>Crafted for your Need</span></h1>
                </div>
                <div id="buy-products">
                    <Link to="/products"  onClick={() => window.location.href="/products"} >Check Our Products</Link>
                </div>
                <div id="buy-services">
                    <Link to="/services" onClick={() => window.location.href="/services"} >Test Our Services</Link>
                </div>
            </div>
            </Router>
            
        )
    }
}


export default HomeDisplay