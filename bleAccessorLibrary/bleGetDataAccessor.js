

exports.setup = function() {

    this.input('dataIn');

};

exports.initialize = function() {
     this.addInputHandler("dataIn", getData.bind(this));


};


function getData(){
    var data = this.get('dataIn');
    var device = data.device;
    var service = data.service;
    var characteristic = data.characteristics[0];

    function get(fn){
         evothings.ble.readCharacteristic(
               device,
               characteristic,
               function(data)
               {
                 var buff = new Uint8Array(data);
                 var cleanedData = buff[0];
                 fn(cleanedData);
               },
               function(errorCode)
               {
                 console.log('readCharacteristic error: ' + errorCode);
               });
    }
    get(function(cleanedData){

        if (cleanedData == 1)
            document.querySelector('#found-devices').innerHTML = 'LED LIGHT IS ON';
        else
            document.querySelector('#found-devices').innerHTML = 'LED LIGHT IS OFF';
    });

}






