import React from 'react'
import Grid from '../Grid'
import styles from './products.module.css'
import Filter from '../Filter'

const Products = () => {
  return (
    <div className={styles.products}>
        <Filter/>
        <Grid/>
        </div>
  )
}

export default Products