import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loading from '../Loading';
const CaseTwo = () => {
    const [offerList, setOfferList] = useState([]);

    useEffect(() => {
        axios.get('https://snetmyapp.herokuapp.com/case2')
            .then(response => setOfferList(response.data.offerList))

    }, [])
    console.log(offerList)
    if (offerList.length === 0) {
        return <Loading />
    }
    return (
        <div className="container">

            {
                offerList.length > 0 && offerList.map((offer, index) => (

                    <div className="card" key={index}>
                        <div className="card-left">
                            <div className="card-left-image">
                                <img src={offer.ImagePath} alt="ImagePath" />
                            </div>
                            <div className="card-left-info">
                                <div className="card-left-info-description">{offer.ProductDesc}</div>
                                <div className="card-left-info-firmName">{offer.FirmName}</div>
                            </div>
                        </div>
                        <div className="card-right">
                            <div className="card-right-info">
                                {
                                    offer.QuotaInfo.HasDiscount === true ?
                                        <>
                                            <div className="card-right-info-cash">Peşin <span>{offer.Cash} TL</span></div>
                                            <div className="card-right-info-discount">{offer.QuotaInfo.PremiumWithDiscount} TL</div>
                                        </>
                                        :
                                        <div className="card-right-info-cash-discountFalse">{offer.Cash} TL</div>
                                }
                            </div>
                            <div className="card-right-button">
                                <button className="card-right-button-click">SATIN AL</button>

                            </div>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default CaseTwo
