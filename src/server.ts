import express from "express";
import env from "./config/env";
import fileUpload from "./routers/fileUpload";
import errorHandler from "./middleware/errorHandler";

const app = express();

// Routers
app.use("/upload", fileUpload);

app.use(errorHandler);

app.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`);
});
