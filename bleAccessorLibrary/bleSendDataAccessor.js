

exports.setup = function() {

    this.input('dataIn');

};

exports.initialize = function() {
     this.addInputHandler("dataIn", writeCharacteristics.bind(this));


};


function writeCharacteristics(){
    var data = this.get('dataIn');
    var device = data.device;
    var service = data.service;
    var characteristic = data.characteristics[0];
    var value = data.value;

     evothings.ble.writeCharacteristic(
                     device,
                     characteristic,
                     new Uint8Array([value]),

                     function()
                     {
                        //document.querySelector('#found-devices').innerHTML = 'characteristic value written: ' + value;
                     },
                     function(errorCode)
                     {
                       console.log('writeCharacteristic error: ' + errorCode);
                     });

}
