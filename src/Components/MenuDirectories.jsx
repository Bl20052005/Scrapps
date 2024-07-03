import styles from './MenuDirectories.module.css'
function MenuDirectories(){
    return(
        <nav>
            <ul>
                <li>
                    <a href="Main.jsx">Main Page</a>
                </li>
                <li>
                    <a href="Matchmake.jsx">Matchmaking</a>
                </li>
                <li>
                    <a href="Profile.jsx">Profile</a>
                </li>
            </ul>
        </nav>   
    )
}

export default MenuDirectories