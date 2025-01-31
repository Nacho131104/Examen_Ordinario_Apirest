
import { MongoClient } from "mongodb";

const MONGO_URL = Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  throw new Error("Please provide a MONGO_URL");
}

const mongoClient = new MongoClient(MONGO_URL);
await mongoClient.connect();

console.info("Connected to MongoDB");


const mongoDB = mongoClient.db("");
//const colleccion = mongoDB.collection("");


const handler = async (req: Request): Promise<Response> => {
  const method = req.method;
  const url = new URL(req.url);
  const path = url.pathname;

  if (method === "GET") {
    
  } 
  else if (method === "POST") {
    
  } 
  else if (method === "PUT") {
    
  } 
  else if (method === "DELETE") {
    
  }

  return new Response("Endpoint not found", { status: 404 });
};

Deno.serve({ port: 3000 }, handler);
