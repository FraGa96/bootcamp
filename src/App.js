import React, { useState } from 'react';
import Excercises from './components/exercises/Excercises';
import Header from './components/common/Header/Header';
import Landing from './components/landing/Landing';
import { viewsEnum } from './utils/constants';
import './App.css';

function App() {
  const [view, setView] = useState(viewsEnum.LANDING);

  const handleNavigation = (newView) => {
    setView(newView);
  }

  let content = null;

  switch (view) {
    case viewsEnum.EXCERCISES:
      content = <Excercises />;
      break;
    case viewsEnum.LANDING:
    default:
      content = <Landing />;
  }

  return (
    <div>
      <Header view={view} onNav={handleNavigation} />

      {content}
    </div>
  );
}

export default App;
