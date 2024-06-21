import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbarhead from './Navbar';

const Banner = () => {
  return (
  
       
            <div className="bannercover">
              <div className="container">
                <div className="row">
            <Navbarhead/>
             
                     </div>
              </div>
              <section className='my-5'>
                <div className="container">
                  <div className="row align-items-center g-4">
                    <div className="col-lg-8">
                      <motion.h1 
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5 }}
                        className="text-white bannerhead ">
                        HARBOUR LIGHTS
                        <br />DE <span className="bannerheadblue">GRESOGONO</span>
                      </motion.h1>
                      <motion.h3 
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5 }}
                        className="text-white bedroomtxt pt-4">
                        1, 2 & 3 Bedrooms Seaside Apartments <br /> in Dubai Maritime City
                      </motion.h3>
                      <div className="couponwrap">
                        <div className="coupon">
                          <motion.p
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.5 }}
                            className="m-0 coupontxt">
                            Rental Returns of <b>UPTO 11%**</b>
                          </motion.p>
                        </div>
                        <div className="coupon">
                          <motion.p
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.5 }}
                            className="m-0 coupontxt">
                            Capital Appreciation of <b>UPTO 32%**</b>
                          </motion.p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5 }}
                        className="pricingdiv">
                        <p className="startxt">PRICING STARTS FROM</p>
                        <h2 className="digit">$ 425,000</h2>
                        <h3 className="million">AED 1.3 Million</h3>
                        <button type="submit" className="presentbtn my-4">GET A PRESENTATION</button>
                      </motion.div>
                      <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5 }}
                        className="belowpricing">
                        <p className="pricetxt">Get an Expert’s Presentation of Real <br />Estate in Dubai for Life and investment</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
    
  );
};

export default Banner;
