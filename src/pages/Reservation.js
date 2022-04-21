import React from 'react';

import Navbar from'../components/UI/Navbar.js';
import BookTable from '../components/BookTable.js';
import Footer from '../components/UI/Footer';

const Reservation = () => {
    return (
        <React.Fragment>
            <Navbar />
            <BookTable />
            <Footer />
        </React.Fragment>
    )
}

export default Reservation;