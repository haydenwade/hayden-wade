import React from 'react';
import AppNavBar from '../navbar/navbar';
import AppFooter from '../footer/footer';

export default (Page) => {
    return () => {
        return (
            <React.Fragment>
                <AppNavBar />
                <Page />
                <AppFooter />
            </React.Fragment>
        )
    }
}
