import Image from 'next/image';
import twitter from "../public/twitter.png";
import github from "../public/github.png";
import email from "../public/email.png";

export const NavBar = () => {
  return (
    <nav className="nav-bar px-8 lg:px-24 py-4">
      <h4 className="flex-1 font-medium sm:text-xl md:text-2xl">Vaibhav Rai</h4>
      <div className="icons flex-1">
        <a
          href="https://twitter.com/raivaibhav08"
          rel="noreferrer"
          className="icon-hover"
          title="twitter"
          target="_blank"
        >
          <Image
            src={twitter}
            height={30}
            width={30}
            alt="twitter"
            className="icon twitter"
          />
        </a>
        <a
          href="https://github.com/RaiVaibhav"
          rel="noreferrer"
          title="github"
          className="icon-hover"
          target="_blank"
        >
          <Image
            src={github}
            height={30}
            width={30}
            alt="twitter"
            className="icon github"
          />
        </a>
        <a href="mailto: raivaibhav08@gmail.com" className="icon-hover" rel="noreferrer" title="email">
          <Image
            src={email}
            height={30}
            width={30}
            alt="twitter"
            className="icon email"
          />
        </a>
      </div>
    </nav>
  );
};
