import React, { useEffect, useState } from 'react'
import { useShopify } from '../hooks'
import ProductCard from '../snippets/ProductCard'

const Section7 = (props) => {

    const [sectionProducts, setSectionProducts] = useState([])
    const { fetchCollectionProducts } = useShopify()
    const id = props.collection_id
    useEffect(() => {
      fetchCollectionProducts(id).then((res) => {
        setSectionProducts(res)
      })
    }, [id])

  return (

<center>
<div style={{padding:'80px', width:'100%',height:'auto', backgroundColor:'#fff0e9', alignSelf:'center' }}>
    <>
    <div>
        <p style={{fontSize:'24px', fontWeight:'500'}}>GOT PLANS TONIGHT?</p>
    </div>
    <div  style={{display:"flex" , justifyContent:'space-between'}}>
    {sectionProducts.slice(0, 10).map((product, i) => {
              return (
                <div className="col-2 col-md-4 col-xl-3 col-xxl-25" key={product.id} >
    <ProductCard
     key={product.id}
     {...product}
    />
   
    </div>
       )
    })}
    </div>
    </>
</div>
</center>

    
  )
}

export default Section7