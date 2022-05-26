import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loading from '../Loading';
const CaseThree = () => {
    const [offerList, setOfferList] = useState([]);
    const [offerCount, setOfferCount] = useState();



    useEffect(() => {
        axios.get('https://snetmyapp.herokuapp.com/get_offer_count')
            .then(res => setOfferCount(res.data.num_offers))
            .catch(err => { console.log(err) })
        fetchData()
    }, [])
    let allOfferRequest = []
    const fetchData = async () => {

        const offerURL = 'https://snetmyapp.herokuapp.com/case3';
        for (let i = 0; i < offerCount; i++) {
            const response = await axios.get(offerURL);
            setOfferList(response.data)
            console.log(offerList)
        }

        //setOfferList(allOfferRequest)
        console.log(allOfferRequest)


    }

    if (offerList.length === 0) {
        return (
            <>
                {
                    offerCount && <div>{`Sizin için ${offerCount} tane sigorta teklifleri sağlayabiliyoruz`}</div>
                }

                <Loading />
            </>
        )
    }

    console.log(offerList)


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

export default CaseThree

