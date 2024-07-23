import { getToken } from "./auth";

export const getQuestions = async () => {
  const token = await getToken();
  const response = await fetch(
    "http://127.0.0.1:8090/api/collections/questions/records",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    console.log("error");
  }

  const data = await response.json();
  return data;
};
