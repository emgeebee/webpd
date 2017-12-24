var komponist = require('komponist');

window.komponistInit = function (cb) {
    return komponist.createConnection('http://localhost:9000/komponist', cb);
}
