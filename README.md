# GitHub GraphQL

Search across GitHub via its GraphQL API for Unix/Linux

## How to run?

1. If already you dont have "jq", "curl" then install by:

```bash
sudo apt install jq curl
```

2. Rename ".env.example" file to ".env"
3. Write your GitHub access token in front of GITHUB_TOKEN inside ".env"
4. Make "fetch_data.sh" file executable

```bash
chmod +x fetch_data.sh
```

5. Open the repo in terminal then:

```bash
./fetch_data.sh
```

6. Check "results.json" for results
