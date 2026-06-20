# GitHub GraphQL

Search across GitHub via its GraphQL API for Unix/Linux.

## How to run?

1. If you don't already have `jq`, `curl` install them with:

```bash
sudo apt install jq curl
```

2. Rename the `.env.example` file to `.env`.
3. Write your GitHub access token after `GITHUB_TOKEN=` inside the `.env` file.
4. Make `start.sh` file executable.

```bash
chmod +x start.sh
```

5. Open the repository in your terminal, then run:

```bash
./start.sh
```

6. Check `results.json` for the output.
