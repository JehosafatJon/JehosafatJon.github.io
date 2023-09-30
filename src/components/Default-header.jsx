import logo from '../logo.svg';

export function DefaultHeader() {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            JehosafatJon Site Coming Soon!
            </p>
            <p>~~home/index page~~</p>
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