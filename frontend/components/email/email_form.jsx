import React from 'react';
import emailjs from 'emailjs-com';

// import './ContactUs.css';

class ContactUs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emptyNameErr: "" ,
            emptyEmailErr: "" ,
            emptyMessageErr: "",
            emptySubjectErr: "",
            emailSent: false,
        };

        this.sendEmail = this.sendEmail.bind(this);

    }


    sendEmail(e) {
        e.preventDefault();

        let errors = 0;
        let emptyName = "";
        let emptyEmail = "" ;
        let emptyMessage = "";
        let emptySubject = "";

        if (e.target.email.value === ""){
            emptyEmail = <h5 className="input-error">❗ Email can not be empty </h5>
            errors ++ ;
        }
        if (e.target.name.value === ""){
            emptyName = <h5 className="input-error">❗ Your name can not be empty </h5>
            errors ++ ;
        }

        if (e.target.message.value === ""){
            emptyMessage = <h5 className="input-error">❗ Comments can not be empty </h5>
            errors ++ ;
        }

        if (e.target.subject.value === ""){
            emptySubject = <h5 className="input-error">❗Subject can not be empty </h5>
            errors ++ ;
        }

        this.setState({
            emptyNameErr: emptyName,
            emptyEmailErr: emptyEmail ,
            emptyMessageErr: emptyMessage,
            emptySubjectErr: emptySubject
        })

        if (errors === 0) {

            emailjs.sendForm('service_e6eleev', 'template_rym4fp2', e.target, 'user_R0uZhU4csPWf2wuxYHCDH')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()

            this.setState({
                emptyEmailErr: "" ,
                emptyMessageErr: "",
                emptySubjectErr: "",
                emptyNameErr: "",
                emailSent: true,
            })
        }
    }

  render(){

    if(this.state.emailSent){
        return(
            <div className="auto-reply">
                <p className="thank-you">Thanks so much for reaching out !</p>
                <p className="thank-you">We received your email and will get back to you with a (human) response as soon as possible.</p>
            </div>
        )
    }else{

        return (
            <div className="email-container-outer">
                <div className="email-container">

                <h1 className="email-title">Email Amazen.com Associate Support</h1>
                <p className="email-note">Please fill out the form below. Click Send E-mail button when done.</p>
                <div className="email-container-inner">
                    <form onSubmit={this.sendEmail}>
                        <div >
                            <div className="email-margin" >
                                <span>Your Name: </span> <span className="red-asterisk">*</span>
                                <br />
                                <input type="text" className="email-input" placeholder="your name" name="name"/>
                                {this.state.emptyNameErr}
                            </div>
                            <div className="email-margin" >
                                <span>Email Address: </span> <span className="red-asterisk">*</span>
                                <br />
                                <input type="email" className="email-input" placeholder="Email Address" name="email"/>
                                    {this.state.emptyEmailErr}
                            </div>
                            <div className="email-margin">
                                <span>Subject: </span> <span className="red-asterisk">*</span>
                                <br />
                                <input type="text" className="email-input" placeholder="Subject" name="subject"/>
                                {this.state.emptySubjectErr}
                            </div>
                            <div className="email-margin">
                                <span>Comments: </span> <span className="red-asterisk">*</span>
                                <br />
                                <textarea className="email-comment" id="" cols="30" rows="8" placeholder="Comments" name="message"></textarea>
                                {this.state.emptyMessageErr}
                            </div>


                            <div >
                                {/* <input type="submit" className="btn btn-info" value="Send Message"></input> */}
                                <input type="submit" className="auth-btn demo" value="Send E-mail"></input>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            </div>
        );
    }
  }

}

export default  ContactUs