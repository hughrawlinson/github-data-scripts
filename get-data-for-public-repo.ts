import { graphql } from "@octokit/graphql";
import * as fs from "fs";

(async function () {
  const query = fs.readFileSync("./query.gql").toString();

  const graphQlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  });

  const [owner, name] = process.argv[2].split("/");

  try {
    const result: any = await graphQlWithAuth(query, {
      owner,
      name,
    });
    console.log(JSON.stringify(result.repository, null, 2));
  } catch (caughtError) {
    console.log(
      JSON.stringify(
        {
          name,
          owner: { login: owner },
          nameWithOwner: process.argv[2],
          description: caughtError.message,
        },
        null,
        2
      )
    );
  }
})();
