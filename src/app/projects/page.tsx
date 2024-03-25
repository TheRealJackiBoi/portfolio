import Repo from "@/components/Repo";
import { repo } from "@/index";
import { getRepos as getReposFromGithub } from "@/utilities/githubfacade";

const getRepos = async () => {
  "use server";

  return await getReposFromGithub([
    "BlogExamProject",
    "FullStackExam-Frontend",
    "NotesRestApi",
    "java-deepdive-final",
    "dat2-fog-carport",
    "Fog-Carport-3D",
    "dat1-ice-drinkinggame",
    "dat1-sp3-streaming",
    "fridge-app",
    "musik-festival-frontend",
  ]);
};

const Projects = async () => {
  const repos: any[] | undefined = await getRepos();

  if (!repos) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {repos.map((repo) => (
          <Repo repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
