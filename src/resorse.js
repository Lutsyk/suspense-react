export function useResorse() {
    return{
        posts: wrapPromise(fetchPosts()),
        users: wrapPromise(fetchUsers())
    }
}

function wrapPromise(promise) {
    let status = 'pending'
    let result
    const suspender = promise.then(r => {
        result = r
        status = 'success'
    }, e => {
        result = e
        status = 'error'
    })

    return {
        read(){
            if (status === 'pending'){
                throw suspender
            } else if (status === 'error'){
                throw result
            } else if (status === 'success'){
                return result
            }
        }
    }
}

function fetchPosts(){
    return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => response.json())
}


async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
    return await res.json()
}