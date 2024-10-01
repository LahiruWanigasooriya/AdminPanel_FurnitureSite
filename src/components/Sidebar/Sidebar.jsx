import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
      <div className='sidebar'>
          <div className='sidebar-options'>
              <NavLink to={'/add'} className='sidebar-option'>
                  <img className='sidebar-icon' src={assets.add} alt='add' />
                  <p>Add Items</p>
              </NavLink>
              <NavLink to={'/list'} className='sidebar-option'>
                  <img className='sidebar-icon' src={assets.task} alt='task' />
                  <p>List Items</p>
              </NavLink>
              <NavLink to={'/orders'} className='sidebar-option'>
                  <img className='sidebar-icon' src={assets.package1} alt='package' />
                  <p>Orders</p>
              </NavLink>
          </div>
      </div>
    );
  }
  
export default Sidebar