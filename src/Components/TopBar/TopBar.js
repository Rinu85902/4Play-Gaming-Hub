import '../TopBar/topbar.css';
import logo from '../TopBar/Images/4play.png';
export default function TopBanner(){
    return(
        <>
        <div className='nav-bar-container'>
            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="navbar-wrapper">
                    <div className="navbar-toggle d-inline">
                        <button type="button" className="navbar-toggler">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>
                    
                    <a className="navbar-brand mr-auto" href="#">
                        <img src={logo} alt="4Play gaming Hub"/>
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                </button>
                <div className="collapse navbar-collapse" id="navigation">
                    <ul className="navbar-nav ml-auto">
                       
                        <li className="dropdown nav-item">
                            <a href="#" data-toggle="dropdown">

                      
                <div className="media d-flex align-items-center">
                  <div className="avatar rounded-circle">
                    R
                  </div>
                  <div className="media-body ms-2 text-white ml-2 align-items-center d-none d-lg-block">
                    <span className="mb-0 font-small fw-bold text-gray-900">Rinu</span>
                  </div>
                </div>
                                <p className="d-lg-none">
                                    Log out
                                </p>
                            </a>
                            <ul className="dropdown-menu dropdown-navbar">
                                <li className="nav-link">
                                    <a href="#" className="nav-item dropdown-item">My Profile</a>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li className="nav-link">
                                    <a href="#" className="nav-item dropdown-item">Logout</a>
                                </li>
                            </ul>
                        </li>
                        <li className="separator d-lg-none"></li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
        </>
    )
}