const DifficultyFilter = ({
  selectedDifficulty,
  setSelectedDifficulty,
}: any) => {
  const difficulties = ["easy", "medium", "hard"];

  return (
    <div className="flex gap-3 flex-wrap">
      {difficulties.map((difficulty) => (
        <span
          key={difficulty}
          className={`cursor-pointer ${
            selectedDifficulty === difficulty ? "bg-blue-400" : "bg-gray-100"
          } text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded border`}
          onClick={() => setSelectedDifficulty(difficulty)}
        >
          {difficulty}
        </span>
      ))}
    </div>
  );
};

export default DifficultyFilter;
