/**
 * Header Component
 */
import React from 'react';
import _ from 'lodash';

const SCROLL_OFFSET = 300;

export class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    onScroll() {
        return _.debounce(() => {
            let supportPageOffset = window.pageXOffset !== undefined;
            let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
            let scrollY = supportPageOffset
                ? window.pageYOffset
                : isCSS1Compat
                    ? document.documentElement.scrollTop
                    : document.body.scrollTop;

            if (scrollY > SCROLL_OFFSET && this.props.header.style === 'jumbotron') {
                this.props.onSetStyle('not-jumbotron');
                this.triggeredByScroll = true;
            } else if (scrollY < SCROLL_OFFSET && this.props.header.style !== 'jumbotron') {
                this.props.onSetStyle('jumbotron');
            }
        }, 200);
    }

    onToggleInfo() {
        return this.props.onToggleInfo();
    }

    initializeScrollHandler() {
        window.addEventListener('scroll', this.onScroll());
    }

    render() {
        let classNames = ['navbar'];
        // let animationClasses = [];
        let headerInfoStyle = {display: 'none'};
        let headerContainerStyle = {width: '100%', top: 0};

        switch (this.props.header.style) {
            case 'jumbotron':
                // animationClasses = ['fadeIn', 'animated'];
                // animationClasses.forEach((className) => classNames.push(className));
                // setTimeout(() => animationClasses.forEach((className) => this.navEl.classList.remove(className)), 1000);
                classNames.push('coinbank-navbar-jumbotron');
                this.initializeScrollHandler();
                break;
            default:
                // animationClasses = ['slideInDown', 'animated'];
                // animationClasses.forEach((className) => classNames.push(className));
                // setTimeout(() => animationClasses.forEach((className) => this.navEl.classList.remove(className)), 1000);
                classNames.push('fixed-top', 'bg-dark', 'navbar-dark');

                if (!this.triggeredByScroll) {
                    this.triggeredByScroll = false;
                    window.removeEventListener('scroll', this.onScroll());

                }
        }

        if (this.props.header.showInfo) {
            let fixedHeaderClassIndex = classNames.indexOf('fixed-top');
            headerInfoStyle.display = 'block';
            headerContainerStyle.position = 'fixed';
            if (fixedHeaderClassIndex !== -1) {
                classNames.splice(fixedHeaderClassIndex, 1);
            }
        }

        return (
            <div style={headerContainerStyle}>
                <div className="bg-dark" style={headerInfoStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 py-4">
                                <h4 className="text-white">About</h4>
                                <p className="text-muted">Clout Tech is an organization that aims to make application development simpler and quicker.</p>
                                <p className="text-muted">Our contributers include experts in the IT industry who have built scalable applications in multiple enterprises.</p>
                            </div>
                            <div className="col-sm-4 py-4">
                                <h4 className="text-white">Links</h4>
                                <ul className="list-unstyled">
                                    <li><a href="https://github.com/clout-stack/clout-js" className="text-white">Github</a></li>
                                    <li><a href="http://docs.clout.tech" className="text-white">Documentation</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className={classNames.join(' ')}
                     ref={(navEl) => { this.navEl = navEl; }}>
                    <div className="container">
                        <a className="navbar-brand" href="#">Clout Tech</a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={this.onToggleInfo.bind(this)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
        );
    }
};

export default HeaderComponent;
