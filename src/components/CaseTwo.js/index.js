import React, { useEffect } from 'react'
import axios from "axios"
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getOffersTwo } from '../../redux/insurancesSlice';
const CaseTwo = () => {
    const offerList = useSelector(state => state.insurances.offersCaseTwo)
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://snetmyapp.herokuapp.com/case2')
            .then(response => dispatch(getOffersTwo(response.data.offerList)))

    }, [])

    /*  spinner while waiting for response */
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
