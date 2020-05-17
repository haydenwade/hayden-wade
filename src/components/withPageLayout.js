import React from 'react';
import AppNavBar from '../shared/navbar/navbar';
import AppFooter from '../shared/footer/footer';

export default (Page) => {
    return () => {
        return (
            <div>
                <AppNavBar />
                <Page />
                <AppFooter />
            </div>
        )
    }
}
