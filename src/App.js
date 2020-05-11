import React from 'react';
import logo from './logo.svg';
import './App.css';
import YouTube from 'react-youtube';
import MyCarousel from './MyCarousel'
import SliderHeader from './SliderHeader';
import Header from './Header';
import MainText from './MainText';
import MyHr from './myHr';

class App extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
 
    return (
      <div className='App'>
        <Header />  
        <YouTube className='youtube' videoId="-dbWWEVl0tA" opts={opts} onReady={this._onReady} />
        <SliderHeader />
        <MyCarousel />
        <MyHr />
        <MainText />
      </div>
    )
    
  }
  
}

export default App;
