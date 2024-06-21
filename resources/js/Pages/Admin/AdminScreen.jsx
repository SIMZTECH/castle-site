import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';


function AdminScreen(props) {
  return (
    <AdminLayout
     auth={props.auth}
     errors={props.errors}
    
    >
      <div>AdminScreen</div>
    </AdminLayout>
  )
}

export default AdminScreen;