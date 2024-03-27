import { H1, Lead } from "@/components/Typography";
import { GithubIcon, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <div className="top-1/2 left-1/2 absolute -translate-y-3/4 -translate-x-1/2 p-10  flex flex-col gap-4 justify-between bg-slate-800/10 backdrop:blur-md rounded-md w-10/12 sm:w-10/12 md:w-8/12 lg:1/3 xl:w-1/3">
        <H1 text="Contact" />
        <Link
          href={"https://github.com/TheRealJackiBoi"}
          target="_blank"
          className="flex gap-2"
        >
          <GithubIcon />
          <Lead text="TheRealJackiBoi" />
        </Link>
        <Link
          href={"mailto:jack@oulund.dk"}
          target="_blank"
          className="flex gap-2"
        >
          <Mail />
          <Lead text="jack@oulund.dk" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/jack-oulund"}
          target="_blank"
          className="flex gap-2"
        >
          <Linkedin />
          <Lead text="Jack Oulund" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
