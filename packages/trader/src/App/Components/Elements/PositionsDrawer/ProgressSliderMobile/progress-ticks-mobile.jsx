import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Localize } from '@deriv/translations';
import { TickProgress } from '@deriv/components';

const ProgressTicksMobile = ({ current_tick, ticks_count }) => {
    const arr_ticks = [...Array(ticks_count).keys()];
    return (
        <div className='progress-slider__ticks'>
            <span className='progress-slider__ticks-caption'>
                <Localize
                    i18n_default_text='Tick {{current_tick}}'
                    values={{ current_tick: current_tick.toString() }}
                />
            </span>
            <TickProgress columns={5} rows={ticks_count > 5 ? 2 : 1} size={ticks_count} value={current_tick} />
        </div>
    );
};

ProgressTicksMobile.propTypes = {
    current_tick: PropTypes.number,
    ticks_count: PropTypes.number,
};

export default ProgressTicksMobile;
