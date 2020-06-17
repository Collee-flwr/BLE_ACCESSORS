

exports.setup = function() {

    this.input('dataIn');

};

exports.initialize = function() {
     this.addInputHandler("dataIn", getCharacteristics.bind(this));



};


function getCharacteristics(){
    var data = this.get('dataIn');
    var device = data.device;
    var service = data.service;
    //var value = 0;
    document.getElementById("on").addEventListener("click", function(){write(device, service.characteristics[0], 1);});
    document.getElementById("off").addEventListener("click", function(){write(device, service.characteristics[0], 0);});
//    for (var index in service.characteristics)
//    {
//         var characteristic = service.characteristics[index];
//         write(device, characteristic, value);

//         evothings.ble.readCharacteristic(
//               device,
//               characteristic,
//               function(data)
//               {
//                 var buff = new Uint8Array(data);
//                 document.querySelector('#found-devices').innerHTML = 'characteristic data: ' + buff[0];
//               },
//               function(errorCode)
//               {
//                 console.log('readCharacteristic error: ' + errorCode);
//               });





         //document.querySelector('#found-devices').innerHTML = device.name + " " + characteristic.uuid;
//    }





}
function clicked(device, characteristic, value)
{
        document.querySelector('#found-devices').innerHTML = device.name + ' ' + characteristic.uuid + ' ' + value;
}
function write(device, characteristic, value){

        evothings.ble.writeCharacteristic(
                 device,
                 characteristic,
                 new Uint8Array([value]),

                 function()
                 {
                    document.querySelector('#found-devices').innerHTML = 'characteristic value written: ' + value;
                 },
                 function(errorCode)
                 {
                   console.log('writeCharacteristic error: ' + errorCode);
                 });

}
