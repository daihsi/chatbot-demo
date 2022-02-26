import React, { useState } from 'react';
import defaultDataset from "./dataset";
import './assets/styles/style.css';

function App(): JSX.Element{
  const [state, setState] = useState({
    answers: [],
    chats: [],
    currentId: "init",
    dataset: defaultDataset,
    opne: false
  });

  return (
    <section className="c-section">
      <div className="c-box">
        {state.currentId}
      </div>
    </section>
  );
}

export default App;
