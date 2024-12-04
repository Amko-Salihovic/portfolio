import Header from "../components/Header";
import { experience } from "../constants";

const Experience = () => {
  return (
    <main>
      <Header />
      <div className="text-slate-100">
        <div className="absolute right-14 top-5 flex flex-col justify-center h-screen w-1/3">
          <ul className="text-left">
            {experience.map((job) => (
              <li key={job.id} className="mb-8 p-4 hover:opacity-65 ">
                <a href={job.link} target="__blank">
                  <h1 className="mb-2">
                    <span className="text-2xl font-semibold">
                      {job.title},{" "}
                    </span>
                    <span className="text-xl font-thin">{job.company}</span>
                  </h1>
                  <div className="opacity-80">
                  <p className="mb-2">{job.summary}</p>
                  <ol className="flex flex-row">
                    {job.tools.map((tool) => (
                      <li className="mr-2 mt-2 items-center px-4 border rounded-lg text-sm">
                        {tool}
                      </li>                      
                    ))}
                  </ol>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Experience;
