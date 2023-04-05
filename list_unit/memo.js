import { memo } from "react"


function Content() {    
    console.log('re-render');
    return (
        <h2>HELLO ANH EM F8</h2>
    )
}

export default memo(Content)