import React, { useState } from 'react'

import styles from './FilterBar.module.css'

import { TextButton } from 'components'

const FilterBar = (props) => {

    const [ selected, setSelected ] = useState('Zero Networks')

    return(
        <div className={`${styles.FilterBar} blur`} style={props.style}>
            { props.children }
            <ul>
                { props.filters.map(filter => 
                    <li>
                    <TextButton 
                        onClick={() => setSelected(filter)}
                        selected={selected === filter}
                    >{filter}</TextButton></li>
                )}
            </ul>
        </div>
    )
}

export default FilterBar