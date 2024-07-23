import TopicList from "@/components/TopicList";
import { getToken } from "./api/auth";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen bg-gradient-to-t from-color1 to-color2 items-center gap-20">
        <h1 className="text-white text-3xl md:text-6xl mt-20">
          Random Leetcode Question
        </h1>
        <div className="w-1/2">
          <TopicList />
        </div>
      </div>
    </>
  );
}
