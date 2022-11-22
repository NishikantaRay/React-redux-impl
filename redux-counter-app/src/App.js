import React from 'react'
import "./index.css";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/index';
function App() {
  const counter = useSelector(state => state.upDown.count);
  const dispatch = useDispatch();
  return (
    <>
    <div className="container">
      <h1>Redux App</h1>
      <h1>Increment/Decrement Counter</h1>
      <h4>Uisng React and Redux</h4>

      <div className="quantity">
        <a className="quantity__minus" title="Decrement" onClick={()=>dispatch(decrement())}><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value={counter} />
        <a className="quantity__plus" title="Increment" onClick={()=>dispatch(increment(5))}><span>+</span></a>
      </div>
    </div>
    </>
  )
}

export default App