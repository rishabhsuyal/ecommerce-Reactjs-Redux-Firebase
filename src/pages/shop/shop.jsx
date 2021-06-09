import React,{ useEffect } from 'react';
import CollectionPage from "../collection/collection-page";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import { Route } from "react-router-dom";
import {firestore, convertCollectionsToMap} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import { updateCollections } from "../../redux/shop/shop.action";

function Shop({ match }) {

    useEffect(() => {
        const collectionRef=firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot=>{
            const collectionMap=convertCollectionsToMap(snapshot);
            updateCollections(collectionMap);
        })
      }, []);



    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    updateCollections:(collectionMap)=>dispatch(updateCollections(collectionMap))
});
export default connect(null,mapDispatchToProps)(Shop);
