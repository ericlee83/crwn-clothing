import React from "react";
import { withRouter } from "react-router-dom";

import {MenuItemContainer, BackgroundImageContainer,ContentContainer,ContenTitle,ContentSubtitle} from './menu-item.style';
const MenuItem = ({ title, imageUrl, size, linkUrl, history,match }) => (
  <MenuItemContainer onClick={()=>history.push(`${match.url}${linkUrl}`)}
  size={size}>
    <BackgroundImageContainer
      className = 'background-image'
      imageUrl = {imageUrl} />
    <ContentContainer>
      <ContenTitle>{title.toUpperCase()}</ContenTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
