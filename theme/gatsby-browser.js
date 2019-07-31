exports.onRouteUpdate = () => {
  var divWrapper = (function() {
    var div = document.createElement('div')

    return function(el, cls) {
      var oDiv = div.cloneNode(false)
      oDiv.className = cls
      el.parentNode.insertBefore(oDiv, el)
      oDiv.appendChild(el)
    }
  }())
  
  function wrapTable(className) {
    var els = document.querySelectorAll('table')
    for (let i = 0; i < els.length; i++) {
      divWrapper(els[i], className)
    }
  }
  
  wrapTable('table-wrapper')
}