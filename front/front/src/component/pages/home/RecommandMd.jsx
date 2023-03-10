import React, {useEffect, useState} from 'react'
import axios from 'axios'
import RecommandProduct from '../../ui/RecommandProduct'

export default function RecommandMd() {

    const baseUrl = "http://localhost:8080";
  
    const [productItem,setProcudtItem] = useState();

    useEffect(()=>{
        
        axios(`${baseUrl}/v1/api/event-products/1`).then((result)=>{
            console.log(result.data);
            setProcudtItem(result.data);
        })
    },[])


    return (
        <div>
            <section id="recommand-md-1">
                <div className="recommand-md-products">
                {/* <h2>{productItem.eventDescription}</h2> */}
                    <div className="recommand-product-list">
                        {
                            productItem && productItem.map((item,idx)=> (
                                <RecommandProduct 
                                key = {idx}
                                item = {item}
                                />
                            ))
                        } 
                        
                    </div> 
                </div>
            </section>
        </div>
    )
}
