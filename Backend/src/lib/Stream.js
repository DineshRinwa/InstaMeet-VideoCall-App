// import { StreamChat } from "stream-chat";
// import "dotenv/config";

// const apiKey = process.env.STREAM_API_KEY;
// const apiSecret = process.env.STREAM_API_SECRET;

// if (!apiKey || !apiSecret) {
//   console.error("Stream Api key or Secret are missing");
// }

// const streamClient = StreamChat.getInstance(apiKey, apiSecret);


// export const upsertStreamUser = async (userData) => {
//   try {
//     await streamClient.upsertUsers([userData]);
//     return userData;
//   } catch (error) {
//     console.error("Error Upserting Stream User :", error);
//   }
// };


// export const genrateStreamToken = (userId) => {
//   try {
//     const userIdStr = userId.toString();
//     return streamClient.createToken(userIdStr);
//   } catch (error) {
//     console.error("Error generating Stream token :", error);
//   }
// };


import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  throw new Error("Stream API key or secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    if (!userData?.id) {
      throw new Error("User data must include an 'id' field");
    }
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("Error upserting Stream user:", error);
    throw error;
  }
};

export const generateStreamToken = (userId) => {
  try {
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
    throw error;
  }
};
