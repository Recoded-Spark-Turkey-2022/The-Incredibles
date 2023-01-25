import React from "react";
function Container({children}){
    return(
        <div className="container max-w-screen-xl m-auto p-10 max-md:px-5">
            {children}
        </div>
    )
}
export default Container;
