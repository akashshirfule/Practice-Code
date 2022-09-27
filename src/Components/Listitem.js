import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Listitem.css";
const Listitem = (props) => {
  const [line, setLine] = useState(false);
  const Tline = () => {
    setLine(true);
  };

  return (
    <>
      <div className="list-style">
        <li style={{ textDecoration: line ? "line-through" : "none" }} >
          {props.text} &nbsp;
          <span className="mt-5 delete-icon pl-5 " onClick={Tline}>
            <DeleteIcon className="m-10 dicon"></DeleteIcon>
          </span>
        </li>
        
      </div>
    </>
  );
};
export default Listitem;
