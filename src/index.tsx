import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Hello from './containers/Hello'
import RunningTime from './containers/RunningTime'
import { init } from './store'

init({title: 'Loading...', name: ''})

const About = () => <div>Build By: <a href="https://github.com/shy2850/f2e-server" target="_blank">f2e-server</a></div>

ReactDOM.render(<Router>
    <div className="container">
        <div className="navbar-menu">
            <ul className="navbar-start">
                <li><Link className="navbar-item" to="/">Index</Link></li>
                <li><Link className="navbar-item" to="/About">About</Link></li>
                <li><Link className="navbar-item" to="/404">Not Found</Link></li>
            </ul>
            <div className="navbar-end">
                <RunningTime className="navbar-item"/>
            </div>
        </div>
        <div className="message is-success">
            <div className="message-body">
                <Switch>
                    <Route path="/" exact component={Hello} />
                    <Route path="/about" exact component={About} />
                    <Route component={() => <h3>404 Not Found</h3>}/>
                </Switch>
            </div>
        </div>
    </div>
</Router>, document.getElementById('app'))