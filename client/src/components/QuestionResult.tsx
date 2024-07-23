import { getRandomQuestion } from "@/app/api/questions";
import { Question } from "@/types/types";
interface QuestionResultProps {
  question: string;
}
const QuestionResult = async () => {
  const question: Question | null = await getRandomQuestion({
    difficulty: "easy",
    topic: ["Array Hashing"],
  });

  return (
    <a className="text-black text-3xl bg-white p-3" href={question?.link}>
      {question?.name}
    </a>
  );
};

export default QuestionResult;
