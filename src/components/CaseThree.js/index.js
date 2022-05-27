import React, { useEffect } from 'react'
import axios from "axios"
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getCount, getOffersThree, getSortOffers } from '../../redux/insurancesSlice';
const CaseThree = () => {
    const offerList = useSelector(state => state.insurances.offersCaseThree)
    const sortOfferList = useSelector(state => state.insurances.sortOffers)
    const offerCount = useSelector(state => state.insurances.offerCount)

    const dispatch = useDispatch();

    /* provide count insurance offers */
    useEffect(() => {
        axios.get('https://snetmyapp.herokuapp.com/get_offer_count')
            .then((responses) => dispatch(getCount(responses.data.num_offers)))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        fetchData()
    }, [offerCount])

    /* offers are sorted by price in ascending order  */

    useEffect(() => {
        dispatch(getSortOffers())
    }, [offerList])

    /* N times to fetch individual offers */
    const fetchData = async () => {
        const offerURL = 'https://snetmyapp.herokuapp.com/case3';

        for (let i = 0; i < offerCount; i++) {
            const response = await axios.get(offerURL)
            dispatch(getOffersThree(response.data))
        }
    }


    /* spinner while waiting for response */

    if (offerList.length === 0) {
        return (
            <div className="container">
                {
                    offerCount && <div className="OfferInfo">{`Sizin için ${offerCount} tane sigorta teklifleri sağlayabiliyoruz.Lütfen bekleyiniz.`}</div>
                }

                <Loading />
            </div>
        )
    }

    return (
        <div className="container">
            {
                offerCount && <div className="OfferInfo">{`Sizin için ${offerCount} tane sigorta teklifleri sağlayabiliyoruz.Lütfen bekleyiniz.`}</div>
            }
            {
                sortOfferList.length > 0 && sortOfferList.map((offer, index) => (

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

