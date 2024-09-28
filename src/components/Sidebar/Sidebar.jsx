import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
    return (
      <div className='sidebar'>
          <div className='sidebar-options'>
              <div className='sidebar-option'>
                  <img className='sidebar-icon' src={assets.add} alt='add' />
                  <p>Add Items</p>
              </div>
              <div className='sidebar-option'>
                  <img className='sidebar-icon' src={assets.task} alt='task' />
                  <p>List Items</p>
              </div>
              <div className='sidebar-option'>
                  <img className='sidebar-icon' src={assets.package1} alt='package' />
                  <p>Orders</p>
              </div>
          </div>
      </div>
    );
  }
  
export default Sidebar