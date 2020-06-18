

exports.setup = function() {

    this.input('dataIn');
    this.output('sendData');
    this.output('getData');

};

exports.initialize = function() {
     this.addInputHandler("dataIn", commPort.bind(this));

};


function commPort(){
    var data = this.get('dataIn');
    var self = this;

    document.getElementById("on").addEventListener("click", function(){ data.value = 1; self.send('sendData', data);});
    document.getElementById("off").addEventListener("click", function(){data.value = 0; self.send('sendData', data);});
    document.getElementById("getData").addEventListener("click", function(){ self.send('getData', data);});

}



