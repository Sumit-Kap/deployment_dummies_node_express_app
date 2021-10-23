const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type TestData {
  test: String
  views: Int
}
  type RootQuery {
    hello: String
  }
  schema{
    query: TestData
  }
`);
