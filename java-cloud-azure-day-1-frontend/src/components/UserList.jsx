import { useContext } from "react"
import { DataContext } from "../App"
import { UserItem } from "./UserItem"


export function UserList() {

    const context = useContext(DataContext)


    return (
        <ul>
            {context.users.map((user, index) => {
                return (
                    <li key={index}>
                        <UserItem user={user} index={index} />
                    </li>
                )
            })}
        </ul>
    )
}