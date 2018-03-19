var assert=require('assert');
var isdef = require('../');

var x={};
x.y={};
x.y.z={};
x.y.z.a=function(){};

assert (isdef(x, "y.z.a") !== undefined, "Test Failed!!")
assert (isdef(x, "y.z.a.m") === undefined, "Test Failed!!")


