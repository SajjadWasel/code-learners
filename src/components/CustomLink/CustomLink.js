import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import './CustomLink.css'

const CustomLink = ({ to, children }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <NavLink to={to} className={`
        text-decoration-none nav-items
        ${match ? 'active' : 'deactive'}`} >
            {children}
        </NavLink>
    )
}

export default CustomLink;