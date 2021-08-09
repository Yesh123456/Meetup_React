import './index.css';
import { Route, Switch } from 'react-router-dom';

import Newmeetup from './pages/Newmeetup';
import Favorites from './pages/Favorites';
import Allmeetup from './pages/Allmeetup';
import Layout from './components/layout/Layout';

// import MainNavigation from './components/layout/MainNavigation';

function App() {
  return(
  <Layout>  
    {/* <MainNavigation /> */}
    <Switch>
      <Route path='/' exact>
        <Allmeetup />
      </Route>
      <Route path='/newmeet'>
        <Newmeetup />
      </Route>
      <Route path='/favorites'>
        <Favorites />
      </Route>
    </Switch>
  </Layout>
  );
}

export default App;
