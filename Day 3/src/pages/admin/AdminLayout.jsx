import React from 'react'
import PropTypes from "prop-types"
import AdminHome from '../admin/AdminHome'

const AdminLayout = ({children}) => {
  return (
    <div>
       <AdminHome/>
        <main>
            {children}
        </main>

    </div>
  )
}
AdminLayout.propTypes = {
    children:PropTypes.node.isRequired
}
export default AdminLayout