import 'es6-promise/auto';
import fetch from 'unfetch';

// This does not work
import 'systemjs/dist/system.js';
import 'systemjs/dist/extras/amd.js';
import 'systemjs/dist/extras/named-exports.js';
import 'systemjs/dist/extras/named-register.js';
import 'systemjs/dist/extras/transform.js';

// This works
/*
import 'script-loader!../../node_modules/systemjs/dist/system.js';
import 'script-loader!../../node_modules/systemjs/dist/extras/amd.js';
import 'script-loader!../../node_modules/systemjs/dist/extras/named-exports.js';
import 'script-loader!../../node_modules/systemjs/dist/extras/named-register.js';
import 'script-loader!../../node_modules/systemjs/dist/extras/transform.js';
*/

(function(){
    document.addEventListener('DOMContentLoaded', function() {
        System.import('/demo/app.js').then(function(){
            System.import('/demo/test.js').then(function(){
                console.log('Bootstrap completed');
            });
        });
    });
})();