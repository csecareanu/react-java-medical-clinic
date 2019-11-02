import React from 'react';

import classes from './MainLayoutView.module.css';
import FooterView from '../../FooterView/FooterView';

class Layout extends React.Component {
    render() {
        return (
          <main className={classes.LayoutContainer}>
            <div className={classes.HeaderContainer}>
              {this.props.header}
            </div>
            <div className={classes.BodyContainer}>
              {this.props.children}
            </div>
            <div className={classes.FooterContainer}>
              <FooterView />
            </div>
          </main>
         );
    }
}

export default Layout;