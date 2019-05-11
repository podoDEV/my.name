import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

import {changeSocialLinkOrder} from '../action/register';

const SortableItem = SortableElement(({value}) => (
  <div className="register__social__link__item">
    <p>{value}</p>
  </div>
));

const SortableList = SortableContainer(({socialLinks}) => {
  return (
    <div className="register__social__link__list">
      {socialLinks.map((link, index) => (
        <SortableItem value={link} key={`link-${index}`} index={index} />
      ))}
    </div>
  );
});

class SocialLinkList extends React.Component {
  static propTypes = {
    socialLinks: PropTypes.array,
    changeSocialLinkOrder: PropTypes.func.isRequired
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.props.changeSocialLinkOrder(oldIndex, newIndex);
  };

  render() {
    const {socialLinks} = this.props;

    return (
      <SortableList
        socialLinks={socialLinks}
        onSortEnd={this.onSortEnd}
        helperClass="register__social__link__item--move"
      />
    );
  }
}

const mapStateToProps = (state) => {
  const {socialLinks} = state.register;

  return {
    socialLinks
  };
};

const mapDispatchToProps = {
  changeSocialLinkOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialLinkList);
