import React from "react";

import Preloader from "../components/commons/preloader/Preloader";


export const withSuspense = (Component) => {
    return (props) => ( 
    <React.Suspense fallback={<Preloader/>}>
        <Component {...props}/>
    </React.Suspense>
    )
} 

export default withSuspense