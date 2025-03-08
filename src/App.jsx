import Header from "./Components/Header/Header"
import Section from "./Components/Section/Section"


import User from "./Components/User/User"
import one from "./assets/img/one.png"
import two from './assets/img/two.png';
import three from './assets/img/three.png';
import four from './assets/img/four.png';
import five from './assets/img/five.png';
import six from './assets/img/six.png';
import seven from './assets/img/seven.png';
import eight from './assets/img/eight.png';

import Card from "./Components/Card/Card";
import img1 from './assets/img/img1.png';
import img2 from './assets/img/img2.png';
import img3 from './assets/img/img3.png';
function App() {

  return (
    <>

      {/* <Header />
      
      <main>
        <Section />
      </main> */}

      <div className="w-[1350px] mx-auto px-4 bg-[#F2EFEF]">
        <h1 className="text-[50px] text-center">User Card</h1>

        <div className="flex flex-wrap gap-4 justify-center">
          <User className={'bg-[#FCF2E5]'} img={one} userName={"Emily Johnson"} userJob={"Product Development Product Manager"} />
          <User className={'bg-[#FCF2E5]'} img={two} userName={"Arjun Patel"} userJob={"Product Development Product Manager"} />
          <User className={'bg-[#FCF2E5]'} img={three} userName={"Carlos Hernández"} userJob={"Product Development Product Manager"} />
          <User className={'bg-[#FCF2E5]'} img={four} userName={"Amina Idris"} userJob={"Product Development Product Manager"} />
          <User className={'bg-white'} img={five} userName={"Takumi Sato"} userJob={"Product Development Product Manager"} />
          <User className={'bg-white'} img={six} userName={"Chen Wei"} userJob={"Product Development Product Manager"} />
          <User className={'bg-white'} img={seven} userName={"Emma Dubois"} userJob={"Product Development Product Manager"} />
          <User className={'bg-white'} img={eight} userName={"Igor Sokolov"} userJob={"Product Development Product Manager"} />
        </div>

        <h1 className="text-[50px] text-center">Info Card</h1>
        <div className="flex justify-between">
          <Card btn={"Read now"}
            className={'bg-blue-400 py-4 px-8 rounded-full'} img={img1}
            userName={"Discovering the World of Mountains"}
            userJob={"In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. "} />
          <Card btn={"Read now"}
            className={'bg-blue-400 py-4 px-8 rounded-full'} img={img2}
            userName={"Discovering the World of Mountains"}
            userJob={"In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. "} />
          <Card btn={"Read now"}
            className={'bg-blue-400 py-4 px-8 rounded-full'} img={img3}
            userName={"Discovering the World of Mountains"}
            userJob={"In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. "} />
        </div>
      </div>
    </>
  )
}

export default App
