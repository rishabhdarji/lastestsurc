import React, { useEffect } from 'react';
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";

export default (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <React.Fragment>
      <Header homepage="true" />
      {/* Login */}
      <div className="login">
        {/* Container */}
        <div className="container container--type-3">
          {/* Container */}
          <div className="container">
            {/* Login container */}
            <div className="login__container">
              {/* Login d-flex */}
              <div className="login__d-flex d-flex">
                {/* Login left */}
                <div className="login__left">
                  {/* Login box */}
                  <div className="login__box active js-login-in">
                    {/* Login heading */}
                    <h4 className="login__h4">Existing customers</h4>
                    {/* End login heading */}
                    {/* Login description */}
                    <p className="login__description">Sign in to your account below:</p>
                    {/* End login description */}
                    {/* Form */}
                    <form>
                      {/* Form group */}
                      <div className="form-group required">
                        <input type="email" required="required" name="customer[email]" placeholder="Email address" className="form-group__input" />
                      </div>
                      {/* End form group */}
                      {/* Form group */}
                      <div className="form-group required">
                        <input type="password" required="required" name="customer[password]" placeholder="Password" className="form-group__input" />
                      </div>
                      {/* End form group */}
                      {/* Forgot password */}
                      <div className="login__forgot-password"><a href="#" className="js-login-forgot-password">forgot password?</a></div>
                      {/* End forgot password */}
                      {/* Action */}
                      <div className="login__action"><input className="second-button" type="submit" value="Sign in" /></div>
                      {/* End action */}
                    </form>
                    {/* End form */}
                  </div>
                  {/* End login box */}
                </div>  
                {/* End login left */}
                {/* Login right */}
                <div className="login__right">
                  {/* Login box */}
                  <div className="login__box active">
                    {/* Login heading */}
                    <h4 className="login__h4">New customers</h4>
                    {/* End login heading */}
                    {/* Login description */}
                    <p className="login__description">Create an account below:</p>
                    {/* End login description */}
                    {/* Form */}
                    <form>
                      {/* Form groups */}
                      <div className="row form-groups">
                        <div className="col-6">
                          {/* Form group */}
                          <div className="form-group">
                            <input type="text" name="customer[first_name]" placeholder="First name" className="form-group__input" />
                          </div>
                          {/* End form group */}
                        </div>
                        <div className="col-6">
                          {/* Form group */}
                          <div className="form-group">
                            <input type="text" name="customer[last_name]" placeholder="Last name" className="form-group__input" />
                          </div>
                          {/* End form group */}
                        </div>
                      </div>
                      {/* End form groups */}
                      {/* Form group */}
                      <div className="form-group required">
                        <input type="email" required="required" name="customer[email]" placeholder="Email address" className="form-group__input" />
                      </div>
                      {/* End form group */}
                      {/* Form group */}
                      <div className="form-group required">
                        <input type="password" required="required" name="customer[password]" placeholder="Password" className="form-group__input" />
                      </div>
                      {/* End form group */}
                      {/* Action */}
                      <div className="login__action"><input className="second-button" type="submit" value="Create an account" /></div>
                      {/* End action */}
                    </form>
                    {/* End form */}
                  </div>
                  {/* End login box */}
                </div>
                {/* End login right */}
              </div>
              {/* End login d-flex */}
            </div>
            {/* End login container */}
          </div>
          {/* End container */}
        </div>
        {/* End container */}
      </div>
      {/* End login */}
      <Footer />
    </React.Fragment>
  )
}