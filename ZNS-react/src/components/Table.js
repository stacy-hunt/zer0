import React from 'react'

import TemplateAsset from '../assets/wilder.jpg'

import AssetTableStyles from '../styles/AssetTable.module.css'
import ButtonStyles from '../styles/Button.module.css'

import graph from '../assets/graph.svg'

const Table = (props) => {

    return (
        <table className={AssetTableStyles.table + ' purpleBackground blur'}>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th>Volume</th>
                <th>24h</th>
                <th>7d</th>
                <th>Market Cap</th>
                <th>Last 7 Days</th>
                <th>Trade</th>
            </tr>
            {props.data.map((asset, i) =>
                <tr>
                    <td style={{fontSize: 24}}>{i + 1}</td>
                    <td><div style={{backgroundImage: `url(${TemplateAsset})`}} className={AssetTableStyles.asset}></div></td>
                    <td style={{fontSize: 24}}>{asset.name}</td>
                    <td>{'$' + asset.volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    <td style={{color: asset.changeDay < 0 ? '#BB6BD9' : '#56CCF2'}}>{asset.changeDay}%</td>
                    <td style={{color: asset.changeWeek < 0 ? '#BB6BD9' : '#56CCF2'}}>{asset.changeWeek}%</td>
                    <td>{'$' + asset.marketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    <td><img src={graph} /></td>
                    <td><button style={{width: 174, fontSize: 18, paddingTop: 4}} className={ButtonStyles.accept}>{'$' + asset.trade.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</button></td>
                </tr>
            )}
        </table>
    )
}

export default Table