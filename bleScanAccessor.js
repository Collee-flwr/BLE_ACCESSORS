
exports.setup = function() {

    //establish outputs
    this.output("dataOut");

};

exports.initialize = function () {
        var self = this;
        var devices = {};

        function startScan (fn){
                evothings.ble.startScan(
                 // Eddystone Service UUID used as an example.
                 // Remove or set this parameter to null to scan for all
                 // devices regardless of advertised services.
                 //['0000FEAA-0000-1000-8000-00805F9B34FB'],
                 function(device)
                 {
                     //console.log('got device ' + device.name + ' ' + device.address)

                     // Update device data.
                     device.timeStamp = Date.now();
                     devices[device.address] = device
                     fn(devices);
                 },
                 function(error)
                 {
                     //console.log('BLE scan error: ' + error)
                 });

        }

        startScan(function(devices){
                 //document.querySelector('#found-devices').innerHTML = result.length;
                 self.send("dataOut", devices);
        });

};




