# isdef

This is simple javascript utiity to check if object property is defined. This is to save lengthy check and to avoid error.

## Usage

```
var assert=require('assert');
var isdef = require('isdef');

var x={};
x.y={};
x.y.z={};
x.y.z.a=1;

assert (isdef(x, "y.z.a") !== undefined, "Test Failed!!")
assert (isdef(x, "y.z.a.m") === undefined, "Test Failed!!")

```

In above example, to protect code for undesirable exception, you would write code like

```
if ( x && x.y && x.y.z && x.y.z.a ){
  // use x.y.z.a 
}
```

Instead, you can write simply

```
if ( isdef(x, 'y.z.a') ){
  // safely use x.y.z.a
}
```

