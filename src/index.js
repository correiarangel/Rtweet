import React from 'react'
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

YellowBox.ignoreWarnings([
    'Async Storage has been extracted'
])


import Routes from './routes'

const App = () => <Routes />

export default App