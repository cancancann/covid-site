import PropTypes from "prop-types";


const MenuItem = ({ title, active, ...props }) => {
    return (
        <li>
            <a onClick={() => {
                props.onClick(title)
            }} className={`block cursor-pointer border-0 py-2 pr-4 pl-3 ${active ? 'text-blue-700' : 'text-gray-400'} hover:text-blue-700`}>
                {title}
            </a>
        </li>
    )
}
MenuItem.propTypes = {
    title: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
}
MenuItem.defaultProps = {
    title: '',
    active: false,
    onClick: () => null

}
export default MenuItem