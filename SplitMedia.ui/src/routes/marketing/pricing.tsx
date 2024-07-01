import PageFooter from '../../components/pageFooter';
import PageHeader from '../../components/pageHeader'

export default function Pricing() {
    return (
      <>      
        <PageHeader/>  
        <h1>Pricing</h1>
        <p>Phase 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et est quis velit suscipit varius ac eget ante. Vestibulum suscipit urna felis, nec mollis est pharetra at. Nam porta sodales sapien, in placerat mauris fringilla at. Morbi luctus molestie neque in porta.</p>
        <div className="row">
                    <div className="col-sm-1">&nbsp;</div>

                    <div className="col-sm-2">
                        <div className="rootPlanBox">
                            <div className="planBoxTitle">Plan A</div>
                            <ul>
                                <li>Blah</li>
                                <li>Blah</li>
                                <li>Blah</li>
                                <li>Blah</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-2">
                        <div className="rootPlanBox">
                            <div className="planBoxTitle">Plan B</div>
                            <ul>
                                <li>Blah</li>
                                <li>Blah</li>
                                <li>Blah</li>
                                <li>Blah</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-2">
                        <div className="rootPlanBox">
                            <div className="planBoxTitle">Plan C</div>
                            <ul>
                                <li>Blah</li>
                                <li>Blah</li>
                                <li>Blah</li>
                                <li>Blah</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-2">
                        <div className="rootPlanBox">
                            <div className="planBoxTitle">Plan D</div>
                            <ul>
                                <li>Blah</li>
                                <li>Blah</li>
                                <li>Blah</li>
                                <li>Blah</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-2">
                        <div className="rootPlanBox">
                            <div className="planBoxTitle">Plan E</div>
                            <ul>
                                <li>Blah</li>
                                <li>Blah</li>
                                <li>Blah</li>
                                <li>Blah</li>
                            </ul>
                        </div>
                    </div>
                </div>
        <p>Contact: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et est quis velit suscipit varius ac eget ante. Vestibulum suscipit urna felis, nec mollis est pharetra at. Nam porta sodales sapien, in placerat mauris fringilla at. Morbi luctus molestie neque in porta.</p>
        <p>Phase 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et est quis velit suscipit varius ac eget ante. Vestibulum suscipit urna felis, nec mollis est pharetra at. Nam porta sodales sapien, in placerat mauris fringilla at. Morbi luctus molestie neque in porta.</p>
        <a href="/register" className="btn btn-primary">Sign Up</a>
        <PageFooter></PageFooter>        
      </>
    );
  }