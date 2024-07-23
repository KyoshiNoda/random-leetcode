import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export const getToken = async () => {
  const authData = await pb.admins.authWithPassword(
    `${process.env.POCKETBASE_USER}`,
    `${process.env.POCKETBASE_PASSWORD}`
  );
  return authData.token;
};
