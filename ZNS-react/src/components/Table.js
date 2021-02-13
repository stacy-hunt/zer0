import React from 'react'

import TemplateAsset from '../assets/wilder.jpg'

import AssetTableStyles from '../styles/AssetTable.module.css'
import ButtonStyles from '../styles/Button.module.css'

const Table = (props) => {

    return (
        <table className={AssetTableStyles.table}>
            <tr>
                <th>#</th>
                <th>Asset</th>
                <th>Name</th>
                <th>Volume</th>
                <th>24h</th>
                <th>7d</th>
                <th>Market Cap</th>
                <th>Last 7 Days</th>
                <th>Trade</th>
            </tr>
            {props.data.map((asset, i) =>
                <tr>
                    <td>{i}</td>
                    <td><div style={{backgroundImage: `url(${TemplateAsset})`}} className={AssetTableStyles.asset}></div></td>
                    <td>{asset.name}</td>
                    <td>{'$' + asset.volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    <td style={{color: asset.changeDay < 0 ? '#f45d64' : '#78d0f8'}}>{asset.changeDay}%</td>
                    <td style={{color: asset.changeWeek < 0 ? '#f45d64' : '#78d0f8'}}>{asset.changeWeek}%</td>
                    <td>{'$' + asset.marketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    <td>[GRAPH HERE]</td>
                    <td><button className={ButtonStyles.trade}>{'$' + asset.trade.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</button></td>
                </tr>
            )}
        </table>
    )
}

export default Table