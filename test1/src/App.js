import FullName from './Profile/FullName';
import  Bio  from './Profile/Bio';
import  Profession from './Profile/Profession';
import Papillon from './Profile/papillon.jpg'
import './App.css';

function App() {
    return (
      <div className='App'>
<FullName name='walid'/>
   <Bio Papillon = {Papillon}/>
  <Profession/>
      </div>
    );   
}


export default App;
