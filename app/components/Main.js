import React from 'react';
import SideBar from './SideBar'

const Main = ({children, history}) => {
  return (
    <div className="main-container">
      <header className="page-header col-md-12">
        <h4 className='col-md-3 text-left'>SIDEBAR</h4>
        <h4 className='col-md-9 text-left'>CONTENT</h4>
      </header>
      <nav className="navbar navbar-default col-md-3" style={{paddingTop: 20}} role="navigation">
        <SideBar history={history}/>
      </nav>
      <div className="container col-md-9">
        {children}
      </div>
    </div>
  )
}

export default Main