import { Octokit } from "octokit";
import { repo as repoType } from "..";

const octokit = new Octokit({
  auth: process.env.GIT_TOKEN,
});

export const getRepos = async (repos: string[]) => {
  const promises = repos.map(async (repo) => {
    const { data } = await octokit.request("GET /repos/{owner}/{repo}", {
      repo: repo,
      owner: process.env.GIT_USER!,
    });
    return data;
  });

  return Promise.all(promises);
};
