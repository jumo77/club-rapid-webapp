import React from "react";
import AuthPanel from "../component/authPanel/AuthPanel";

const Profile=()=>{
    return(
            <section className="internal-page-wrapper bgc">
                <div className="container2 paddin-bottom border-bottom ">
                        <div className="border-bottom brief-description">
                            Rapid! 계정
                        </div>

                    <AuthPanel/>
                </div>
            </section>
    );
}

export default Profile