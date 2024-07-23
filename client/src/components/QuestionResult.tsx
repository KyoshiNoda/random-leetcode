import { getRandomQuestion } from "@/app/api/questions";
import { Question } from "@/types/types";
const QuestionResult = async () => {
  const question: Question | null = await getRandomQuestion({
    difficulty: "easy",
    topic: ["Array Hashing"],
  });

  return <div className="text-white">{question?.name}</div>;
};

export default QuestionResult;
