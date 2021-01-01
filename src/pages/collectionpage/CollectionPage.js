import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item";
import {CollectionPageContainer,CollectionTitleContainer,CollectionItemsContainer} from './CollectionPage.style'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitleContainer>{title}</CollectionTitleContainer>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownPros) => ({
  collection: selectCollection(ownPros.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
