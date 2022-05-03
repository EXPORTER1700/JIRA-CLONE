import {addManyUsersAction} from "../store/users";

const randomColor = (id) => {
    switch (id % 5) {
        case (0): return 'red'
        case (1): return 'green'
        case (2): return 'blue'
        case (3): return 'yellow'
        case (4): return 'orange'
    }
}

export const fetchUsers = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => users.map(user => ({...user, color: randomColor(user.id)})))
            .then(data => dispatch(addManyUsersAction(data)))
    }
}