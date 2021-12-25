import dotenv from "dotenv";

const path = process.env.NODE_ENV === "development" ? ".env.dev" : ".env";

dotenv.config({ path });
