import React from 'react'
import '../styles/book.css'
import { motion } from "framer-motion";
import 'lightgallery/css/lightgallery.css'
import  LightGallery  from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom'


const Book = () => {

    const data=[
       {
        image: "images/icon1.png",
        para: "BOOK WITH",
        subtext:"Only 20%"
       },
       {
        image: "images/icon2.png",
        para: "PAYMENT PLAN",
        subtext:"Easy 70/30"
       },
       {
        image: "images/icon3.png",
        para: "HANDOVER ON",
        subtext:"Q2 2027"
       },
       {
        image: "images/icon4.png",
        para: "AREA STARTS FROM",
        subtext:"700 sqmt"
       },
    ]
  return (
    <section className='bookwraper '>

    <div className='container'>
    <div className="row justify-content-center align-items-center g-5">
    {
            data.map((item,index)=>(
                <motion.div 
                key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
                className="col-6 col-xl-3">
                    <div className='my-4' >
                    <LightGallery speed={500} plugins={[lgZoom]}>
                       <a href={item.image}>
                       <img src={item.image} alt="" className='bookimg'/>
                       </a>
                    </LightGallery>

                        <p className='booktxt m-0 pt-4 text-center'>{item.para}</p>
                        <p className='booksubtxt m-0 text-center'>{item.subtext}</p>
                    </div>
                </motion.div>
            ))
        }
    </div>
       
    </div>

    </section>
  )
}

export default Book