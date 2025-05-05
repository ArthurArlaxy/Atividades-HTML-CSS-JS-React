import styles from './button.module.css'

export function Button({title, link}){
    return <a className={styles.btn} href={link} target='_blank'>{title}</a>
}