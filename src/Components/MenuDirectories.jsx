import styles from './MenuDirectories.module.css'
function MenuDirectories(props){
    function onClick1(){
        props.setCurrent("main")
    }
    function onClick2(){
        props.setCurrent("matchmake")
    }
    function onClick3(){
        console.log("Is this clicking?")
        props.setCurrent("profile")
    }
    return(
       
        <nav>
            <ul>
                <li>
                    <div onClick={onClick1}>Main Page</div>
                </li>
                <li>
                    <div onClick={onClick2}>Matchmaking</div>
                </li>
                <li>
                    <div onClick={onClick3}>Profile</div>
                </li>
            </ul>
        </nav>   
    )
}

export default MenuDirectories