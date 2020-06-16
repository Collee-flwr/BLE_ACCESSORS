exports.setup = function() {

    this.input('dataIn');

};

exports.initialize = function() {
     this.addInputHandler("dataIn", deviceConnect.bind(this));

};


function deviceConnect(){
    var device = this.get('dataIn');
        evothings.ble.connectToDevice(
              device,
              function(device){
                //console.log('Connected to device: ' + device.name);
                document.querySelector('#found-devices').innerHTML = 'Connected to device: ' + device.name;
              },
              function(device){
                console.log('Disconnected from device: ' + device.name);
              },
              function(errorCode){
                console.log('Connect error: ' + errorCode);
        });
}
