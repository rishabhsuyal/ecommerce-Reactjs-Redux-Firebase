import ShopActionType from "./shop.types";

export const updateCollections=(collectionMap)=>({
    action:ShopActionType.UPDATE_COLLECTION,
    payload:collectionMap
});