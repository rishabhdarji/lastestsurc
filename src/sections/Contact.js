import React from 'react'
import Footer from './Footer';
import ScrollButton from './GoToTop/GoToTop';
import { Inner } from './InnerHeader';

 const Contact = () => {
  return (
    <>
     <div className="absolute-header">
       
       <Inner/>

      <div className="pageContactInfo mb30">
        <div className="container">
          <div className="rowFlex rowFlexMargin">
            <div className="col-xs-12 col-md-5 mb30">
              <div className="pageContactLeft">
                <h1 className="velaContactTitle">Contact Us</h1>
                <div className="rowFlex rowFlexMargin"><div className="col-xs-12"><div className="contactDetail">
                  <p>Please feel free to write to us.
                    <br></br><br></br><strong>Email: </strong><a href="mailto:customercare@surc.in" target="_blank">customercare@surc.in</a>
                  </p>
                      <p><br></br>Follow us on social media: 
                      <strong><br></br></strong><br></br>
                      <a href="https://www.facebook.com/SURC-109035781382152" target="_blank" title="https://www.facebook.com/SURC-109035781382152"><strong>Facebook</strong></a>
                       | <a href="https://twitter.com/surcofficial" target="_blank" title="https://twitter.com/surcofficial"><strong>Twitter</strong></a> 
                       | <a href="https://www.instagram.com/surcofficial" target="_blank" title="https://www.instagram.com/surcofficial"><strong>Instagram</strong></a>
                        | <a href="https://www.youtube.com/channel/UCB3yXnC-UcfMPHrR89woqvA" target="_blank" title="https://www.youtube.com/channel/UCB3yXnC-UcfMPHrR89woqvA"><strong>YouTube</strong> </a> 
                        | <a href="https://www.linkedin.com/company/surcofficial/" title="https://www.linkedin.com/company/surcofficial/">
                        <strong>LinkedIn</strong></a><strong> </strong></p>
                      </div>
                      </div>
                      <div className="col-xs-12">

                      </div>
                      </div>

                      </div>
                    </div>
                    <div className="col-xs-12 col-md-7 mb20">
                      <div className="pageContactRight">
                        <div className="formContactUs">
                        
                        <form method="post" action="/contact#contact_form" id="contact_form" acceptCharset="UTF-8" className="contact-form"><input type="hidden" name="form_type" value="contact"/><input type="hidden" name="utf8" value="✓"/>
                                <div className="formContent">
                                    
                                    
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <div className="form-group">
                                                
                                                <label for="ContactFormName" className="hidden">Name <sup>*</sup></label>
                                                <input type="text" id="ContactFormName" className="form-control" placeholder="Name" name="contact[name]" autocapitalize="words" value=""/>
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="form-group">
                                                <label for="ContactFormEmail" className="hidden">Email <sup>*</sup></label>
                                                <input type="email" id="ContactFormEmail" className="form-control" placeholder="Email" name="contact[email]" autocorrect="off" autocapitalize="off" value=""/>
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="form-group">
                                                <label for="ContactFormMessage" className="hidden">Message<sup>*</sup></label>
                                                <textarea rows="6" id="ContactFormMessage" className="form-control" placeholder="Message" name="contact[body]"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-button">
                                        <input type="submit"  className="btn btnContact" value="Send Message"/>
                                    </div>
                                </div>
                            </form>

                        </div>
                      </div>
                    </div>
                </div>
                </div>
                </div>
                <Footer/>
                <ScrollButton/>

                 </div>
              </>
              )
}

export default Contact;