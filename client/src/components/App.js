import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


const PageOne = () => {
    return (<div>Page One</div>);
}

const PageTwo = () => {
    return (<div><button>Click Me</button></div>);
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Route path="/" exact component={PageOne} />
                <Route path="/pageTwo" component={PageTwo} />
            </div>
            </BrowserRouter>
        </div>
    )
    // BrowserRouter can only have one output (<div></div>)
}

export default App;