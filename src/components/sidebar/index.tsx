import React from "react";
import { CollaboratorInterface } from "../../models/collaborator";
import { Collaborators } from "../collaborators";
import { MainAuthor } from "../main-author";
import "./index.scss";

export const MainPage = (): JSX.Element => {
  const collaborators: CollaboratorInterface[] = [
    {
      name: "first person",
      info: "new york institute",
      imgUrl: "././../assets/images/avatar2.jpg",
    },
    {
      name: "second person",
      info: "new york institute",
      imgUrl: "../assets/images/avatar3.jpg",
    },
    {
      name: "digital libraries archievs",
    },
    {
      name: "book selection",
    },
  ];
  return (
    <div className="main">
      <div className="first-tab">
        <div className="author-side">
          <MainAuthor />
        </div>
        <div className="secondary-items">
          <Collaborators collaborators={collaborators} />
        </div>
      </div>
      <div className="second-tab">
        <div className="card mock-content "></div>
      </div>
    </div>
  );
};
