import express from "express"; // ESModules
// const express = require("express") commonjs
// Compiler will tranpiler ESModules to commonjs, see import in index.js
import diaryRoute from "./routes/diary";

const app = express();

app.use(express.json());

const PORT = 3002;

// req is declared but never read, you can ignore this error by typing an underscore before the parameter: _req
app.get("/", (_req, res) => {
  res.send("main route");
});

app.use("/api/diary", diaryRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

/* 
Scripts how to use:
To start the typescript compiler (create the file tsconfig.json): npm run tsc -- --init
To transpile .ts to .js (alwais next to start the compiler/transpiler): npm run tsc 
To start the proyect from javascript: npm start
The ts-node-dev package works like Nodemon, it'll listen for changes and will run the compiler to tranpile this change: npm run dev
*/
