import logo from '../logo.svg';

export function Home() {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>
            Jonathan Hughes

            </h3>
            <p style={{ fontSize: '18px'}}>This website is a personal project of mine. It is still under active development. I have written every piece of code on this website. I have chosen to build this website completely from scratch to learn the React JavaScript framework for web development.</p>
            <p style={{ fontSize: '18px'}}>Source<a href="https://github.com/JehosafatJon/JehosafatJon.github.io" className='animated-link'>here</a></p>
            
        </div>
    )
}