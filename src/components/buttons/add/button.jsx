import styles from './Button.module.scss'

export default function Button(props) {

    const {
        className = '',
        type = 'button',
        children,
        onClick,
        isDisabled,
    } = props

    return (
        <>
        <button 
        className={`button ${styles.button} ${className}`} 
        type={type}
        onClick={onClick}
        disabled={isDisabled}
        >
            {children}
        </button>
        </>
    )
}