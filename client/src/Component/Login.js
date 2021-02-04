import React , {Component} from 'react';

class Login extends Component {
    state={
        display:'none'
    }
    onLogin=()=>{
        this.state.display==='none'?this.setState({display:'block'}):this.setState({display:'none'});
    }
    render(){
        
        return(
            <div className="login" id="login">
                <button className="login-icon" onClick={this.onLogin} >Login</button>
                <form  style={{display:`${this.state.display}`}}>
                    <label className="data-entry" htmlFor="name">NickName :</label>
                    <input className="data"  type="text" id="name" name="name" placeholder="xxxxx@exemple.com"/><br/>
                    <label className="data-entry" htmlFor="password">Password :</label>
                    <input className="data" type="password" id="password" name="password" placeholder="Password"/><br/>
                    
                    <input type="checkbox" id="keep" name="keep" value="Stay Loged" />
                    <label id="keep" htmlFor="keep"> Stay Loged</label><br/>

                    <input type="submit" id="submit" value="connect"/>
                </form>
            </div>
        );
    }
}
export default Login;