import React from "react";
import { Link } from "react-router-dom";

import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/swiper.min.css'
// import '../assets/css/owl.theme.default.min.css'
// import '../assets/css/owl.carousel.min.css'
import './assets/css/signatra-font.css'

import logo from './assets/img/logo.png'
import main_iso from './assets/img/main_iso.png'
import iso_bg from './assets/img/iso_bg.png'
import step_1 from './assets/img/step_1.png'
import step_2 from './assets/img/step_2.png'
import step_3 from './assets/img/step_3.png'
import step_bg from './assets/img/step_bg.png'
import call_bg from './assets/img/call_bg.png'
import growth_bg from './assets/img/growth-bg.png'
import growth_1 from './assets/img/growth-icon-1.png'
import growth_2 from './assets/img/growth-icon-2.png'
import growth_3 from './assets/img/growth-icon-3.png'
import growth_4 from './assets/img/growth-icon-4.png'



const Home = () => {
  return (
    <div className="App">
        <div className="header-transparent nav-sticky nav-light">
          <div className="off-canvas-menu-area">
            <div className="container">
              <div className="offset-menu-wraper clearfix">
                <div className="float-left">
                  <Link to="/" className="offcanvas-nav-brand">
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="xs-banner agency-banner6" id="homes" data-scrollax-parent="true">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 align-self-center">
                        <div className="agency-banner-content banner-style6">
                            <h2 className="banner-title"><span className="title-underline">Selling </span> Made <span className="title-underline">Easy</span></h2>
                            <p>List your items on Blazesell to get rid of old items <b>Blazing</b> fast. Hassle and stress free get the price you want.</p>
                            <div className="banner-video-popups">
                                <Link to='/auth/register-page' className="btn btn-primary style3 icon-right">Get Started <i className="icon icon-arrow-right"></i></Link>
                                <Link to='/auth/login-page' className="btn btn-secondary style5 icon-right">Login <i className="icon icon-arrow-right"></i></Link>                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="agency-banner-img">
                            <img src={main_iso} data-scrollax="properties: { translateY: '50%' }" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-icon-bg">
                <img src={iso_bg} alt="" />
            </div>
        </section>

        <section className="growth-card-section xs-section-padding">
        <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="agency-section-title text-center style5">
                            <h2 className="main-title medium">Convenience First</h2>                        </div>
                    </div>
                </div> 
                <div className="row xs-mb-6">
                    <div className="col-md-6 col-lg-3">
                        <div className="info-card text-center">
                            <div className="info-card-header text-center">
                                <img src={growth_1} alt="" />
                            </div>
                            <div className="info-card-body">
                                <h3 className="card-title">Instant Payments</h3>
                                <p>Blazesell will pay you instantly upon receiving confirmation that you have shipped your item.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="info-card text-center">
                            <div className="info-card-header">
                                <img src={growth_2} alt="" />
                            </div>
                            <div className="info-card-body">
                                <h3 className="card-title">Zero Stress</h3>
                                <p>Once you list your items just sit back and relax. We handle all of the complications with the selling process.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="info-card text-center">
                            <div className="info-card-header" style={{position: "center"}} >
                                <img src={growth_3} alt="" />
                            </div>
                            <div className="info-card-body">
                                <h3 className="card-title">Custom Target</h3>
                                <p>When you list your items on Blazesell you can choose exactly how much you want to get paid.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="info-card text-center">
                            <div className="info-card-header">
                                <img src={growth_4} alt="" />
                            </div>
                            <div className="info-card-body">
                                <h3 className="card-title">Save Time</h3>
                                <p>Listing on Blazesell is the fastest way to get rid of your unwanted items.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="growth-card-bg">
                <img src={growth_bg} alt="" />
            </div>
        </section>

        <section className="xs-section-padding rise-feature-section" data-delighter="start:0.80" style={{ backgroundImage: `url(${growth_bg})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 align-self-center">
                        <div className="about-summary-content2">
                            <h2 className="about-title">Hassle & <span> Stress Free</span></h2>
                            <p> Three Step process and <b>instant payment</b> upon shipment.</p>
                            <span className="content-separete-border"></span>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="step-by-steps-feature">
                            <ul className="feature-steps">
                                <li className="feature-step clearfix">
                                    <div className="feature-step-content">
                                        <h3 className="feature-step-title">Step 1</h3>
                                        <span className="feature-step-des">List item with Images</span>
                                    </div>
                                    <div className="feature-step-img">
                                        <img src={step_1} alt="" />
                                    </div>
                                </li>
                                <li className="feature-step clearfix">
                                    <div className="feature-step-content">
                                        <h3 className="feature-step-title">Step 2</h3>
                                        <span className="feature-step-des">Ship item with label</span>
                                    </div>
                                    <div className="feature-step-img">
                                        <img src={step_2} alt=""/>
                                    </div>
                                </li>
                                <li className="feature-step clearfix">
                                    <div className="feature-step-content">
                                        <h3 className="feature-step-title">Step 3</h3>
                                        <span className="feature-step-des">Recieve Instant Payments</span>
                                    </div>
                                    <div className="feature-step-img">
                                        <img src={step_3} alt="" />
                                    </div>
                                </li>
                            </ul>
                            <div className="feature-step-bg">
                                <img src={step_bg} alt="" />
                            </div>
                            <img src={growth_bg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>


      <section className="calltoaction-section-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <div className="call-to-action-content-3">
                    <h2 className="call-to-action-title">Sign Up for Free to save time and make money</h2>
                    <Link to='/auth/register' className="btn btn-primary style6 icon-right" > Get Started </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="cal_to_action_animation_wraper">
          <div id="cal_to_action_animation">
            <div className="layer" data-depth="0.20"><img src={call_bg} alt="" /></div>
          </div>
        </div>
      </section>

    


      <footer className="xs-footer-section footer-style7" >
            <div className="footer-bottom-area">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <div className="copyright-section">
                    <p>Copyright 2021, <a href="https://blazesell.com">Blazesell</a>. All Rights Reserved.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
	    </footer>
      
    </div>
  );
};

export default Home;
