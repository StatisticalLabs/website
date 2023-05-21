import Image from "next/image";
import Link from "next/link";

type Project = {
  name: string;
  description: string;
  image: `/${string}`;
  url: `https://${string}`;
};

const ProjectCard: React.FC<Project> = (props) => {
  return (
    <Link
      href={props.url}
      className="flex items-start gap-2 rounded-lg border border-neutral-600 p-3 transition-colors hover:bg-black/10 dark:hover:bg-white/10"
    >
      <Image
        src={props.image}
        alt={`${props.name} Logo`}
        width={60}
        height={60}
        className="rounded-full"
      />
      <div>
        <p className="text-4xl font-bold">{props.name}</p>
        <div className="text-sm text-black/40 dark:text-white/40">
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  );
};

const projects: Project[] = [
  {
    name: "Nickify",
    description: "Add your YouTube subscriber count to your Discord nickname.",
    image: "/nickify.png",
    url: "https://nickify.vercel.app",
  },
];

export default function OtherProjects() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-center text-4xl font-bold">Other projects</h1>
      {projects.map((project) => (
        <ProjectCard {...project} key={project.name} />
      ))}
    </div>
  );
}
