import { createSlice } from '@reduxjs/toolkit'

export const insurancesSlice = createSlice({
    name: 'insurances',
    initialState: {
        offersCaseOne: [],
        offersCaseTwo: [],
        offersCaseThree: [],
        sortOffers: [],
        offerCount: null
    },
    reducers: {
        getOffersOne: (state, action) => {
            state.offersCaseThree = []
            state.offersCaseTwo = []
            state.offerCount = null
            state.offersCaseOne = action.payload
        },
        getOffersTwo: (state, action) => {
            state.offersCaseThree = []
            state.offerCount = null
            state.offersCaseTwo = action.payload

        }, getOffersThree: (state, action) => {
            state.offersCaseThree.push(action.payload)

        }, getCount: (state, action) => {
            state.offersCaseThree = []
            state.offersCaseTwo = []
            state.offerCount = action.payload
        },
        getSortOffers: (state) => {
            state.sortOffers = state.offersCaseThree.slice()
            state.sortOffers.length > 0
                && state.sortOffers.sort(function (a, b) {
                    return (
                        (a.QuotaInfo.HasDiscount === true ? a.QuotaInfo.PremiumWithDiscount : a.Cash)
                        - (b.QuotaInfo.HasDiscount === true ? b.QuotaInfo.PremiumWithDiscount : b.Cash)
                    )
                })

        }

    },
})

// Action creators are generated for each case reducer function
export const { getOffersOne, getOffersTwo, getOffersThree, getCount, getSortOffers } = insurancesSlice.actions

export default insurancesSlice.reducer