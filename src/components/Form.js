import React from 'react'

const Form = (props) => {
    return (
        <div>
            <p>Remember to include measurement units! <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units">CSS Units</a></p>
            <div className="forms">
                <div>
                    <label>Top-left</label>
                    <input type="text" name="tll" placeholder="Horizontal" value={props['tll']} onChange={props.handleChange} />
                    <input type="text" name="tlp" placeholder="Vertical" value={props['tlp']} onChange={props.handleChange} />
                </div>
                <div>
                    <label>Top-right</label>
                    <input type="text" name="trl" placeholder="Horizontal" value={props['trl']} onChange={props.handleChange} />
                    <input type="text" name="trp" placeholder="Vertical" value={props['trp']} onChange={props.handleChange} />
                </div>
                <div>
                    <label>Bottom-right</label>
                    <input type="text" name="brl" placeholder="Horizontal" value={props['brl']} onChange={props.handleChange} />
                    <input type="text" name="brp" placeholder="Vertical" value={props['brp']} onChange={props.handleChange} />
                </div>
                <div>
                    <label>Bottom-left</label>
                    <input type="text" name="bll" placeholder="Horizontal" value={props['bll']} onChange={props.handleChange} />
                    <input type="text" name="blp" placeholder="Vertical" value={props['blp']} onChange={props.handleChange} />
                </div>
            </div>
        </div>
    )
}

export default Form
