import { topics } from "../globals/global";
const TopicFilter = ({ selectedTopics, setSelectedTopics }: any) => {

  const handleTopicChange = (topic: any) => {
    setSelectedTopics((prev: any) =>
      prev.includes(topic)
        ? prev.filter((t: any) => t !== topic)
        : [...prev, topic]
    );
  };

  return (
    <div className="flex gap-4 flex-wrap">
      {topics.map((topic) => (
        <span
          key={topic}
          className={`cursor-pointer ${
            selectedTopics.includes(topic) ? "bg-blue-400" : "bg-gray-100"
          } text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border`}
          onClick={() => handleTopicChange(topic)}
        >
          {topic}
        </span>
      ))}
    </div>
  );
};

export default TopicFilter;
