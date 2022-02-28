import {Answer} from "./index";
import type {TypeAnswer} from "../types/index";

type TypeAnswers = {
  answers: TypeAnswer[];
}

const AnswersList = (props: TypeAnswers): JSX.Element => {
  const item: JSX.Element[] = [];
  for(let i = 0; i < props.answers.length; i++) {
    item.push(<Answer content={props.answers[i].content} key={i}/>);
  }
  return(
    <div className="c-grid__answer">
      {item}
    </div>
  );
}

export default AnswersList;