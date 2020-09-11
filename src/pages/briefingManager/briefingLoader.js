import React from 'react';
import ContentLoader from "react-content-loader"

const BriefingLoader = props => (
        <ContentLoader
            viewBox="0 0 380 70"
            speed={1}
            primarycolor="#6c6c6c"
            secondarycolor="#ecebeb"
            {...props}
        >
            <rect x="30" y="15" rx="3" ry="3" width="30" height="6.4" />
            <rect x="70" y="15" rx="3" ry="3" width="200" height="6.4" />

            <rect x="0" y="30" rx="3" ry="3" width="60" height="6.4" />
            <rect x="70" y="30" rx="3" ry="3" width="200" height="6.4" />

            <rect x="20" y="45" rx="3" ry="3" width="40" height="6.4" />
            <rect x="70" y="45" rx="3" ry="3" width="200" height="16.4" />

            <rect x="10" y="70" rx="3" ry="3" width="50" height="6.4" />
            <rect x="70" y="70" rx="3" ry="3" width="200" height="6.4" />
        </ContentLoader>
)
export default BriefingLoader