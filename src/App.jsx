import { useState } from "react"
import Main from "./pages/Main/Main"
import Matchmake from "./pages/Matchmake/Matchmake"
import Profile from "./pages/Profile/Profile"
import Homepage from "./pages/Homepage/Homepage"

function App() {
    const [current, setCurrent] = useState('main');
    return (
        <div>
            {current == 'main' && <Main />}
            {current == 'matchmake' && <Matchmake />}
            {current == 'profile' && <Profile />}
            {current == 'homepage' && <Homepage />}

        </div>
    )
}

export default App
