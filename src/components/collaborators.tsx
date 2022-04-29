import React from "react";
import { CollaboratorInterface } from "../models/collaborator";
import { CollaboratorItem } from "./collaborator";

export const Collaborators = ({ ...props }): JSX.Element => {
  return (
    <>
      {props.collaborators.map((colaborator: CollaboratorInterface) => (
        <>
          <CollaboratorItem collaborator={colaborator} />
        </>
      ))}
    </>
  );
};
