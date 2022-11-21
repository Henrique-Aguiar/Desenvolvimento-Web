import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './components/About'
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { Post } from './components/Post'
import { Redirect } from './components/Redirect'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/posts/:id' element={<Post />}/>
        <Route path='/posts' element={<Post />}/>
        <Route path='/redirect' element={<Redirect />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
