import { technologies } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";

const Tech = () => {
  return (
    <>
      <Header
        useMotion={false}
        p="What I have learned so far"
        h2="Technology Stack."
      />

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex h-32 w-32 flex-col items-center justify-center rounded-2xl bg-tertiary p-4"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-16 w-16 object-contain"
            />

            <p className="mt-3 text-center text-sm text-white">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");