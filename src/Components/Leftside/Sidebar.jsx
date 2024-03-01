import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../imeges/logo (1).png'
import { Link } from 'react-router-dom'
import{ UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilSignOutAlt,} from '@iconscout/react-unicons'
// import { SidebarData } from '../../Data/Data'

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState('dashboard');
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className='sidebar'>
          {/* Logo */}
      <div className='logo'>
         <img src={Logo} alt="" />
          <span>Sh<span>o</span>ps </span>
      </div>
      {/* Menu  */}
      <div className='menue'>
       <div className='menuitems' >
           <ul>
              <li className={selectedItem === 'dashboard' ? 'selected' : ''} onClick={() => handleItemClick('dashboard')}>
              <Link to="/">
        <UilEstate />
        <span>Dashboard</span>
      </Link></li>

            <li className={selectedItem === 'orders' ? 'selected' : ''} onClick={() => handleItemClick('orders')}>
            <Link to="order">
        <UilClipboardAlt />
        <span>Orders</span>
      </Link>
            </li>
             <li className={selectedItem === 'customers' ? 'selected' : ''} onClick={() => handleItemClick('customers')}>
             <Link to="/customer">
        <UilUsersAlt />
        <span>Customers</span>
      </Link>
        </li>
            <li className={selectedItem === 'products' ? 'selected' : ''} onClick={() => handleItemClick('products')}>
                
            <Link to="/products">
        <UilPackage />
        <span>Products</span>
      </Link> 
            </li>
            <li className={selectedItem === 'signout' ? 'selected' : ''} onClick={() => handleItemClick('signout')}>
              < UilSignOutAlt />
              <span></span>
            </li>
            </ul>
       </div>
        
      </div>
    </div>
  )
}

export default Sidebar
