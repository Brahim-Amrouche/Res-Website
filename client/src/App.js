import './style/main.css';
import NavBar from './Component/NavBar';
import HomeDisplay from './Component/HomeDisplay';
import ProductsDisplay from './Component/ProductsDisplay';
import ServicesDisplay from './Component/ServicesDisplay';
import Footer from './Component/Footer';
import React , {Component} from 'react';

const Router =require("react-router-dom").BrowserRouter;
const Route=require("react-router-dom").Route;
const Redirect=require("react-router-dom").Redirect;
const Switch =require("react-router-dom").Switch;

class App extends Component {
  state={
    redirect:null
  }  
  
  render(){
    return (
    <Router>
    
  
        <NavBar  />
        <HomeDisplay/>
        <div className="product-display">
          <Switch>
          <Route path="/products" exact strict component={()=><ProductsDisplay/>} />
          <Route path="/services" exact strict component={()=><ServicesDisplay/>} />
          <Redirect exact  to="/products"/>
          </Switch>
          
          
        </div>
        
        <Footer />
  
    </Router>
      
  );
  }
}

export default App;
