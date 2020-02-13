import React from 'react'

const CodeBlock = (props) => {
    const style = props.style
    return (
        <div>
            <code>border-radius: {style.borderRadius};</code><br />
        </div>
    )
}

export default CodeBlock
