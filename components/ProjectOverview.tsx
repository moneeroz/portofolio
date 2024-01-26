interface Props {
  desc: string | undefined;
  title: string;
}

function ProjectOverview({ desc, title }: Props) {
  return (
    <div className=" my-auto">
      <h3 className="py-4 text-2xl">{title}</h3>
      <p className="py-4 text-2xl">{desc}</p>
      <p className="py-2 text-2xl"></p>
    </div>
  );
}

export default ProjectOverview;
