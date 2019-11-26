import React from 'react';
import {useSelector} from 'react-redux';
import createRouter from './routes/index';

export default function App() {
  const logged = useSelector(state => (state.user ? true : false));
  const Routes = createRouter(logged);
  return <Routes />;
}
