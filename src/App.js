import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
 
import {CreateAccount} from './Login/CreateAccount';
import { Close } from './Login/Close';
 import Login from './Login/Login';
import { Singin } from './Login/Signin';
 import {Home} from "./Home/Home";
 import { Protected } from './Login/Protected';
import { Homes } from './Pages/Homes';
import { Explore } from './Pages/Explore';
import { Notifications } from './Pages/Notifications';
import { Messages } from './Pages/Messages';
import { Lists } from './Pages/Lists';
import { Profile } from './Pages/Profile';
import { More } from './Pages/More';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/createaccount' element={<CreateAccount />}/>
          <Route path='/' element={ <Login /> }/>
          <Route path='/singin' element={<Singin />}/>
          <Route path='/home' element={<Home/>}>
             <Route path='homes' element={<Homes/>}></Route>
             <Route path='explore' element={<Explore/>}></Route>
             <Route path='notification' element={<Notifications/>}></Route>
             <Route path='messages' element={<Messages/>}></Route>
             <Route path='list' element={<Lists/>}></Route>
             <Route path='profile' element={<Profile/>}></Route>
             <Route path='more' element={<More/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
