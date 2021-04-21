import React from 'react'
import './HowTo.css'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../services/routes'
import Button from 'react-bootstrap/Button'
const HowTo = () => {

    return(
        <div className="howToCont">
            <h1>how to...</h1>
            <div className="howToSign howCard">
                <div className="signUpInfo">
                    <h3>sign up</h3>
                    <p>make sure you are signed up or logged in</p>
                    <p>member of the team? not signed up yet...why?</p>
                    {/* <br /> */}
                    <Link to={ROUTES.SIGN_UP}>
                        <Button>sign up</Button>
                    </Link>
                </div>
            </div>
            <div>
                <div className="howToLogin howCard">
                    <div className="howInfo">
                        <h3>when your logged in</h3>
                        <p className="howText">
                            you can have a look at our photos stored
                            from other members of the team
                        </p>
                        <Link to={ROUTES.HOME}>
                            <Button>view</Button>
                        </Link>
                    </div>
                </div>
                <div className="howToUpload howCard">
                    <div className="uploadInfo">
                        <h3>upload your own</h3>
                        <p className="howText">when you can see the preview of the image, great. UPLOAD IT</p>
                        <Link to={ROUTES.UPLOAD}>
                            <Button>upload</Button>
                        </Link>
                        <br/>
                        <p className="howText">(after you've uploaded, dont forget to add some tags to let other members 
                            see if that photo can be used for their projects / marketing)
                        </p>
                    </div>
                </div>
                <div className="howToSearch howCard">
                    <div className="searchInfo">
                        <h3>what do you want?</h3>
                        <p className="howText">search a tag to see what images we have for that...eg "virtual" , "student", "presentation"</p>
                        <Link to={ROUTES.SEARCH}>
                            <Button>search</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowTo