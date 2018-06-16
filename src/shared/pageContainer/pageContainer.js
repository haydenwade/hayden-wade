import React from 'react';
import AppNavBar from '../navbar/navbar';

class PageContainer extends React.Component{
    render(){
        return(
            <div>
            <AppNavBar/>
            {this.props.children}
            </div>
        );
    }
}
export default PageContainer;