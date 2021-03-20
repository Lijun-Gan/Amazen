import React from 'react';
import { Link } from 'react-router-dom';

const FootNote = ()=>{
    return(

        <div>
            
            <p className="backToTop">Back to top</p>

            <div id="foot-notes-container">
            <div id="foot-notes">

            <div className="ft first">
                <button className="fn-first">Get to Know Us</button>
                <button>Careers</button>
                <button>Blog </button>
                <button>About Amazon </button>
                <button>Sustainability </button>
                <button>Press Center </button>
                <button>Investor Relations </button>
                <button>Amazon Devices </button>
                <button>Amazon Tours </button>
                <p></p>
            </div>

            <div className="ft">
                <button className="fn-first">Make Money with Us </button>
                <button>Sell products on Amazon </button>
                <button>Sell apps on Amazon </button>
                <button>Become an Affiliate </button>
                <button>Advertise Your Products </button>
                <button>Self-Publish with Us </button>
                <button>Host an Amazon Hub </button>
                <button>›See More Make Money with Us</button> 
                <p></p>
            </div>

            <div className="ft">
                <button className="fn-first">Amazon Payment Products </button>
                <button>Amazon Rewards Visa Signature Cards </button>
                <button>Amazon.com Store Card </button>
                <button>Amazon Business Card </button>
                <button>Amazon Business Line of Credit</button> 
                <button>Shop with Points </button>
                <button>Credit Card Marketplace </button>
                <button>Reload Your Balance </button>
                <button>Amazon Currency Converter </button>
                <p></p>
            </div>

            <div className="ft last">	 
                <button className="fn-first">Let Us Help You </button>
                <button>Amazon and COVID-19 </button>
                <button>Your Account</button>
                <button>Your Orders </button>
                <button>Shipping Rates & Policies</button> 
                <button>Amazon Prime</button>
                <button>Returns & Replacements</button> 
                <button>Manage Your Content and Devices </button>
                <button>Amazon Assistant</button>
                <button>Help </button>
                <p></p>
            </div>
            </div>
            </div>

           <div id="meetCreator">
                <Link to="/"> 
                    <img className="amazenLogo" src={window.nav_amazenLogo} alt="Amazen Logo"/>
               </Link>
                <p className="linkedin">
                    <a href="https://www.linkedin.com/in/lijun-gan/">LinkedIn | </a>
                    <a href="https://github.com/Lijun-Gan">GitHub </a>
                </p>
           </div>


        </div>

       

    )
} 

export default FootNote;