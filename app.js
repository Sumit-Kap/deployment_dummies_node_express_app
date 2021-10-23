const express = require("express");
const app = express();
const routes = require("./routes/routes");
const dbConfig = require("./dbConfig/dbConnect");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { graphqlHTTP } = require("express-graphql");
const fs = require("fs");
const path = require("path");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
// const schema = require("./graphql/schema");
dbConfig.connect();
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

// app.use("/graphql", graphqlHTTP({ graphiql: true, schema: schema }));
app.use(helmet());
app.use(morgan("combined", { stream: accessLogStream }));
routes(app);

app.use(function (error, req, res, next) {
  console.log("printing", error);
  res.status(500).json({ message: "something went wrong" });
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
