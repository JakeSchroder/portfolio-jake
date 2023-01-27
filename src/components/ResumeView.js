import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
//import 'react-pdf/dist/esm/Page/TextLayer.css';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { ResumePDF } from "../assets/global/FileVariables";

export default function ResumeView({ isMobile }) {
  const resumeHeight = isMobile ? 420 : 700;
  return (
    <Document file={ResumePDF}>
      <Page pageNumber={1} height={resumeHeight} />
    </Document>
  );
}
