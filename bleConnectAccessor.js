exports.setup = function() {

    this.input('dataIn');

};

exports.initialize = function() {
     this.addInputHandler("dataIn", deviceConnect.bind(this));

};


function deviceConnect(){
    var device = this.get('dataIn');

}


