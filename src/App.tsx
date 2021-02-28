import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.scss';

import { Explorer } from './windows/Explorer';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  hello: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
    fontWeight: 900,
  },
});

const Hello = () => {
  const styles = useStyles();
  return (
    <div>
      <style jsx>{`
        h1:hover {
          font-weight: 100;
        }
        button {
          > span:hover {
            opacity: 0.5;
          }
        }
      `}</style>
      <div className={styles.hello}>
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className={styles.hello}>
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <Link to="/explorer">
          <button type="button">explorer</button>
        </Link>
      </div>
    </div>
  );
};

export default function App() {
  return <Explorer />;
  return (
    <Router>
      <Switch>
        <Route path="/explorer" component={Explorer} />
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
