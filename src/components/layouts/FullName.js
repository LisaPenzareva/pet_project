import React from "react";

const FullName = ({user}) => {
    console.log(user)
    return(
        <div>
            <p>{user.fullName}</p>
        </div>
    )
}

export default FullName