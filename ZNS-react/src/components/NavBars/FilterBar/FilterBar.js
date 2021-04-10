import React from 'react'

import styles from './FilterBar.module.css'

import { TextButton } from 'components'

const FilterBar = (props) => {

    return(
        <div className={`${styles.FilterBar} blur`} style={props.style}>
            { props.children }
            <ul>
                { props.filters.map(filter => 
                    <li><TextButton toggleable={true}>{filter}</TextButton></li>
                )}
            </ul>
        </div>
    )
}

export default FilterBar