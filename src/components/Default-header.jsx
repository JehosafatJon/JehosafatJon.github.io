import logo from '../logo.svg';

export function DefaultHeader() {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Welcome to Jonathan Hughes' E-Portfolio

            </p>
            <p style={{ fontSize: '14px', wordWrap: 'break-word'}}>  This website is a personal project of mine. I have written every piece of code on this website! If you'd like to see an example of my work, view page source!</p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    )
}