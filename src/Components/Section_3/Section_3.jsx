import React from 'react'
import Title from '../Title/Title'
import Content from '../Content/Content'
import group1 from './../../assets/img/group1.png';
import group2 from './../../assets/img/group2.png';
import group3 from './../../assets/img/group3.png';
import group4 from './../../assets/img/group4.png';

const Section_3 = () => {
  return (
    <section>
      <div className='w-[80%] mx-auto'>
        <Title text={"Our"} span_text={"Futures"} mini_text={"This very extraordinary feature, can make learning activities more efficient"} />
        <Content
          img={group1}
          span_text={"Tools"}
          text={"For Teachers And Learners"}
          mini_text={"Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit."} />
        <Content
          className={"flex-row-reverse"}
          img={group2}
          span_text={"Quizzes,"}
          text={"Assessments, Tests"}
          mini_text={"Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook."} />
        <Content
          img={group3}
          span_text={"Tools"}
          text={"For Teachers And Learners"}
          mini_text={"Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit."} />

        <Content
          className={"flex-row-reverse"}
          img={group4}
          span_text={"Tools"}
          text={"For Teachers And Learners"}
          mini_text={"Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit."} />

      </div>
    </section>
  )
}

export default Section_3