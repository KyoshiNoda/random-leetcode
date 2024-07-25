import { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import TopicFilter from "./components/TopicFilter";
import ComfortFilter from "./components/ComfortFilter";
import QuestionResult from "./components/QuestionResult";
import DifficultyFilter from "./components/DifficultyFilter";

export default function Home() {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedComfort, setSelectedComfort] = useState("");

  const [filters, setFilters] = useState({});

  const handleGenerateClick = () => {
    setFilters({
      topics: selectedTopics,
      difficulty: selectedDifficulty,
      comfort_level: selectedComfort,
    });
  };

  return (
    <>
      <div className="flex flex-col h-screen w-screen bg-gradient-to-t from-color1 to-color2 items-center gap-12 text-white">
        <div className="flex gap-12 items-center">
          <h1 className="text-3xl md:text-6xl mt-4">
            Random Leetcode Question
          </h1>
          <div className=" h-full flex items-end cursor-pointer">
            <FaRegPlusSquare
              size={48}
              onClick={() => console.log("clicked!")}
            />
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl text-center mb-4">Topics</h2>
          <TopicFilter
            selectedTopics={selectedTopics}
            setSelectedTopics={setSelectedTopics}
          />
        </div>
        <div className="flex justify-evenly items-center w-1/2">
          <div>
            <h2 className="text-4xl text-center mb-4">Difficulty</h2>
            <DifficultyFilter
              selectedDifficulty={selectedDifficulty}
              setSelectedDifficulty={setSelectedDifficulty}
            />
          </div>
          <div>
            <h2 className="text-4xl text-center mb-4">Comfort Level</h2>
            <ComfortFilter
              selectedComfort={selectedComfort}
              setSelectedComfort={setSelectedComfort}
            />
          </div>
        </div>
        <button
          className="bg-green-500 p-3 w-1/2 rounded-2xl shadow-lg hover:bg-green-600 text-2xl font-bold"
          onClick={handleGenerateClick}
        >
          Generate
        </button>
        <QuestionResult filters={filters} />
      </div>
    </>
  );
}
