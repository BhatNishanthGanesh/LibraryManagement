import '../Css/Menu.css'
const Menu = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-body-secondary">
        <div className="container-fluid">
          <a className="navbar-brand text-primary fw-bold" href="/">
            Library Books Management
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5 fw-bold">
              <li className="nav-item">
                <a className="nav-link text-success" href="/Insert">
                  Insert
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success" href="/Display">
                  Display
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link text-success" href="/Update">
                  Update
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link text-success" href="/Delete">
                  Delete
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success" href="/About">
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Menu;