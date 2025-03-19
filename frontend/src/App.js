import Footer from './components/Footer';
import Header from './components/header';
import PostDetail from './pages/PostDetail';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PostList from './pages/PostList'; // Fix the casing of the file name
import CategoryPosts from './pages/CategoryPosts';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path='/posts/category/:id' element={<CategoryPosts/>} />
        </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
