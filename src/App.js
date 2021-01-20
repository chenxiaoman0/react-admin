import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from './views/login'
import 'antd/dist/antd.css';
function App() {
  return (
    <div className="App">
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
        </Switch>
    </HashRouter>
    </div>
  );
}

export default App;
