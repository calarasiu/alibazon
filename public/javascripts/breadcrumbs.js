exports.get_breadcrumbs = function(url) {
  let rtn = [{name: "HOME", url: "/"}],
      acc = "", // accumulative url
      modifiedURL=url.slice(url.substring(1),url.indexOf('?'))
      arr = modifiedURL.substring(1).split("/");
<<<<<<< HEAD
=======
      console.log(modifiedURL);
>>>>>>> parent of 3990648... Revert "change the url for the breadcrumbs"
  for (i=0; i<arr.length; i++) {
    acc = i != arr.length-1 ? acc+"/"+arr[i] : null;
    rtn[i+1] = {name: arr[i].toUpperCase(), url: acc};
  }
  return rtn;
};