import React from 'react'
import list from '../../data/list'

const Shop = () => {
  return (
    <section>
        {
            list.map((items) => {
                console.log(items)
            })
        }
    </section>
  )
}

export default Shop