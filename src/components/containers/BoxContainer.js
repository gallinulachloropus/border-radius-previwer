import React from 'react'
import Box from '../Box'
import CodeBlock from '../CodeBlock'
const BoxContainer = (props) => {
    const borders = props.borders
    const style = {
        borderRadius: `
            ${borders.tll ? borders.tll : 0}
            ${borders.trl ? borders.trl : 0}
            ${borders.brl ? borders.brl : 0}
            ${borders.bll ? borders.bll : 0} / 
            ${borders.tlp ? borders.tlp : borders.tll ? borders.tll : 0}
            ${borders.trp ? borders.trp : borders.trl ? borders.trl : 0}
            ${borders.brp ? borders.brp : borders.brl ? borders.brl : 0}
            ${borders.blp ? borders.blp : borders.bll ? borders.bll : 0}`
    }

    return (
        <div>
            <Box style={style} />
            <CodeBlock style={style} />
        </div>
        
    )
}

export default BoxContainer
