exports.setup = function() {

    this.input('dataIn');
    this.output('dataOut');
};

exports.initialize = function() {
     this.addInputHandler("dataIn", displayHandler.bind(this));

};

function displayHandler() {
    var devices = this.get("dataIn");
    var timer = null;


    timer = setInterval(displayDevices(devices), 1000);

}

function displayDevices(devices){

    var timeNow = Date.now();
    		for (var key in devices)
    		{
    			// Only show devices updated during the last 30 seconds.
    			var device = devices[key];
    			if (device.timeStamp + 30000 < timeNow)
    			{
    				delete devices[key];
    			}
    		}

    var html = '';
     for (var key in devices)
        {

            var device = devices[key];
            var name = device.name || 'no name';

          html += '<p>' + '<strong>' + name + '</strong><br/>' + device.address + '</p>';
        }
         document.querySelector('#found-devices').innerHTML = html ;

}