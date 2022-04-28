import more from "../assets/icons/more.svg";
import twitter from "../assets/icons/twitter.svg";
import web from "../assets/icons/web.svg";
import avatar from "../assets/images/avatar1.jpg";
export const MainAuthor = (): JSX.Element => {
  const svgs = [twitter, web, more];
  const educationList = [
    "University of Athens",
    "University of Melbourn",
    "University of Technology",
    "School of Computing and Information Systems",
  ];
  return (
    <div className="card">
      <div className="main">
        <div className="img">
          <img src={avatar} alt="avatar1" />
        </div>
        <div className="header">
          <h3>iou coucoupiou</h3>
        </div>
      </div>
      <hr />
      <div className="email">lelos.coucounelos@gmail.com</div>
      <div className="info">
        <div className="info__images">
          {svgs.map((svg, index) => (
            <div className="info__images__container">
              <img src={svg} alt={svg} />
            </div>
          ))}
        </div>
        <div className="info__education">
          <ul>
            {educationList.map((school) => (
              <li>
                <a href="#">{school}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
