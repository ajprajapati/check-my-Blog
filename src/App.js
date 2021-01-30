import React from 'react'
import './styles.css';
import CoverImage  from './Cover';
import BlogPage from './Blogpage';


class App extends React.Component{
  render() {
      return (
        <>
          <CoverImage />
          <BlogPage />
      </>
    );
  }
}

export default App;
