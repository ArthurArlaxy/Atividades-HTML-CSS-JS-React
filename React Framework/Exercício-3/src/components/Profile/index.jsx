import { useState } from "react";
import { Button } from "../Button";
import styles from "./profile.module.css"

export function Profile({avatar,name,bio,phone,email,githubUrl,linkedinUrl,xUrl}){
    const [followText, setFollowText] = useState("follow")

    function followBtn(){
        followText === "follow"? setFollowText("Following"):setFollowText("follow")
    }
    
    return (
        <main className={styles.container}>
            <img src={avatar} alt={name} />
            <h2>{name}</h2>
            <button className={styles.btnFollow} onClick={followBtn}>{followText}</button>
            <hr />
            <p>{bio}</p>
            <hr />
            <p>{phone}</p>
            <hr />
            <p>{email}</p>
            <hr />
            <Button title="GitHub" link={githubUrl}/>
            <Button title="LinkedIn" link={linkedinUrl}/>
            <Button title="Twitter" link={xUrl}/>
        </main>
    )
}