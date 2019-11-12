import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './AccessNotAllowedView.module.css';

const AccessNotAllowedView = () => (
    <div className={classes.NowAllowedContent}>
        <p>
            <FormattedMessage 
                id="not_allowed_to_use_resource" 
                defaultMessage={'You are not allowed to use this resource.'}
            />
        </p>
    </div>
);

export default AccessNotAllowedView;