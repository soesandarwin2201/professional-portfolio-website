import React, { useEffect , useState } from 'react';
import { FaLinkedin, FaGithub, FaAngellist } from 'react-icons/fa';
import { styles } from '../styles';
import '../index.css'

const Home = () => {
  const [active, setActive] = useState("");
     return (  
          <div className='w-11/12 mt-9 lg:pt-0 pt-20 md:mb-40 mb-20 mx-auto md:grid md:grid-cols-2 lg:w-10/12 z-0 flex items-center flex-col-reverse'>
        <div className='flex flex-col justify-center'>
          <h4 className={`${styles.sectionSubText}`}>Hi, I am</h4>
          <h1 className={`${styles.heroHeadText}`}>Soe Sandar Win</h1>
          <p className={`${styles.heroSubText} mt-1 text-stone-950`}>Coding your dreams into reality - I specialize in building impactful websites that propel your business forward. </p>
          <ul className="list-none hidden sm:flex flex-row gap-5">
          <li>
            <a href='https://www.linkedin.com/in/soe-sandar-win-softwareengineer/' className='text-xl mt-1'><FaLinkedin /></a>
          </li>
          <li>
            <a href='https://github.com/soesandarwin2201' className='text-xl mt-1'><FaGithub /></a>
          </li>
          <li>
            <a href='https://wellfound.com/u/soe-sandar-win' className='text-xl mt-1'><FaAngellist /></a>
          </li>
       </ul>
       <a href='' download>
       <button
            type='submit'
            className=' mt-5 btn py-3 px-8 rounded-xl outline-none w-fit text-stone-950 font-bold drop-shadow-lg'
          >Get My Resume</button>
       </a>
        </div>
        <div className='lg:h-[600px] md:h-[400px] h-[400px]  w-full flex items-center justify-center '>
            <h3>thee d model</h3>
        </div>
    </div>
     );
}
 
export default Home;