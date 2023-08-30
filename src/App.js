import { connect } from 'react-redux';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Header from './component/Header';
import Home from './component/Home';
import { useEffect } from 'react';
import { getUserAuth } from './actions/index';


function App(props) {
  useEffect(()=>{
    props.getUserAuth();
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} ></Route>
          <Route path='/home' element={<div><Header/><Home/></div>}>
            
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps=(dispatch)=>{
  return {
    getUserAuth:()=>dispatch(getUserAuth()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);


