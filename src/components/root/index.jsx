import { Link, Outlet } from "react-router-dom"
const Root = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to = "/"> 
                <span>Home</span>
                </Link>
            </li>
            <li>
                <Link to = "/about"> 
                <span>About</span>
                </Link>
            </li>
            <li>
                <Link to = "/projects"> 
                <span>Projects</span>
                </Link>
            </li>
            <li>
                <Link to = "/contact"> 
                <span>Contact</span>
                </Link>
            </li>
        </ul>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Root