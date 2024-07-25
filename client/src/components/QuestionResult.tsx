import { useState, useEffect } from "react";
import { getRandomQuestion } from "../api/questions";
import { Question } from "../types";

const QuestionResult = ({ filters }: any) => {
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      const result = await getRandomQuestion(filters);
      setQuestion(result);
    };

    if (Object.keys(filters).length > 0) {
      fetchQuestion();
    }
  }, [filters]);

  return (
    <div className="text-black text-3xl bg-white p-3">
      {question ? (
        <a href={question.link}>{question.name}</a>
      ) : (
        <p>No question found</p>
      )}
    </div>
  );
};

export default QuestionResult;
