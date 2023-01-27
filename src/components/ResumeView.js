import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
//import 'react-pdf/dist/esm/Page/TextLayer.css';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { ResumePDF } from "../assets/global/FileVariables";

export default function ResumeView() {
  return (
    <Document file={ResumePDF}>
      <Page pageNumber={1} height={700} />
    </Document>
  );
}
