/**
 *
 * @param React.Component
 * @returns {*}
 */
function renderChildrenWithProps(component) {
  return React.Children.map(component.props.children, (child) => {
    const newComponentProps = component.props;
    const newComponentChildren = React.Children
      .toArray(newComponentProps.children)[0].props.children;

    return React.cloneElement(child, newComponentProps, newComponentChildren);
  });
}

export default renderChildrenWithProps;
