import React, { useState } from "react";
import "./tree.css";

const Tree = ({ data = [] }) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.children ? true : false;
  console.log(hasChild);
  return (
    <li className="d-tree-node border-0">
      {!node.isRoot && <span className="vertical-line"></span>}
      <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          ></div>
        )}

        <div className="col d-tree-head">
          {!node.isRoot && <span className="horizontal-line"></span>}
          
          <span className="ml-3x"> {node.label}</span> 
        </div>
      </div>

      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;
