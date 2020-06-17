exports.setup = function() {

    this.input('dataIn');
    this.output('dataOut');

};

exports.initialize = function() {
     this.addInputHandler("dataIn", deviceConnect.bind(this));

};


function deviceConnect(){
    var device = this.get('dataIn');
    var self = this;

    function connect(device, fn){
        evothings.ble.connectToDevice(
              device,
              function(device){
                //console.log('Connected to device: ' + device.name);
                document.querySelector('#found-devices').innerHTML = 'Connected to device: ' + device.name;
                connectedDevice = device;
                fn(connectedDevice);
              },
              function(device){
                console.log('Disconnected from device: ' + device.name);
              },
              function(errorCode){
                console.log('Connect error: ' + errorCode);
        });

    }
    connect(device, function(device)
    {
            self.send('dataOut', device);
    });

}


