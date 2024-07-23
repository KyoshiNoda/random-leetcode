import { useState, useEffect } from "react";
import { getRandomQuestion } from "../api/questions";
import { Question } from "../types";

const QuestionResult = () => {
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      const randomQuestion = await getRandomQuestion({
        difficulty: "easy",
      });
      setQuestion(randomQuestion);
    };

    fetchQuestion();
  }, []);

  return (
    <a className="text-black text-3xl bg-white p-3" href={question?.link}>
      {question?.name}
    </a>
  );
};

export default QuestionResult;
