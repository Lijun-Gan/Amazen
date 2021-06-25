import React from 'react';
import { Link } from 'react-router-dom';

class OrderConfirm extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div >
                <div className="confirm-container-inner">
                    <div className="confirm-container-box">

                        <div className="checkmark-text">
                            <img className="checkmark" src={window.green_checkmark} alt="check mark" />
                            <h4 className="placed-green">Order Placed, thanks!</h4>
                        </div>
                        <p className="to-your-email">Confirmation will be sent to your email.</p>
                        <Link to='/order' id="redirect-order-page">Review or edit your recent orders
                        </Link> 
                    </div>

                </div>
            </div>
        )
    }
}

export default OrderConfirm;

