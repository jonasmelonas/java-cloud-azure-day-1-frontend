import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import { useParams } from "react-router";

function UserProfile() {

    const context = useContext(DataContext)
    const [user, setUser] = useState(null)

    const [games, setGames] = useState(null)


    if(user) {
        console.log("kjører" + user.games)
    }

    const { id } = useParams();

    useEffect(() => {
        if (context.users && id) {
            const matchingUser = context.users.find((user) => 
                Number(user.id) === Number(id)
            )
            setUser(matchingUser)
            setGames(matchingUser.games)
        }
    }, [context.users, id])
  
    if (!user) return <div>Loading...</div>

    return (
        <div>
            <h3>user profile:</h3>
            <h4>{user.firstName} {user.lastName}</h4>
            <ul>
                {games && games.map((game, index) => {
                    return (
                        <li key={index}>
                            <p>{game.title}, {game.releaseYear}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export { UserProfile }