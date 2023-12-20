import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import Logo from './Logo'
import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../features/user/userSlice'

const Navbar = ()=>{
    const {user} = useSelector((store)=>store.user)
    const dispatch = useDispatch()

    const toggle = ()=>{
        dispatch(toggleSidebar())
    }
    
    const [ShowLogout, setShowLogout] = useState(false)

    return <Wrapper>
        <div className="nav-center">
            <button 
                className='toggle-btn'
                onClick={toggle}
            >
                <FaAlignLeft />
            </button>
            <div>
                <Logo />
                <h3 className="logo-text">Dashboard</h3>
            </div>
            <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!ShowLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={`dropdown ${ShowLogout && 'show-dropdown'}`}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => {
                console.log('logout user');
              }}
            >
              logout
            </button>
          </div>
        </div>
        </div>
    </Wrapper>
}

export default Navbar