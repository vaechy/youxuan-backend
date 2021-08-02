import { HttpClient } from 'tsrpc-browser';
import { ResGetData } from './shared/protocols/PtlGetData';
import React from "react";
import ReactDOM from "react-dom";
import App from './app';

import './stylus'; //全局样式
import { serviceProto } from './shared/protocols/serviceProto';
ReactDOM.render(<App/>, document.getElementById('app') )
