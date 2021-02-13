import React from 'react'

import breadcrumbStyles from '../styles/BreadCrumb.module.css'

const BreadCrumb = (props) => {

    return (
        <div className={breadcrumbStyles.breadcrumb}>
            <a className={breadcrumbStyles.crumb}>0::</a><a className={breadcrumbStyles.endpoint}>Wilderverse</a>
        </div>
    )
}

export default BreadCrumb