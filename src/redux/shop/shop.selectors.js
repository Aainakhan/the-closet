import {  createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;


export const selectShopSection = createSelector(
 [selectShop],
 shop => shop.shop
)
export const SelectCollection = memoize((collectionUrlParam) => createSelector(
 [selectShopSection],
 collections => collections[collectionUrlParam]
)
);

export const SelectCollectionForPreview = createSelector(
 [selectShopSection],
 collections => Object.keys(collections).map(key => collections[key])
 
)