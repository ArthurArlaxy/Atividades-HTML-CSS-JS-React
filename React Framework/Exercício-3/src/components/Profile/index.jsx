import { Button } from "../Button";
import styles from "./profile.module.css"

export function Profile({avatar,name,bio,phone,email,githubUrl,linkedinUrl,xUrl}){
    return (
        <main className={styles.container}>
            <img src={avatar} alt={name} />
            <h2>{name}</h2>
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