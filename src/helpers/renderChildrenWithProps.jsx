import React from 'react';

/**
 *
 * @param React.Component
 * @returns {*}
 */
function renderChildrenWithProps(component: React.Component) {
  return React.Children.map(component.props.children, (child) => {
    return React.cloneElement(child, childComponentProps);
  });
}

console.log(React.Component);

export default renderChildrenWithProps;
