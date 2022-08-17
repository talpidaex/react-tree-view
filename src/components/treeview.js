import React from "react";
import Tree from "./tree";

const treeData = [
  {
    key: "0",
    label: "FKM",
    icon: "fa fa-folder",
    title: "Documents Folder",
    isRoot : true,
    children: [
      {
        key: "0-0",
        label: "AKM-1",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [],
      },
      {
        key: "0-0",
        label: "AKM-2",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [],
      },
      {
        key: "0-0",
        label: "AKM-3",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [
          {
            key: "0-1-1",
            label: "FFS-1",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-2",
            label: "FFS-2",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-3",
            label: "FFS-3",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-4",
            label: "FFS-4",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-4",
            label: "FFS-5",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-4",
            label: "FFS-6",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-4",
            label: "FFS-7",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-4",
            label: "FFS-8",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
        ],
      },
      {
        key: "0-0",
        label: "AKM-4",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [],
      },
      {
        key: "0-0",
        label: "AKM-5",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [],
      },
      {
        key: "0-0",
        label: "AKM-6",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [],
      },
      {
        key: "0-0",
        label: "AKM-7",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [],
      },
      {
        key: "0-0",
        label: "AKM-8",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [],
      },
    ],
  },

];

const TreeList = () => {
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <p className="mt-3">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-8 text-left text-dark">
                <Tree data={treeData} />
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default TreeList;
