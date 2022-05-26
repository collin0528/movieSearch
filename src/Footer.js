import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <>
<footer className="footer-distributed">

			<div className="footer-left">

				<h3>Company<span>logo</span></h3>

				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">pHresh code © 2022</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>no 4 Oweh street</span> yaba lagos, Nigeria</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+234 912 199 1685</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="https://mail.google.com/">collinsndukwe28@gmail.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
        
        </>
        );
    }
}
 
export default Footer;