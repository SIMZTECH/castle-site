import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';

function OtherScreen(props) {
  return (
    <AdminLayout
    auth={props.auth}
    errors={props.errors}

  >
    <div>All Other Screen</div>
  </AdminLayout>
  )
}

export default OtherScreen;