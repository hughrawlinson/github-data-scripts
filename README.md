# github-data-scripts

Scripts to grab data about repos of interest to compare. Compatible with [github-repo-organizer].

[github-repo-organizer]: https://github-repo-organizer.vercel.app/

## How To

Get a GitHub personal access token and save it to the `GITHUB_PERSONAL_ACCESS_TOKEN` environmental variable.

Pipe a CSV whose third field contains the quote-wrapped string of the format `{owner}/{repo}` to `batch.sh`. It will start pulling data into the `data` directory.

Use `jq` to prepare a single file with all that data in it for use in `github-repo-organizer`.
