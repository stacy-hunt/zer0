import React from 'react'

import TemplateAsset from './assets/wilder.jpg'

import styles from './AssetListTable.module.css'
import { FutureButton, IconButton, TextButton, SearchBar } from 'components'

import graph from './assets/graph.svg'
import grid from './assets/grid.svg'
import list from './assets/list.svg'

const AssetListTable = (props) => {

    return (
        <div 
            style={props.style}
            className={styles.tableContainer + ' border-primary border-rounded blur'}
        >
            <div className={styles.searchHeader}>
                <SearchBar style={{width: 884}} />
                <div className={styles.searchHeaderButtons}>
                    <IconButton toggleable={true} icon={list} style={{height: 32, width: 32}} />
                    <IconButton toggleable={true} icon={grid} style={{height: 32, width: 32}} />
                </div>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.left}>#</th>
                        <th className={styles.left}>Name</th>
                        <th className={styles.right}>24h</th>
                        <th className={styles.right}>7d</th>
                        <th className={styles.left}>Market Cap</th>
                        <th className={styles.right}>Volume</th>
                        <th className={styles.right}>Supply</th>
                        <th className={styles.right}>Last 7 Days</th>
                        <th className={styles.right}>Trade</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((asset, i) =>
                        <tr key={i}>
                            <td className={styles.left}>{i + 1}</td>
                            <td className={styles.left}>{asset.name} <span className={styles.ticker}>{asset.ticker}</span></td>
                            <td className={`${styles.right} ${asset.changeDay < 0 ? styles.negative : styles.positive}`}><span>{Math.abs(asset.changeDay.toFixed(2))}%</span><div></div></td>
                            <td className={`${styles.right} ${asset.changeWeek < 0 ? styles.negative : styles.positive}`}><span>{Math.abs(asset.changeWeek.toFixed(2))}%</span><div></div></td>
                            <td className={styles.right}>${asset.marketCap.toFixed(2)}</td>
                            <td className={styles.right}>${asset.volume.toFixed(2)}</td>
                            <td className={styles.right}>{asset.supply.toFixed(2)} {asset.ticker}</td>
                            <td className={styles.right} style={{padding: 0}}>{ /* <img style={{width: 148}} src={graph} /> */ }</td>
                            <td className={styles.right}><FutureButton>${asset.trade}</FutureButton></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
{/* <td style={{fontSize: 24}}>{i + 1}</td>
                    <td style={{fontSize: 24}}>{asset.name}</td>
                    <td style={{color: asset.changeDay < 0 ? '#BB6BD9' : '#56CCF2'}}>{asset.changeDay}%</td>
                    <td style={{color: asset.changeWeek < 0 ? '#BB6BD9' : '#56CCF2'}}>{asset.changeWeek}%</td>
                    <td>{'$' + asset.volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    <td>{'$' + asset.marketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    <td><img src={graph} /></td>
                    <td>{'$' + asset.trade.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td> */}
export default AssetListTable