import 'react';
import './css/footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">This is a portfolio project showcasing my skills and projects. Feel free to connect with me on LinkedIn, send me an email, or reach out via WhatsApp.</p>
          </div>


          <div className="col-xs-6 col-md-3">
            <h6>Contact</h6>
            <ul className="footer-links">
              <li><a href="mailto:your-email@example.com">Email</a></li>
              <li><a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2025 All Rights Reserved by 
         <a href="#"> Your Name</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="linkedin" href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
              <li><a className="email" href="mailto:your-email@example.com"><i className="fa fa-envelope"></i></a></li>
              <li><a className="whatsapp" href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;