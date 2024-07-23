const DifficultyFilter = () => {
  return (
    <div className="flex gap-3 flex-wra">
      <span className="bg-red-400 text-xs text-black font-medium me-2 px-2.5 py-0.5 rounded border">
        Low
      </span>
      <span className="bg-yellow-300 text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded border ">
        Medium
      </span>
      <span className="bg-green-600 text-xs  text-black font-medium me-2 px-2.5 py-0.5 rounded border">
        High
      </span>
    </div>
  );
};
export default DifficultyFilter;
