import React from 'react'
import Title from '../Title/Title'
import Content from '../Content/Content'
import girl_img from './../../assets/img/girl.png';
const Section = () => {
  return (
        <section>
            <div className='w-[90%] mx-auto'>

                <Title text={"Our"} span_text={"Futures"} mini_text={"This very extraordinary feature, can make learning activities more efficient"}/>
                <Content
                img={girl_img}
                span_text={"Tools"}
                text={"For Teachers And Learners"}
                 mini_text={"Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit."}/>
            </div>
        </section>
  )
}

export default Section