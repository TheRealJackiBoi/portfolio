import { H1, Lead, } from "@/components/Typography";

export default function Home() {
  return (
    <main className="h-full overflow-y-hidden flex flex-col gap-5">
      <div className="top-1/2 left-1/2 absolute -translate-y-3/4 -translate-x-1/2 p-10 text-center flex flex-col gap-4 justify-between bg-slate-800/10 backdrop:blur-md rounded-md ">
        <H1 className="text-center " text="Jack Oulund" />
        <Lead text="I am an applied computer science student with a passion for fullstack development." />
      </div>
    </main>
  );
}
