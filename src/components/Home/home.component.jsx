
// import { ReactComponent as Logo } from "../../resources/pic.svg";
import './home.styles.css'
import Nav from '../navigation/nav.component';

const Base = () => {
    return(
        <div>
        <div className="basic-div">  
            <div className='heading-encloser'>
                <h1>Welcome to Agro India</h1>
            </div>
        </div>
            <br/>
            <Nav/>
        </div>
    )
}

export default Base;