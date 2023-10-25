
import {Image} from '@shopify/hydrogen';


export function BirlWelcomeGuest() {

    if(isLoggedIn){
        <div>Loggedin</div>
    } else {
        return (
            <div className="birl-guest-welcome-container">
                <Image src={`http://localhost:3000/background-guest.png`} width="1920" height="1080"/>;
                <div className="birl-guest-welcome-content">
                    <h1>Start your trade-in</h1>
                    <p className="welcome-description">

                        To begin your trade-in, please click on the option that best applies to you

                        In order to proceed with your trade in you will need to have an account
                        with Please click on the option below that best applies to you.


                    </p>
                </div>


            </div>
        )
    }
}

