
import './App.css';
import Home from './Pages/Home/Home';
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCrators} from './state/actionCreators'

function App() {
  const state = useSelector((state)=>state)
  const dispatch = useDispatch();

  const ac = bindActionCreators(actionCrators, dispatch)
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
