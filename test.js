/**
 * Created by daniel.irwin on 4/20/17.
 */

//sometimes evil is a necesity
require('./evil');

Evil.filter = ['obj'];


var bob = 7;

var gary = {};

gary.l = 7;

gary.evil()

gary.l.evil();

bob.evil();

var variable = { key : '7' };

if(variable.evil('obj').key.evil('value')){

}