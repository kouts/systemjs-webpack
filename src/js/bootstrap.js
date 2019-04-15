import 'es6-promise/auto';
import fetch from 'unfetch';

import 'script-loader!../../../node_modules/systemjs/dist/system.min.js';
import 'script-loader!../../../node_modules/systemjs/dist/extras/amd.min.js';
import 'script-loader!../../../node_modules/systemjs/dist/extras/named-exports.min.js';
import 'script-loader!../../../node_modules/systemjs/dist/extras/named-register.min.js';
import 'script-loader!../../../node_modules/systemjs/dist/extras/transform.min.js';

(function(){

    var is_local = location.hostname.split('.').pop() === 'test';
    var baseURL = is_local ? '' : '/sap/bc/bsp/improesb/public/test4';
    
    document.addEventListener('DOMContentLoaded', function() {
        System.import(baseURL+'/dist/js/vendors.bundle.js').then(function(){
            System.import(baseURL+'/dist/js/main.bundle.js').then(function(){
                console.log('Bootstrap completed');
            });
        });
    });

})();