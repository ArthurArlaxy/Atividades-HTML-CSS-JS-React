import styles from "./textArea.module.css"

export function TextArea({ content }) {
    return (
        <>
            <p className={styles.text}>{content}</p>
        </>
    )
}