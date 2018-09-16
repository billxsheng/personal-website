import React, {Component} from 'react';
import projectsInfo from '../../../../assets/projectsInfo';
import CSSModules from 'react-css-modules';
import styles from '../projectDetail.css';
import Button from '../../../../components/Button/Button';

class Ryse extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                <span className="container">
                        <h1>
                            {projectsInfo.Ryse.name}
                        </h1>
                        <div className="row" styleName="tag" >
                            <p>Hackathon</p>
                        </div>
                        <p>
                            {projectsInfo.Ryse.description}
                        </p>
                    <span className="container">
                        <h3>Technologies Used</h3>
                        <p>{projectsInfo.Ryse.technologies}</p>
                    </span>
                    <span className="container">
                        <h3>Summary</h3>
                        <p>{projectsInfo.Ryse.about}</p>
                    </span>
                    <div styleName="button-row" className="row">
                        <Button link="http://github.com/billxsheng/ryse" newPage = 'true' btnType="btnLarge" >View on Github</Button>
                    </div>
                </span>
            </div>
        )
    }
} 

export default CSSModules(Ryse, styles);