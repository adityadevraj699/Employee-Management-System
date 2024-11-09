/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask';

const AdminDashboard = (props) => {
  return (
    <div className='h-srcreen w-full  p-7'>
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}
AdminDashboard.propTypes = {
  changeUser: PropTypes.func.isRequired,
}
export default AdminDashboard
