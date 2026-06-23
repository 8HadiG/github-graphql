# GitHub GraphQL

Search across GitHub via its GraphQL API for Unix/Linux.

## How to run?

1. If you don't already have `jq`, `curl` install them with:

```bash
sudo apt install jq curl
```

2. Optional: If you are using `VS Code`, you can install `GraphQL: Language Feature Support` extension.
3. Rename the `.env.example` file to `.env`.
4. Write your GitHub access token after `GITHUB_TOKEN=` inside the `.env` file.
5. Make `start.sh` file executable.

```bash
chmod +x start.sh
```

6. Feel free to change values from `variables.json` file.
7. Open the repository in your terminal, then run:

```bash
./start.sh
```

8. Check `results.json` for the output.
