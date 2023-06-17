import Main from './Main';
import bgBottom from './bg-bottom.svg'
import bgTop from './bg-top.svg'

function App() {
  return (
    <>
      <div className='bg-top'>
        <img src={bgTop} alt='' className='bg-width' />
      </div>
      <Main />
      <div className='bg-bottom'>
        <img src={bgBottom} alt='' className='bg-width' />
      </div>
    </>
  );
}

export default App;
