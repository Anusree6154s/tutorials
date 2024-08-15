import './styles.css'
import { useState } from "react"
import Button from './components/Button'
import Dashboard from './components/Dashboard'

function App() {
    const [value, setValue] = useState('X')






    return (
        <div className='app'>
            <div>
                <p>Next Player: {value}</p>
                <div className='buttons'>
                    <Button value={value} setValue={setValue}></Button>
                    <Button value={value} setValue={setValue}></Button>
                    <Button value={value} setValue={setValue}></Button>
                    <Button value={value} setValue={setValue}></Button>
                    <Button value={value} setValue={setValue}></Button>
                    <Button value={value} setValue={setValue}></Button>
                    <Button value={value} setValue={setValue}></Button>
                    <Button value={value} setValue={setValue}></Button>
                    <Button value={value} setValue={setValue}></Button>
                </div>
            </div>
            <div className='dashboard'>
                <Dashboard ></Dashboard>
            </div>
        </div>
    )
}

export default App