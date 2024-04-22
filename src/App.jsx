import './App.css';
import { useState } from 'react';

import MainForm from './components/Shortens/MainForm';
import ResultPanel from './components/Shortens/ResultPanel';
import LinkContext from './context/LinkContext';

function App() {
  const [link, setLink] = useState('');
  return (
    <LinkContext.Provider value={{ link: link, changeLink: setLink }}>
      <div className="App">
        <h1>Short link</h1>
        <MainForm />
        <ResultPanel />
      </div>
    </LinkContext.Provider>
  );
}

export default App;
