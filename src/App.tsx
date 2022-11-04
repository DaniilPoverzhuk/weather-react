import React from 'react';
import Current from './components/Current/Current';
import CurrentInfo from './components/CurrentInfo/CurrentInfo';
import Header from './components/Header/Header';
import WeatherTabs from './components/WeatherTabs/WeatherTabs';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="top">
        <Current />
        <CurrentInfo />
      </div>
      <WeatherTabs />
    </div>
  );
}

export default App;
