//////////////////////////////////////////////////////////////////////////////////////// - [ PRINTING TO THE HTML PAGE ]

(function () {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br /><br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

