import { socialLinks } from "../constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="min-h-screen min-w-screen text-slate-100">
      <div className="absolute bottom-10 left-14">

        <div className="flex flex-col">
          <Link to="/" className="text-4xl font-semibold mb-3 hover:opacity-30">Amko Salihovic</Link>
          <h4 className="text-lg font-thin">Developer / Consultant</h4>
        </div>

        <div className="mt-5 text-base">
          <ul className="flex flex-row font-thin">
            {socialLinks.map((link) => (
            <li key={link.label} className="mr-2 hover:underline">
              <a href={link.href} target="_blank">
                {link.label}
              </a>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
