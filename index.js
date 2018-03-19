module.exports = function isdefined(obj, path) {
  if (!obj){
    return false;
  }
  var s=obj;
  var ary=path.split('.')
  var i=0;
  while(1){
    var a=ary[i];
    if(s[a]){
      if(i===ary.length-1)
        return s[a];
      else
        s=s[a];
    }
    else{
      return undefined;
    }
    ++i;
  }
}

