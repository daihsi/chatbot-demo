import { useEffect, useState } from 'react';
import {defaultDataset} from "./dataset";
import type {TypeAnswer} from "./types/index";
import './assets/styles/style.css';
import {AnswersList} from "./components";

let data: {
  answers: TypeAnswer[],
  chats: string[],
  currentId: string,
  dataset: {
    [key: string]: {
        answers: TypeAnswer[];
        question: string;
    }
  },
  open: boolean,
} = {
  answers: [],
  chats: [],
  currentId: "init",
  dataset: defaultDataset,
  open: false,
};

const App = (): JSX.Element => {

  const [state, setState] = useState(data);

  const initAnswersFunc = (): void => {
    const initDataset = state.dataset[state.currentId];
    const initAnswers = initDataset.answers;
    setState({...state, answers: initAnswers});
  }

  useEffect(() => {
    initAnswersFunc();
  }, []);

  return (
    <section className="c-section">
      <div className="c-box">
        <AnswersList answers={state.answers} />
      </div>
    </section>
  );
}

export default App;
