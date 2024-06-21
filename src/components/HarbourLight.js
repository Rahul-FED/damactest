import React from 'react';
import  '../styles/harbour.css';
import { motion } from "framer-motion";
import 'lightgallery/css/lightgallery.css'
import  LightGallery  from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom'

const HarbourLight = () => {
  const data = [
    {
      image: "images/circle1.jpg",
      para: "Floating ",
      subtext:"Pools"

    },
    {
      image: "images/circle2.png",
      para: "Spacious Cabins ",
      subtext:"Like Rooms"

    },
    {
      image: "images/circle3.png",
      para: "Sea Facing ",
      subtext:"Swimming Pools"

    },
    {
      image: "images/circle4.png",
      para: "Gymnasium ",
      subtext:"& Fitness"

    }
  ];

  return (
    <>
      <section className='my-5'> 
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
         className="container justify-content-center">
          <div className="row justify-content-center">
           <div className="col-lg-8">
          <div className='d-flex justify-content-center'>
          <img src="/images/harbourligh.png" alt="" className="harbourimg" />
          </div>
            <h2 className='harbourhead m-0 pt-4'>Features & Amenities</h2>
            <p className='text-center m-0 featuresub py-3'>
              Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.
            </p>
           </div>
          </div>
        </motion.div>
      </section>

      <section>
        <div className="container">
         <div className="row justify-content-between g-4">
            {data.map((item, index) => (
               
                    <div className="col-5 col-xl-2 " key={index}>
                      <div className="cardwrap">
                      <LightGallery speed={500} plugins={[lgZoom]}>

                      <a href={item.image}>
                      <img src={item.image} alt="" className='cardimg'/>
                      </a>
                      </LightGallery>
                      <div className='shadowcard'>
                      <div>
                      <motion.p
                        whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
                       className='harbourcardtxt m-0 text-center'>{item.para}</motion.p>
                      <motion.p
                        whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
                       className='subtext m-0 text-center'>{item.subtext}</motion.p>
                      </div>
                      </div>
                      
                      </div>
                    </div>
            ))}
         </div>
        </div>
      </section>

      <section>
      <div className="container">
        <div className="row text-right">
          <div className="col-lg-6">
            
          </div>
          <div className="col-lg-6">
            <div>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
               className='m-0  py-4 tc'>*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</motion.p>
              <div className='btnwrap py-2'>
              <button type='submit' className='ext'>EXTERIORS</button>
              <button type='submit' className='int'>INTERIORS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default HarbourLight;
