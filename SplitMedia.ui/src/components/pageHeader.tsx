import UserSignedIn from './userSignedIn';

export default function PageHeader() {
    return (
      <>
     <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="SplitMedia navigation bar">

      <div className="container">
        <a className="navbar-brand" href="/">Split Media</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsSplitMedia" aria-controls="navbarsSplitMedia" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsSplitMedia">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            {/* <li><a className="nav-link" href="/shows">Shows</a></li> */}
            <li><a className="nav-link" href="/about-us">About us</a></li>
            <li><a className="nav-link" href="/contact-us">Contact us</a></li>
            {/* <li><a className="nav-link" href="/advertisers">Advertisers</a></li> */}
            <li><UserSignedIn></UserSignedIn></li>
          </ul>
        </div>
      </div>
        
      </nav>
      </>
    );
  }