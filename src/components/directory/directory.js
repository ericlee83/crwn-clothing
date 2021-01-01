import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item";
import { DirectoryMenuContainer } from "./directory.style";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
