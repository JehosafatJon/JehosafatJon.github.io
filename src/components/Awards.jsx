import { Component } from "react";
import pdfUrl from '../assets/combined.pdf'


export class Awards extends Component {
    render() {
        return (
            <div className="App-header">
            <h3>Awards</h3>
            <p style={{ fontSize: '18px'}}>During my time at Fleming College, I've achieved recognition for my academic performance. I have received an Academic Excellence Letter for reaching a 4.0 GPA each semester.</p>
            <embed src={pdfUrl} type="application/pdf" width="80%" height="80%" />
            </div>
            
        )
    }
}