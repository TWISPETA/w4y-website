import './styles.css';
import WayIconWhite from '../../assets/w4y-white.png'
import WayIconBlack from '../../assets/w4y.png'

function Main() {
  return (
    <section id="main">
      <div className='left-side'>
        <div className='main-left'>
          <h1>You need it</h1>
        </div>
      </div>

      <div className='right-side'>

        <div className='main-right'>
          <h1>We build it</h1>
        </div>
        {window.screen.width > 800 &&  <img className='logo' alt='logo' src={WayIconWhite} change /> }

        {window.screen.width < 800 &&  <img className='logo' alt='logo' src={WayIconBlack} /> }
       
      </div>
    </section>
  );
}

export default Main;
