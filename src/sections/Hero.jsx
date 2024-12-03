import { pageLinks } from "../constants";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Hero = () => {
  return (
    <main>
    <Header />
    <div className="text-slate-100 font-semibold text-6xl">
      <div className="absolute right-10 top-10 flex flex-col justify-center h-screen">
        <nav>
          <ul className="text-right uppercase hover:cursor-pointer">
            {pageLinks.map((link) => (
              <li key={link.label} className="mb-10">
                <Link to={link.href} className="hover:opacity-30 hover:text-8xl" target={link.target}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
    </main>
  );
};

export default Hero;
