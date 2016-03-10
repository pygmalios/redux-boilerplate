/**
 * Creates new test selector, in production settings returns none
 */
function getTestSelector(selector) {

  if(CONFIG.HAS_TEST_SELECTORS)
    return {'data-e2e-test': selector};

  return {};
};

export default getTestSelector;
