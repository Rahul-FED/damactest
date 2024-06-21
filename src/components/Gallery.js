import React from "react";
import "lightgallery/css/lightgallery.css";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <>
     
 
        <section className="my-4">
          <div className="container">
            <div className="row g-4">
              <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
              className="">
              <LightGallery speed={500} plugins={[lgZoom]}>
                <a href="/images/gallery1.jpg">
                  <img
                    src="/images/gallery1.jpg"
                    alt="Gallery Image 1"
                    className="w-100"
                  />
                </a>
              </LightGallery>
               
              </motion.div>
              <motion.div
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
               className="col-xl-3 col-3">
              <LightGallery speed={500} plugins={[lgZoom]}>
              <a href="/images/gallery2.jpg">
                  <img
                    src="/images/gallery2.jpg"
                    alt="Gallery Image 2"
                    className="w-100"
                  />
                </a>
              </LightGallery>
              
              </motion.div>
              <motion.div
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
               className="col-xl-3 col-3">
              <LightGallery speed={500} plugins={[lgZoom]}>
              <a href="/images/gallery3.jpg">
                  <img
                    src="/images/gallery3.jpg"
                    alt="Gallery Image 3"
                    className="w-100"
                  />
                </a>
              </LightGallery>
               
              </motion.div>
              <motion.div
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
               className="col-xl-3 col-3">
              <LightGallery speed={500} plugins={[lgZoom]}>
              <a href="/images/gallery4.jpg">
                  <img
                    src="/images/gallery4.jpg"
                    alt="Gallery Image 4"
                    className="w-100"
                  />
                </a>
              </LightGallery>
               
              </motion.div>
              <motion.div
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
               className="col-xl-3 col-3">
              <LightGallery speed={500} plugins={[lgZoom]}>
              <a href="/images/gallery4.jpg">
              <img
                  src="/images/gallery4.jpg"
                  alt="Gallery Image 4"
                  className="w-100"
                />
              </a>

              </LightGallery>
               
              </motion.div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Gallery;
