import { socialLinks } from "../constants";

const Header = () => {
  return (
    <div className="min-h-screen min-w-screen text-slate-100">
      <div className="absolute bottom-10 left-10">

        <div className="flex flex-col font-thin">
          
          <h1 className="text-4xl mb-3">Amko Salihovic</h1>
          <h4 className="text-lg">Developer / Consultant</h4>
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

            {/* <li className="mr-2">linkedin</li>
            <li className="mr-2">github</li>
            <li className="mr-2">email</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
