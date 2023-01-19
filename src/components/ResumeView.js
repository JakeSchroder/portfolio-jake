import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
//import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import {Grid} from '@mui/material';

export default function ResumeView(){
    return (
        <Document file="/resume-jake-schroder-2023.pdf">
            <Page pageNumber={1} height={700}/>
        </Document>
    );
}
