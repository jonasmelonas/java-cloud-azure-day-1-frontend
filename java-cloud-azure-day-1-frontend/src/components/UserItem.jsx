import { Link } from "react-router"


export function UserItem(props) {
    
    const {user, index} = props


    return (
        <div>
            <h3>{user.firstName} {user.lastName}</h3>
            <p><Link to={`/user/${user.id}`} >See games</Link></p>
        </div>
    )
}