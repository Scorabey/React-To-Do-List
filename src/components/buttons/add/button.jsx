export default function Button(props) {

    const {
        className = '',
        type = 'button',
        children,
    } = props

    return (
        <>
        <button className={`button ${className}`} type={type}>{children}</button>
        </>
    )
}