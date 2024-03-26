import { repo } from "..";
import { FaRegStar } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

// link
// tags

const Repo = ({ repo }: { repo: repo }) => {
  return (
    <Card className="flex flex-1 flex-col justify-between isolate bg-white/50 shadow-lg ring-1 ring-black/5">
      <CardHeader>
        <CardTitle className="text-xl font-bold mb-2">{repo.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-col w-full h-full mb-2 justify-between text-balance">
        <CardDescription className="text-gray-700 mb-2 w-full h-full text-pretty break-words">
          {repo.description || "No description"}
        </CardDescription>
        {repo.homepage && (
          <a className="font-light text-primary" href={repo.homepage} target="_blank">
            Website
          </a>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline block mb-2"
        >
          View Repo
        </a>
        <div className="flex items-right gap-2">
          <FaRegStar className="h-5 w-5 text-gray-500" />
          <span className="text-gray-500">{repo.stargazers_count}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Repo;
