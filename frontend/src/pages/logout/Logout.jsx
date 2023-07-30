import React from 'react'

import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { logout } from '../../redux/authSlice'
import { useSelector } from 'react-redux';

const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.auth)



    console.log(user)
    console.log("hELLO")
    dispatch(logout(user))
    const temp = useSelector((state) => state.auth)
    console.log(temp)
    navigate('/login')

    return (
        <div >
            <h1>Logout</h1>
        </div>
    )
}

export default Logout