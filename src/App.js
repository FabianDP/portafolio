
import { Routes, Route } from 'react-router-dom'
import Principal from './components/principal/Principal';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Principal/>}/>
    </Routes>
  );
}

export default App;
