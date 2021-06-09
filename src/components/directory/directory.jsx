import React from 'react';
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item";
import { connect } from "react-redux";

function Directory({ section }) {
    return (
        <div className='directory-menu'>
            {section.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    section: state.directory.section
})

export default connect(mapStateToProps)(Directory);
