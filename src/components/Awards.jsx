import { Component } from "react";
import pdfUrl from '../assets/combined.pdf'


export class Awards extends Component {
    render() {
        return (
            <div className="App-header">
            <p>Awards</p>
            <p style={{ fontSize: '18px', padding: '20px'}}>During my time at Fleming College, I have achieved recognition for my performance and have received and Academic Excellence Letter each semester.</p>
            <embed src={pdfUrl} type="application/pdf" width="80%" height="80%" />
            </div>
            
        )
    }
}