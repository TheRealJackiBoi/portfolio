import Repo from "@/components/Repo";
import { H1, P } from "@/components/Typography";
import { repo } from "@/index";
import { getRepos as getReposFromGithub } from "@/utilities/githubfacade";

const getRepos = async () => {
  "use server";

  return await getReposFromGithub([
    "BlogExamProject",
    "FullStackExam-Frontend",
    "FullStackExam-Backend",
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
      <H1 text="Projects" />
      <P
        className="leading-7 [&:not(:first-child)]:mt-6"
        text="This is some of my projects that I've highlited"
      />
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {repos.map((repo) => (
          <Repo repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
