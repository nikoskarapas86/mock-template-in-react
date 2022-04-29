import React, { useEffect, useState } from "react";
import { CollaboratorInterface } from "../models/collaborator";

export const CollaboratorItem = ({ ...props }): JSX.Element => {
  const [collaborator, setCollaborator] = useState<CollaboratorInterface>();
  useEffect(() => {
    setCollaborator(props.collaborator);
    console.log(props.collaborator);
  });
  return (
    <>
      <div className="card item">
        <div className="main">
          {collaborator?.imgUrl && (
            <div className="img">
              <img src={collaborator?.imgUrl} alt="avatar" />
            </div>
          )}
          <div className="header">
            <h3>{collaborator?.name}</h3>
            <div className="info">{collaborator?.info}</div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
