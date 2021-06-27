exports.get_breadcrumbs = function(req, res, next) {
  
  const breadcrumbs = function(url) {
    const urlPieces = [{name: "HOME", url: "/"}];
    let acc = ""; // accumulative url
    const arr = url.substring(1).split("/");
    

    for (i=0; i<arr.length; i++) {
        acc = i != arr.length-1 ? acc+"/"+arr[i] : null;
        urlPieces[i+1] = {name: arr[i].toUpperCase(), url: acc};
    }
    urlPieces.forEach((piece)=>{
      let name = piece.name;
      if(name.includes('%20') || name.includes('?')){
        name=name.split('%20').join('-');
        piece.name=name.slice(0, name.indexOf('?'))
      }
    })
    return urlPieces;
};
  res.locals.breadcrumbs = breadcrumbs(req.originalUrl);
  next();
};


// I need the url to create the breadcrumbs for
// 