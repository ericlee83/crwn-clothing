import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../collectionpage/CollectionPage";
import WithSpinner from "../../components/with-spinner/with-spinner";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    //crwn-db-8d5fa
    //https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/
    // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-8d5fa/databases/(default)/documents/collections')
    // .then(response => response.json())
    // .then(collections => console.log(collections));

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });}
      );

    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const { match } = this.props;
    const {loading} = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props)=>(<CollectionsOverviewWithSpinner isLoading={loading} {...props}/>)}/>
        <Route
          path={`${match.path}/:collectionId`}
          render={(props=>(<CollectionPageWithSpinner isLoading={loading} {...props}/>))}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
