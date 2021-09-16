
import './App.css';
import Admin from './Component/Admin';
import Contacts from './Component/Contacts';
import Developer from './Component/Developer';
import Login from './Component/Login';
import Manager from './Component/Manager';
import Temp from './Component/Temp';
// import Testing from './Component/Testing';

function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        {/* <Contacts ></Contacts> */}
        {/* <Admin></Admin> */}
        {/* <Manager/> */}
        {/* <Developer/> */}
        <Login/>
        {/* <Temp/> */}
      </div>
    </div>
  );
}


export default App;
