import React from 'react';

/**
 *
 * @param React.Component
 * @returns {*}
 */
function renderChildrenWithProps(component) {
  return React.Children.map(component.props.children, (child) => {
    let newComponentProps = component.props;
    let newComponentChildren = React.Children
      .toArray(newComponentProps.children)[0].props.children;

    return React.cloneElement(child, newComponentProps, newComponentChildren);
  });
}

export default renderChildrenWithProps;
