import PocketBase from "pocketbase";
import { Filters, Question } from "../types";
const pb = new PocketBase("http://127.0.0.1:8090");

const buildFilterQuery = (filters: Filters) => {
  const filterConditions = Object.entries(filters)
    .filter(([_, value]) => value !== null && value !== "")
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `(${value.map((item) => `${key}~"${item}"`).join(" || ")})`;
      }
      return `${key}="${value}"`;
    });

  return filterConditions.join(" && ");
};

export const getFilteredQuestions = async (
  filters: Filters = {}
): Promise<Question[]> => {
  await pb.admins.authWithPassword(
    `${import.meta.env.VITE_POCKETBASE_USERNAME}`,
    `${import.meta.env.VITE_POCKETBASE_PASSWORD}`
  );
  const filterQuery = buildFilterQuery(filters);
  console.log(filterQuery);

  const records = await pb.collection("questions").getFullList<Question>({
    filter: filterQuery,
    sort: "-created",
  });
  console.log(records);
  return records;
};

export const getRandomQuestion = async (
  filters: Filters = {}
): Promise<Question | null> => {
  const questions = await getFilteredQuestions(filters);
  if (questions.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};
