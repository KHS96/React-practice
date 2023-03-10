import React from 'react'

export default function RecommandProduct({item}) {
    return (
        <div>
            <div className="recommand-md-products">
                <h2></h2>
                <div className="recommand-product-list">

                    <div className="recommand-product-item">
                        <div className="recommand-product-item__img">
                            <img src={item.thumbnail} alt="23 SS 체리 밸류 로맨틱 텀블러 355ml"/>
                        </div>
                        <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">{item.name}</p>
                            <p className="item-price">
                                <span>{item.price}</span>원</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
