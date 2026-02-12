import styles from "./Button.module.css"

export function Button({ content, link }) {
    return (
        <>
            <a className={styles.btn} href={link}>{content}</a>
        </>
    )
}