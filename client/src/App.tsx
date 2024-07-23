import TopicFilter from "./components/TopicFilter";
import DifficultyFilter from "./components/DifficultyFilter";
import ComfortFilter from "./components/ComfortFilter";
import QuestionResult from "./components/QuestionResult";
function App() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen bg-gradient-to-t from-color1 to-color2 items-center gap-20 text-white">
        <h1 className="text-3xl md:text-6xl mt-4">Random Leetcode Question</h1>
        <div className="w-1/2">
          <h2 className="text-4xl text-center mb-4">Topics</h2>
          <TopicFilter />
        </div>
        <div className="flex justify-evenly items-center w-1/2">
          <div>
            <h2 className="text-4xl text-center mb-4">Difficulty</h2>
            <DifficultyFilter />
          </div>
          <div>
            <h2 className="text-4xl text-center mb-4">Comfort Level</h2>
            <ComfortFilter />
          </div>
        </div>
        <button className="bg-green-500 p-3 w-1/2 rounded-2xl shadow-lg hover:bg-green-600 text-2xl font-bold">
          Generate
        </button>
        {/* <QuestionResult /> */}
      </div>
    </>
  );
}

export default App;
