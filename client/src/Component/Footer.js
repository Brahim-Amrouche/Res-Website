import React, { Component } from 'react'
import facebook from '../sources/facebook.png';
import twitter from '../sources/twitter.png';
import instagram from '../sources/instagram.png';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-label">
                    <h1>Res</h1>
                </div>
                <ul className="footer-links">
                    <li><a href="#home">Home</a></li>
                
                    <li><a href="#products">Products</a></li>
                    <li><a href="#services">Services</a></li>

                </ul>
                <ul className="icons">
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" ><img src={facebook} alt="facebook"/></a> </li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instagram}    alt= "instagram"/></a> </li>
                    <li><a href="https://twitter.com/" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter"/></a></li>
                </ul>
                <form className="footer-form">
                    <label htmlFor="email"> Subscribe To Our NewsLetters</label> 
                    <input type="email" name="email" id="email" placeholder="exemple@email.com"/>
                    <input type="submit" id="footer-submit" value="Subscribe"/>
                </form>
            </div>
        )
    }
}

export default Footer
