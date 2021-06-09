import React from 'react';
import PreviewCollection from "../preview-collection/preview-collection";
import { connect } from "react-redux";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";
import {createStructuredSelector} from "reselect"
import "./collection-overview.scss";

function CollectionOverview({collections}) {
    return (
        <div className="collection-overview">
            {
                collections.map(({id, ...otherCollectionProps})=>(
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);
