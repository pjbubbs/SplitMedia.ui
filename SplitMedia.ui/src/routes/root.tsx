import PageHeader from '../components/pageHeader'

export default function Root() {
  
    return (
      <>
        <PageHeader/>
        <section id="home" className="home">
            <div className="overlay">
                <div className="home_skew_border">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 ">
                                <div className="main_home_slider text-center">
                                    <div className="single_home_slider">
                                        <div className="main_home wow fadeInUp" data-wow-duration="700ms">
                                            <h3>Your Media Your Way</h3>
                                            <h1>WELCOME TO SPLIT MEDIA</h1>
                                            <div className="separator"></div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown printer took a
                                                galley
                                                of type and scrambled it to make a type specimen book.</p>
                                            <div className="home_btn">
                                                <a href="/register" className="btn btn-lg m_t_10">GET
                                                    STARTED NOW</a>
                                                <a href="learn-more" className="btn btn-default">LEARN
                                                    MORE</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }