import React from 'react';
import { MDBFooter /* MDBContainer, MDBRow, MDBCol, MDBIcon */ } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2021 Copyright
    </div>
  </MDBFooter>
  )
}

export default Footer