import Profile from './components/Profile';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Reveal from './components/Reveal';
import DotGrid from './components/backgorund/DotGrid';

function App() {
  return (
    <>
<div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-black">
  <DotGrid
    dotSize={10}
    gap={15}
    // backgroundColor="#000000"
    baseColor="#271e37"
    activeColor="#5227ff"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
</div>

      <div>
        <Navbar />
      </div>
      <div className='mt-32 md:mt-36'></div>
      <div id="About">
        <Reveal>
          <Profile />
        </Reveal>
        
      </div>
      <div id="Projects">
        <Reveal>
          <Projects />
        </Reveal>
        
      </div>
      {/* <div id="Experience">
        <Experience />
      </div> */}
      <div id="Contact">
        
        <Reveal><Contact /></Reveal>
      </div>
    </>
  );
}

export default App;
