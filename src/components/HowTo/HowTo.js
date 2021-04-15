import React from 'react'
import './HowTo.css'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../services/routes'
const HowTo = () => {

    return(
        <div className="howToCont">
            <h2>how to</h2>
            <div>
                <h3>sign up</h3>
                <p>make sure you are signed up or logged in</p>
                <p>member of the team? not signed up yet...why? 
                    <br />
                    <Link to={ROUTES.SIGN_UP}>sign up</Link>
                </p>
            </div>
            <div>
                <h3>when your logged in</h3>
                <div>
                    <p>
                        you can now have a look at our photos stored
                        from other members of the team
                    </p>
                    
                    <Link to={ROUTES.HOME}>view</Link>
                    <br />
                </div>
                <div>
                    <br />
                    <h3>upload your own</h3>
                    <p>when you can see the preview of the image, great. UPLOAD IT</p>
                    <Link to={ROUTES.UPLOAD}>upload</Link>
                    <p>(after you've uploaded, dont forget to add some tags to let other members 
                        see if that photo can be used for their projects / marketing)
                    </p>
                </div>
                <div>
                    <h3>what do you want?</h3>
                    <p>search a tag to see what images we have for that...eg "virtual" , "student", "presentation"</p>
                    <Link to={ROUTES.SEARCH}>search</Link>
                </div>
            </div>
        </div>
    )
}

export default HowTo