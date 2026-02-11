import Profile from './components/Profile';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Reveal from './components/Reveal';
import DotGrid from './components/backgorund/DotGrid';
import Stats from './components/Stats';
import Leadership from './components/Leadership';

import Skills from './components/Skills';

function App() {
  return (

    <>

      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-black">
        <DotGrid
          dotSize={2}
          gap={24}
          // backgroundColor="#000000"
          baseColor="#222222"
          activeColor="#22d3ee"
          proximity={100}
          shockRadius={80}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="relative w-full overflow-x-hidden">
        <div className='select-none' >
          <Navbar />

        </div>
        {/* <div className='mt-32 md:mt-36'></div> */}
        <div id="About" className='pt-24 md:pt-16 mt-6'>
          <Reveal delay={0.2}>
            <Profile />
          </Reveal>

        </div>
        <div id="Skills" className='mt-6 mb-20'>
          <Reveal delay={0.2}>
            <Skills />
          </Reveal>
        </div>

        <div className='select-none' id="Projects">
          <Reveal delay={0.2}>
            <Projects />
          </Reveal>

        </div>
        <div className='select-none' id="Stats">
          <Reveal delay={0.2}>
            <Stats />
          </Reveal>

        </div>
        <div className='select-none' id="Leadership">
          <Reveal delay={0.2}>
            <Leadership />
          </Reveal>

        </div>
        {/* <div id="Experience">
          <Experience />
        </div> */}
        <div className='select-none' id="Contact">

          <Reveal delay={0.2}><Contact /></Reveal>
        </div>
      </div>
    </>

  );
}

export default App;
