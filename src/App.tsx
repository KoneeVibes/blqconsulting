import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './page/home';
import { About } from './page/about';
import { Solution } from './page/solution';
import { Project } from './page/project';
import { Team } from './page/team';
import { Blog } from './page/blog';
import { ProjectDetailPage } from './page/projectdetail';
import { BlogDetailPage } from './page/blogdetail';
import { RealEstate } from './page/realestate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/solution' element={<Solution />} />
        <Route path='/project' element={<Project />} />
        <Route path='/project/:id' element={<ProjectDetailPage />} />
        <Route path='/blog/:id' element={<BlogDetailPage />} />
        <Route path='/team' element={<Team />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/real-estate' element={<RealEstate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
