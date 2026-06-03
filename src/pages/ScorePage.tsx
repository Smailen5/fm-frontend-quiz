type ScorePageProps = {
  correctAnswers?: number;
  questionLength?:number;
}

export const ScorePage:React.FC<ScorePageProps> = ({correctAnswers, questionLength}) => {
  return <div>le risposte corrette sono {correctAnswers} di {questionLength} </div>;
};
