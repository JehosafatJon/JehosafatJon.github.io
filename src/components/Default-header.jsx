import logo from '../logo.svg';

export function DefaultHeader() {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Welcome to Jonathan Hughes' E-Portfolio

            </p>
            <p style={{ fontSize: '18px'}}> This website is a personal project of mine. It is still under active development. I have written every piece of code on this website. I have chosen to build this website completely from scratch to learn the React JavaScript framework for web development.</p>
            <p style={{ fontSize: '18px'}}>As an example of my software development skills, view page source! For easier viewing, the source code for this website can be found<a href="https://github.com/JehosafatJon/JehosafatJon.github.io" className='animated-link'>here</a>.</p>
            
        </div>
    )
}