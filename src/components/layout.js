import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import '../../layout.css';
import Header from "./header";

config.autoAddCss = false

export default ({children}) => (
    <>
        <Header/>
        <div style={{margin: `0 auto`, padding: `0px 1.0875rem 1.45rem`, paddingTop: 20,}}>
            <main>{children}</main>
            <br/>
        </div>
    </>
);
