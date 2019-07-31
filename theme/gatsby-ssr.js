exports.onPreRenderHTML = ({ pathname, getHeadComponents, replaceHeadComponents, replacePostBodyComponents }) => {
  const regex = new RegExp(/\.(js|json)$/)
  let headComponents = getHeadComponents()

  if (pathname === '/') {
    headComponents = headComponents.filter(comp => !regex.test(comp.key))

    replaceHeadComponents(headComponents)
    replacePostBodyComponents([])
  }
}