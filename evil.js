
function Evil(){}

Evil.log = console.log;

Evil.pad = (typeof process !== 'undefined'?process.env.EVIL_PAD:false);

Evil.stack = (typeof process !== 'undefined'?process.env.EVIL_STACK:false);

Evil.pretty = (typeof process !== 'undefined'?process.env.EVIL_PRETTY:false);

Evil.bypass = (typeof process !== 'undefined'?process.env.NODE_ENV==='production':false);

Evil.go = function(title){

    var titleStr = '[DEBUG]\t:\t';
    if (title) {
        titleStr = '[' + title + ']\t:\t';
    }

    if(!Evil.bypass) {
        if (Evil.pad) {
            Evil.log(Evil.pad);
        }

        try {
            throw new Error();
        }
        catch (e) {

            try {
                var trace = e.stack.split('\n');

                if (typeof module !== 'undefined' && typeof require !== 'undefined') {

                    var fs = require('fs');

                    var mod = trace.slice(2, 3)[0];
                    mod = mod.substring(mod.indexOf('(') + 1, mod.indexOf(')'));

                    var fileLineCol = mod.split(':');
                    var file = fileLineCol[0];
                    var line = parseInt(fileLineCol[1]) - 1;

                    var value = this.valueOf();//call once incase theres something funky?
                    var valueOfEvilCaller = typeof value !== 'undefined' ? JSON.stringify(value, null, Evil.pretty ? 3 : 0) : value;

                    try {
                        var fileContent = fs.readFileSync(require.resolve(file), 'utf8');//ask require for the file path and load
                        Evil.log(titleStr + fileContent.split('\n')[line].split('').join('') + '\t : \t' + valueOfEvilCaller);
                    }
                    catch (e2) {
                        Evil.log(titleStr + valueOfEvilCaller);//just output the value without line code
                    }
                }

                if (Evil.stack) {
                    Evil.log(titleStr + '\n' + trace.slice(2).join('\n'));
                }
            }
            catch(e){
                Evil.log('[EVIL] : Failed' + '\n' + e.message + '\n' + e.stack);
            }
        }

        if (Evil.pad) {
            Evil.log(Evil.pad);
        }
    }
    return this;
};


Object.prototype.evil = Evil.go;

Number.prototype.evil = Evil.go;

Boolean.prototype.evil = Evil.go;

Array.prototype.evil = Evil.go;

String.prototype.evil = Evil.go;
