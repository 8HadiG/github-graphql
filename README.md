# GitHub GraphQL

Search across GitHub via its GraphQL API.

- For now only ISSUE search type works.

## How to setup?

1. Make sure you installed the latest version of `node` and `npm`.
2. Clone the repo:

   ```bash
      git clone https://github.com/8HadiG/github-graphql.git
   ```

3. Change directory to the repo:
   ```bash
      cd github-graphql
   ```
4. Install dependencies:

   ```bash
      npm install
   ```

5. Optional: If you are using `VS Code`, you can install `GraphQL: Language Feature Support` extension.
6. Rename the `.env.example` file to `.env`.
7. Create a github personal access token (see [PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token)).
8. Write your GitHub access token after `GITHUB_TOKEN=` inside the `.env` file.

## How to run?

1. Feel free to change values from `input/var-api.json` and `input/var-filter.json` files.
2. Open the repository in your terminal, then run:

   ```bash
      npm start
   ```

3. See results from output/results.json.
