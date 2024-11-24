import express from "express";
import env from "./config/env";
import fileUpload from "./routers/fileUpload";

const app = express();

app.use("/", fileUpload);

app.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`);
});
