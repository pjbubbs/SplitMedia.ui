import React from "react";
import { DropzoneAreaBase, FileObject } from "material-ui-dropzone";

const MultiFileUploader: React.FC = () => {
  const handleAdd = (fileObjs: FileObject[]) => {
    console.log("Added Files:", fileObjs);
  };

  const handleDelete = (fileObj: FileObject) => {
    console.log("Removed File:", fileObj);
  };

  const handleAlert = (message: string, variant: string) => {
    console.log(`${variant}: ${message}`);
  };

  return (
    <DropzoneAreaBase
      onAdd={handleAdd}
      onDelete={handleDelete}
      onAlert={handleAlert}
      fileObjects={[]}
    />
  );
};

export default MultiFileUploader;
