// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import Heart from '../assets/img/svg/heart.svg';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      <NxWelcome title="client-react" />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li className='bg-red-500 text-white'>
            <Link to="/">Home react</Link>
            <br />
            <Link to="/dist/client-ng/browser">Click here to go back to root page.{' '} <img src={Heart} alt="heart" width={32} /></Link>             
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
        <Route
          path="/dist/client-react/browser/login-react"
          element={
            <div>        
              <hr />
              There's nothing here!{' Go to Angular App. '}
              <Link to="/login">Click here to go back to root page.</Link>
            </div>
          }
        />

      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
