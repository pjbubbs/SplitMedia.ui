import PageHeader from '../components/pageHeader'
import 'bootstrap/dist/css/bootstrap.css'
import './root.css'

export default function Root() {
    
    return (
      <>
        <PageHeader/>
        <div className='containter-fluid'>
            <h1>Header Text</h1>
            <h3>Sub Header Text</h3>
            <a href="/register" className="btn btn-primary">Sign Up</a>
            <div className='rootTemplateSection'>
                <div className="row">
                    <div className="col-sm-4"><img src="https://pazootstorage.blob.core.windows.net/upload-images/pf1.jpg" className="rootTemplateImage"></img></div>
                    <div className="col-sm-4"><img src="https://pazootstorage.blob.core.windows.net/upload-images/pf2.jpg" className="rootTemplateImage"></img></div>
                    <div className="col-sm-4"><img src="https://pazootstorage.blob.core.windows.net/upload-images/pf3.jpg" className="rootTemplateImage"></img></div>
                </div>
            </div>
            <h1><br/>tech Spec</h1>
            <section id="SecuritySpec">
                <div className="techSectionHeader text-start">Security</div>
                <div className="row">
                    <div className="col-sm-2"><img src="https://pazootstorage.blob.core.windows.net/upload-images/pf4.jpg" className="rootSecurityIcon"></img></div>
                    <div className="col-sm-2"><img src="https://pazootstorage.blob.core.windows.net/upload-images/pf5.jpg" className="rootSecurityIcon"></img></div>
                    <div className="col-sm-2"><img src="https://pazootstorage.blob.core.windows.net/upload-images/pf6.jpg" className="rootSecurityIcon"></img></div>
                    <div className="col-sm-2"><img src="https://pazootstorage.blob.core.windows.net/upload-images/pf7.jpg" className="rootSecurityIcon"></img></div>
                    <div className="col-sm-2"><img src="https://pazootstorage.blob.core.windows.net/upload-images/pf8.jpg" className="rootSecurityIcon"></img></div>
                    <div className="col-sm-2"><img src="https://pazootstorage.blob.core.windows.net/upload-images/pf9.jpg" className="rootSecurityIcon"></img></div>
                </div>
            </section>
            
            <section id="StorageSpec">
                <div className="techSectionHeader text-start">Storage</div>
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
            </section>
            <br></br>
            <a href="/register" className="btn btn-primary">Sign Up</a>
        </div>

      </>
    );
  }