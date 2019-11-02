import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './BirthdayElement.module.css';
import FormControlsView from '../../../../UI/FormControlsView/FormControlsView';

const ELEMENTS = {
    BIRTH_DAY: 0,
    BIRTH_MONTH: 1,
    BIRTH_YEAR: 2
};

class BirthdayElement extends React.Component {
    state = {
        elementsStatus: {
            [ELEMENTS.BIRTH_DAY]: {
                value: ''
            },
            [ELEMENTS.BIRTH_MONTH]: {
                value: ''
            },
            [ELEMENTS.BIRTH_YEAR]: {
                value: ''
            }
        }
    }

    inputChangedHandler = (event, elementId) => {
        const updatedElement = {
            ...this.state.elementsStatus[elementId],
            value: event.target.value
        }        
        const updatedElementsStatus = {
            ...this.state.elementsStatus,
            [elementId]: updatedElement
        }

        this.setState({elementsStatus: updatedElementsStatus});
    }

    render() {
        const birthDayElem = this.state.elementsStatus[ELEMENTS.BIRTH_DAY];
        const birthMonthElem = this.state.elementsStatus[ELEMENTS.BIRTH_MONTH];
        const birthYearElem = this.state.elementsStatus[ELEMENTS.BIRTH_YEAR];
        
        //TODO 
        /*
        const dayText = <FormattedMessage id="birthday_day" defaultMessage={'day'}/>
        const monthText = <FormattedMessage id="birthday_month" defaultMessage={'month'}/>
        const yearText = <FormattedMessage id="birthday_year" defaultMessage={'year'}/>
        */
       const dayText = 'day';
       const monthText = 'month';
       const yearText = 'year';

       const birthdayLabel = <FormattedMessage id="label_birthday" defaultMessage={'Birthday:'}/>

        return (
            <FormControlsView.Group name={birthdayLabel}>
                <div className={classes.Birthday}>
                    <FormControlsView.Text 
                        size={6}
                        placeholder={dayText}
                        value={birthDayElem.value}
                        onChange={(event) => {this.inputChangedHandler(event, ELEMENTS.BIRTH_DAY)}}
                    />
                    <FormControlsView.VerticalSep1/>
                    <FormControlsView.Text 
                        size={6} 
                        placeholder= {monthText}
                        value={birthMonthElem.value}
                        onChange={(event) => {this.inputChangedHandler(event, ELEMENTS.BIRTH_MONTH)}}
                    />
                    <FormControlsView.VerticalSep1/>
                    <FormControlsView.Text 
                        size={12}
                        placeholder={yearText}
                        value={birthYearElem.value}
                        onChange={(event) => {this.inputChangedHandler(event, ELEMENTS.BIRTH_YEAR)}}
                    />
                </div>
            </FormControlsView.Group>
        );
    }
}

export default BirthdayElement;