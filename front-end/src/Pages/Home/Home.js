import './Home.css'
import { Link } from 'react-router-dom'
export default function Home () {

    return (
        <div className="home">
            <div className='button'>
            <Link to="/flowers">
                <button>Enter</button>
            </Link>
            </div>
        </div>
    )
}