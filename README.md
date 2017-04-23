# EvilJS - The Runtime Debugger for Lazy Developers
Sometimes using a full blown debugger is too much, or not possible, thats when its time to get EVIL!


[![npm version](https://badge.fury.io/js/evil-js.svg)](https://badge.fury.io/js/evil-js)
[![dependencies](https://david-dm.org/arupex/evil-js.svg)](http://github.com/arupex/evil-js)
![Build Status](https://api.travis-ci.org/arupex/evil-js.svg?branch=master) 
![lifetimeDownloadCount](https://img.shields.io/npm/dt/evil-js.svg?maxAge=2592000)
<a href='https://pledgie.com/campaigns/31873'><img alt='Pledge To Arupex!' src='https://pledgie.com/campaigns/31873.png?skin_name=chrome' border='0' ></a>


# Why Evil?

Theres a multitude of reasons evil-js is evil-js, and the primary method and object is "evil"
 
  - evil - is no a reserved word, and probably will never be used by anyone else
  - evil - is frankly a little evil, we've tried to make it as friendly and as "good" evil as possible, but its still adding a function to the prototype of core types, so its evil
   - evil - is not a word you use in your code, if you do, well your probably a super-villian, but it should be easy to search for any references to evil so you can remove them after debugging (evil does let you bypass evil so its ignored, but really shouldnt be letting that get to production)
   - evil - it sounded cool

# Hows it work?
    
    Evil does exactly what it sounds like, it does something EVIL, it adds a prototype function to Javascripts core Types
    Evil Supports!
    Object.prototype.evil
    Number.prototype.evil
    Boolean.prototype.evil
    Array.prototype.evil
    String.prototype.evil


# Install

    npm install evil-js --save
    
# Usage


    require('evil-js'); 
    //
    // write some code
    //
    let fred = { x : 0 };
    //
    // do some stuff, and need to debug fred, because your lost as hell
    // continue writing your code like usual! except use .evil() to access its value
    //
    if(fred.evil()){
        // do stuff
    }
    
Output :

    [DEBUG]	:	{"x":0}
    
    
# Advanced Usage

Evil.log = console.log;
    
    Lets you modify the logger, by default its set to console.log, but you can set it to any method that takes in a String
    
Evil.pad = (typeof process !== 'undefined'?process.env.EVIL_PAD:false);
    
    pre/post pad evil logs, defaults to false so it doesnt pad, but if you set to ' ' (truthy) it will for instance add an extra line before and after the logs
    
Evil.stack = (typeof process !== 'undefined'?process.env.EVIL_STACK:false);
    
    outputs the stack trace of the evil caller, (removes evils internal part of the stack)
    
Evil.pretty = (typeof process !== 'undefined'?process.env.EVIL_PRETTY:false);

    When evil outputs values it uses JSON.stringify(value, null, 0), pretty makes the 0 a 3
    
Evil.bypass = (typeof process !== 'undefined'?process.env.NODE_ENV==='production':false);

    stops evil from being completely evil, still adds evil function but removes all functionality
    
Feel free to override these values at any point either by changing the env vars or by assigning Evil[property]


# True Evil

    Evil is chainable?! well of course! it actually has to be

    var variable = { key : '7' };

    if(variable.evil('obj').key.evil('value')){
    
    }

# Output

    [obj]	:	if(variable.evil('obj').key.evil('value')){	 : 	{"key":"7"}
    [value]	:	if(variable.evil('obj').key.evil('value')){	 : 	"7"


# Labeling Evil
    Evil allows you to label calls
    obj.evil('my label')
    
    if you have Evil.filter set to an array it will only log ones whos label are contained in said array
    
    Evil.filter = ['safey'];
    
    obj.evil('yolo')
    
    obj.evil('safey')
    
Only safety will be debugged
