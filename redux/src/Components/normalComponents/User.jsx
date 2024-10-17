import React, {useEffect, useState} from 'react'

function User() {

    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(function () {
        (async function () {
            try {
                setLoading(true);
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
                const user = await response.json()
                setLoading(false);
                setUser(user);
            }catch (error) {
                setError(true)
                setLoading(false)
            }
        })()
    }, [])

    const heading = <h1>User Examples</h1>

    if (loading) {
        return <>
            {heading}
            <h3>Loading...</h3>
        </>
    }

    if (error){
        return <>
            {heading}
            <h3>Error</h3>
        </>
    }

  return (
    <>
        {heading}
        <h4>Name: {user.name}</h4>
        <h4>Phone: {user.phone}</h4>
    </>
  )
}

export default User