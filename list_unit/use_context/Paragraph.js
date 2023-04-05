import { useContext } from "react";
import {ThemeContext} from './ThemeContext'

function Paragraph() {

    const context = useContext(ThemeContext)

    return (
        <p className={context.theme}>
            Context provides a way to pass data through the component tree without having to pass props down mannually at every level
        </p>
    )
}

export default Paragraph