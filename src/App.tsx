import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './page/home';
import { About } from './page/about';
import { Solution } from './page/solution';
import { Project } from './page/project';
import { Team } from './page/team';
import { Blog } from './page/blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/solution' element={<Solution />} />
        <Route path='/project' element={<Project />} />
        <Route path='/team' element={<Team />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
