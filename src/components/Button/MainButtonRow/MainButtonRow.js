import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './MainButtonRow.css';
import Button from '../Button';
import Icon from '../../Icon/Icon';
import Links from '../../../assets/links';

const MainButtonRow = (props) => (
    <div className="row text-center" styleName="btn-container">
        <div className="col-md-3">
            <Button link={Links.resumePath} btnType="btnIcon" ><Icon iconName="far fa-file" iconType="iconSmall" /></Button>
        </div>
        <div className="col-md-3">
            <Button link={Links.email} btnType="btnIcon" ><Icon iconName="far fa-envelope" iconType="iconSmall" /></Button>
        </div>
        <div className="col-md-3">
            <Button link={Links.github} btnType="btnIcon" ><Icon iconName="fab fa-github" iconType="iconSmall" /></Button>
        </div>
        <div className="col-md-3">
            <Button link={Links.linkedin} btnType="btnIcon" ><Icon iconName="fab fa-linkedin" iconType="iconSmall" /></Button>
        </div>
    </div>
)

export default CSSModules (MainButtonRow, styles);