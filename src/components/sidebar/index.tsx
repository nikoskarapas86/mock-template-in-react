import React from "react";
import { Collaborators } from "../collaborators";
import { MainAuthor } from "../main-author";
import "./index.scss";

export const Sidebar = (): JSX.Element => {
  return (
    <aside className="Sidebar">
      <div className="first-tab">
        <div className="author-side">
          <MainAuthor />
        </div>
        <div className="secondary-items">
          <Collaborators />
        </div>
      </div>
      <div className="second-tab">
        <div className="card mock-content "></div>
      </div>
    </aside>
  );
};
