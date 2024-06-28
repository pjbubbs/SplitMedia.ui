import UserSignedIn from './userSignedIn';

export default function PageHeader() {
    return (
      <>
        <div className="culmn">
        <header id="main_menu" className="header navbar-fixed-top">
            <div className="main_menu_bg">
                <div className="container">
                    <div className="row">
                        <div className="nave_menu">
                            <nav className="navbar navbar-default">
                                <div className="container-fluid">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                        <a className="navbar-brand" href="/">
                                            <img src="https://pazootstorage.blob.core.windows.net/upload-images/logo.png" />
                                        </a>
                                    </div>

                                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                                        <ul className="nav navbar-nav navbar-right">
                                            <li><a href="/">HOME</a></li>
                                            <li><a href="/about-us">ABOUT US</a></li>
                                            <li><a href="/pricing">PRICING</a></li>
                                            <li><a href="/team">TEAM</a></li>
                                            <li><a href="/contact-us">CONTACT</a></li>
                                            <li><UserSignedIn></UserSignedIn></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>

                </div>

            </div>
        </header>
    </div>
    </>
    );
}