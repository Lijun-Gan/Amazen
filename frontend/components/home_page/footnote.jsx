import React from 'react';
import { Link } from 'react-router-dom';

const FootNote = ()=>{
    return(

        <div>
            {/* onClick={() => window.scrollTo()} */}
            <button className="backToTop" onClick={()=>{window.scrollTo(0, 0)}}>Back to top</button>

            <div id="foot-notes-container">
            <div id="foot-notes">

            <div className="ft first">
                <button className="fn-first">Get to Know Us</button>
                <button>Careers</button>
                <button>Blog </button>
                <button>About Amazen </button>
                <button>Sustainability </button>
                <button>Press Center </button>
                <button>Investor Relations </button>
                <button>Amazen Devices </button>
                <button>Amazen Tours </button>
                <p></p>
            </div>

            <div className="ft">
                <button className="fn-first">Make Money with Us </button>
                <button>Sell products on Amazen </button>
                <button>Sell apps on Amazen </button>
                <button>Become an Affiliate </button>
                <button>Advertise Your Products </button>
                <button>Self-Publish with Us </button>
                <button>Host an Amazen Hub </button>
                <button>› See More Make Money with Us</button> 
                <p></p>
            </div>

            <div className="ft">
                <button className="fn-first">Amazen Payment Products </button>
                <button>Amazen Rewards Visa Signature Cards </button>
                <button>Amazen.com Store Card </button>
                <button>Amazen Business Card </button>
                <button>Amazen Business Line of Credit</button> 
                <button>Shop with Points </button>
                <button>Credit Card Marketplace </button>
                <button>Reload Your Balance </button>
                <button>Amazen Currency Converter </button>
                <p></p>
            </div>

            <div className="ft last">	 
                <button className="fn-first">Let Us Help You </button>
                <button>Amazen and COVID-19 </button>
                <button>Your Account</button>
                <button>Your Orders </button>
                <button>Shipping Rates & Policies</button> 
                <button>Amazen Prime</button>
                <button>Returns & Replacements</button> 
                <button>Manage Your Content and Devices </button>
                <button>Amazen Assistant</button>
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