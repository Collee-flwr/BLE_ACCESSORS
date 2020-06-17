var ledService = "19b10000-e8f2-537e-4f6c-d104768a1214";
var serviceType = "";

exports.setup = function() {

    this.input('dataIn');
    this.output('dataOut');
};

exports.initialize = function() {
     this.addInputHandler("dataIn", serviceHandler.bind(this));

};


function serviceHandler(){
    var device = this.get('dataIn');
    var self = this;

          function getServices(fn){
          evothings.ble.readAllServiceData(
                    device,
                    function(services){
                        fn(services);
                    },
                    function(errorCode){
                            console.log('Services error: ' + errorCode);
                    });
           }

    getServices(function(services){
       var data = {
             "device": device,
             "service": null

       };

       for (var index in services){
            var service = services[index];
            if (service.uuid == ledService);
                     data.service = service;

       }
        self.send('dataOut', data);


    });

}


