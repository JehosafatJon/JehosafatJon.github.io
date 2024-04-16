import { Component } from "react";


export class Downloads extends Component {
    render() {
        return (
            <div className="App-header">
            <h3>Downloads</h3>
            <p style={{ fontSize: '18px'}}>
                During my time studying for a career in Cybersecurity, one of my assignments was to make a 'malicious download link'. This was to demonstrate my knowledge and understanding of how hackers attack computer systems.
            </p>
            <p style={{ fontSize: '18px'}}>
                This file is compeltely harmless. If downloaded and executed, the file will simply ping flemingcollege.ca from your command line! This example of a malicious file briefly showcases a small part of my experience in Cybersecurity.
            </p>
            <a href="/lab10.exe" className="animated-link" download>!!! Internet Investigations Lab 10 "Malware" Link !!!</a>
            </div>
        )
    }
}