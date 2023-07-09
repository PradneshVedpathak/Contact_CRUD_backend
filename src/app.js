const express = require("express");
require("./db/connectionToDB ");
const app = express();
const router = require("./routers/contactsRoutes");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Live on ${port}`);
});
