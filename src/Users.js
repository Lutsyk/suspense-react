import React from "react";

export const Users = ({resourse}) => {

    const users = resourse.users.read()

    return (
        <>
            <h3>Users</h3>
            
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}