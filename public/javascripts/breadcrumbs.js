exports.get_breadcrumbs = function(url) {
  let rtn = [{name: "HOME", url: "/"}],
      acc = "", // accumulative url
      modifiedURL=url.slice(url.substring(1),url.indexOf('?'))
      arr = modifiedURL.substring(1).split("/");
      console.log(modifiedURL);
  for (i=0; i<arr.length; i++) {
    acc = i != arr.length-1 ? acc+"/"+arr[i] : null;
    rtn[i+1] = {name: arr[i].toUpperCase(), url: acc};
  }
  return rtn;
};