import styles from './Header.module.css'
import MenuDirectories from './MenuDirectories'
function Header(props){
    console.log(props)
    return(
        <header>
            <MenuDirectories setCurrent={props.setCurrent}></MenuDirectories>
        </header>
        
    )
}

export default Header