import { comfortLevels } from "../globals/global";
const ComfortFilter = ({ selectedComfort, setSelectedComfort }: any) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {comfortLevels.map((comfort) => {
        let bgColor;
        switch (comfort) {
          case "low":
            bgColor = "bg-green-400";
            break;
          case "medium":
            bgColor = "bg-yellow-400";
            break;
          case "high":
            bgColor = "bg-red-400";
            break;
          default:
            bgColor = "bg-gray-100";
        }

        return (
          <span
            key={comfort}
            className={`cursor-pointer ${bgColor} ${
              selectedComfort === comfort ? "ring-4 ring-blue-600" : ""
            } text-black text-md font-medium me-2 px-2 py-1 rounded`}
            onClick={() => setSelectedComfort(comfort)}
          >
            {comfort}
          </span>
        );
      })}
    </div>
  );
};

export default ComfortFilter;
