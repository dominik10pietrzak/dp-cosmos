import './App.scss';
import usertive from './assets/usertive.svg';
import Footer from './components/Footer';
import LinkButtonList from './components/LinkButtonList';
import Illustration from './components/Illustration';
import BackgroundItems from './components/BackgroundItems';

// https://github.com/r-spacex/SpaceX-API/blob/master/docs/v4/README.md

//baseUrl https://api.spacexdata.com/v4/

const App = () => {
  return (
    <div className='App'>
      <img className='usertive-logo' src={usertive} alt='images' />
      <BackgroundItems />
      <div className='content-wrapper'>
        <LinkButtonList />
        <Illustration />
      </div>
      <Footer />
    </div>
  );
};

export default App;
