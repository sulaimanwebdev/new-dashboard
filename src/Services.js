import {useState} from 'react'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
const Services = () => {

const [navBar, setnavBar] = useState('leftSide')


let burgerClick = () =>{
  setnavBar('leftSide activeNavbar');
}
let closeClick = () =>{
  setnavBar('leftSide');
  
}
    return (
        <>
               <div className="parent">
            <div className="header">
            <div className="burgerFlex"><div className="burger" onClick={burgerClick}><MenuIcon/></div><div className="logo">Brand Name</div></div>
            <nav>
                <a href="#" className="usersLink"><div className="circle"></div>User</a>

            </nav>
        </div>
            </div>


            <div className="main">
                <div className={navBar}>
                    <div className="close" onClick={closeClick}><CloseIcon/></div>
                    <div className="linkLabel link">MENU</div>
                    <Link to="/renvenue" className="link">Renveues</Link>
                    <Link to="/services" className="link activeTab">Services</Link>
                    <div className="link">Appointments</div>
                    <Link to="/login" className="link logoutBtn">Logout</Link>



                </div>
                

                  {/* right side starts */}
                <div className="rightSide servicesRightSide">
                    <div className="title">Services</div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sed dicta nulla, quidem possimus aliquam, ad, quas maxime ratione magnam laboriosam autem architecto in fugit dolorum excepturi officiis harum reiciendis.</p>
                     <br />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sed dicta nulla, quidem possimus aliquam, ad, quas maxime ratione magnam laboriosam autem architecto in fugit dolorum excepturi officiis harum reiciendis.</p>
                   
                </div>

                {/* ended */}
            </div>


        </>
    )
}

export default Services
