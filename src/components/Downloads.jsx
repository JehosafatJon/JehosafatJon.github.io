import { Component } from "react";


export class Downloads extends Component {
    render() {
        return (
            <div className="App-header">
            <p>This is a downloads page</p>
            <a href="/assets/lab10.exe" download>Internet Investigations Lab 10 "Malware" Link</a>
            </div>
        )
    }
}