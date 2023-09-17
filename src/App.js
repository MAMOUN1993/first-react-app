import Side from './pages/side';
import Reminder from './pages/reminder';
import Line from './pages/line';
import { BrowserRouter , Routes ,Route} from 'react-router-dom'
import SignIn from './pages/login';
import Calc from './pages/clac';
import Posts from './pages/posts';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Side/>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='sign' element={<SignIn/>}/>
        <Route path='calc' element={<Calc/>}/>
        <Route path='reminder' element={<Reminder/>}/>
        <Route path='Line' element={<Line/>}/>
        <Route path='posts' element={<Posts/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
