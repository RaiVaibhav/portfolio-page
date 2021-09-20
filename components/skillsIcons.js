import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faJs, faCss3, faReact, faPython, faNode, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faHtml5, faJs, faCss3, faReact, faPython, faNode, faGithub);

export const ProjectSkills = ({ skills }) => {
  return (
    <div className="flex text-gray-500 pb-3 gap-3">
      { skills.map(i => <FontAwesomeIcon key={i} icon={["fab", i]} size="2x" />)}
    </div>
  );
};
