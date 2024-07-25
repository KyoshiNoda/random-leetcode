const DifficultyFilter = ({
  selectedDifficulty,
  setSelectedDifficulty,
}: any) => {
  const difficulties = ["easy", "medium", "hard"];

  return (
    <div className="flex gap-3 flex-wrap">
      {difficulties.map((difficulty) => {
        let bgColor;
        switch (difficulty) {
          case "easy":
            bgColor = "bg-green-400";
            break;
          case "medium":
            bgColor = "bg-yellow-400";
            break;
          case "hard":
            bgColor = "bg-red-400";
            break;
          default:
            bgColor = "bg-gray-100";
        }

        return (
          <span
            key={difficulty}
            className={`cursor-pointer ${bgColor} ${
              selectedDifficulty === difficulty ? "ring-4 ring-blue-600" : ""
            } text-black text-md font-medium me-2 px-3 py-1 rounded`}
            onClick={() => setSelectedDifficulty(difficulty)}
          >
            {difficulty}
          </span>
        );
      })}
    </div>
  );
};

export default DifficultyFilter;
