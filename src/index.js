
exports.min = function min (array) {
  if(array === undefined || array.length === 0)
    {
        return 0;
    }

    let buf = array[0];
    for(let i = 1; i < array.length; i++ )
    {
        if(buf > array[i])
            buf = array[i];
    }
    return buf;
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0)
    {
        return 0;
    }

    let buf = array[0];
    for(let i = 1; i < array.length; i++ )
    {
        if(buf < array[i])
            buf = array[i];
    }
    return buf;
}

exports.avg = function avg (array) {

  if(array === undefined || array.length === 0)
    {
        return 0;
    }
    let buf = array[0];
    for(let i = 1; i < array.length; i++ )
    {
            buf += array[i];
    }
    return buf/array.length;
}
