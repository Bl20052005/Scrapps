import styles from './ProfileCreation.module.css'
function ProfileCreation() {

    return (

        <div className = {styles.first}>
            <p>
                What is your Riot Username?
            </p>

            <input type = "text" 
            className = {styles.field}/>
        </div>
        

    )
}

export default ProfileCreation
