import React, {Component} from 'react';
import projectsInfo from '../../../../assets/projectsInfo';
import styles from '../projectDetail.css';
import CSSModules from 'react-css-modules';
import Icon from '../../../../components/Icon/Icon';
import {NavLink} from 'react-router-dom';

var projectsArray = projectsInfo.headings.experience.order;

class canadianTire extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        if(projectsArray.indexOf((projectsInfo.ctc.link).toLowerCase()) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((projectsInfo.ctc.link).toLowerCase()) === projectsArray.length - 1) {
            this.setState({rightArrow: false});
        }
    }
    
    render() {
        return (
            <div className="container"  styleName="overlay">
                <span className="container">
                    <div className="row">
                        <div className="col-md-4">
                            {this.state.leftArrow ? 
                                <NavLink styleName="btn-prev" to={`/projects/experience/${projectsArray[projectsArray.indexOf(projectsInfo.ctc.link.toLowerCase()) - 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </a>
                            }
                        </div> 
                        <div className="col-md-4">
                            <h1>
                                {projectsInfo.ctc.name}
                            </h1>
                        </div>
                        <div className="col-md-4">
                            {this.state.rightArrow ? 
                                <NavLink styleName="btn-next" to={`/projects/experience/${projectsArray[projectsArray.indexOf(projectsInfo.ctc.link.toLowerCase()) + 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon>
                                </a>
                            }
                        </div> 
                    </div>
                    <p styleName="description-p">
                        {projectsInfo.ctc.description}
                    </p>
                    {/* <div className="row" styleName="tag" >
                        <p>{projectsInfo.ctc.tag}</p>
                    </div> */}
                </span>
                <span className="container">
                    <h3>Summary</h3>
                    <p>{projectsInfo.ctc.about}</p>
                </span>
            </div>
        )
    }
} 
export default CSSModules(canadianTire, styles);