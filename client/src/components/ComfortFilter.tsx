const ComfortFilter = ({ selectedComfort, setSelectedComfort }: any) => {
  const comforts = ["low", "medium", "high"];

  return (
    <div className="flex gap-3 flex-wrap">
      {comforts.map((comfort) => (
        <span
          key={comfort}
          className={`cursor-pointer ${
            selectedComfort === comfort ? "bg-blue-400" : "bg-gray-100"
          } text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded border`}
          onClick={() => setSelectedComfort(comfort)}
        >
          {comfort}
        </span>
      ))}
    </div>
  );
};

export default ComfortFilter;
