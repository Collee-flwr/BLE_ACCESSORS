// Cordova host swarmlet test
//
// Copyright (c) 2016-2017 The Regents of the University of California.
// All rights reserved.
//
// Permission is hereby granted, without written agreement and without
// license or royalty fees, to use, copy, modify, and distribute this
// software and its documentation for any purpose, provided that the above
// copyright notice and the following two paragraphs appear in all copies
// of this software.
//
// IN NO EVENT SHALL THE UNIVERSITY OF CALIFORNIA BE LIABLE TO ANY PARTY
// FOR DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES
// ARISING OUT OF THE USE OF THIS SOFTWARE AND ITS DOCUMENTATION, EVEN IF
// THE UNIVERSITY OF CALIFORNIA HAS BEEN ADVISED OF THE POSSIBILITY OF
// SUCH DAMAGE.
//
// THE UNIVERSITY OF CALIFORNIA SPECIFICALLY DISCLAIMS ANY WARRANTIES,
// INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE SOFTWARE
// PROVIDED HEREUNDER IS ON AN "AS IS" BASIS, AND THE UNIVERSITY OF
// CALIFORNIA HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES,
// ENHANCEMENTS, OR MODIFICATIONS.
//

/** This "swarmlet" example, running on Cordova, illustrates the use of Cordova
 *  Host to run a swarmlet. The swarmlet loads loads a 'TestSpontaneousOnce' and 
 *  a 'Hello' accessors, initializes them, and connect them
 *  
 *  See https://www.icyphy.org/accessors/wiki/Main/CordovaHost2
 *  
 *  @module swarmlet.js
 *  @author Victor Nouvellet
 *  @version $$Id: swarmlet.js 1502 2017-04-17 21:34:03Z cxh $$
 */



exports.setup = function() {




    var bleScan = this.instantiate('bleScan', 'bleAccessorLibrary/bleScanAccessor');

    //var dataDisplay = this.instantiate('dataDisplay', 'bleAccessorLibrary/DeviceDisplayAccessor');

    var bleConnect = this.instantiate('bleConnect', 'bleAccessorLibrary/bleConnectAccessor');
    var config = this. instantiate('deviceServices', 'bleAccessorLibrary/bleConfigAccessor');
    var commPort = this. instantiate('commPort', 'bleAccessorLibrary/bleCommPortAccessor');
    var sendData = this.instantiate('sendData', 'bleAccessorLibrary/bleSendDataAccessor');
    var getData = this.instantiate('sendData', 'bleAccessorLibrary/bleGetDataAccessor');

//     //Ryan's headache
//     this.connect(bleScan, 'dataOut', dataDisplay, 'dataIn');

    this.connect(bleScan, 'dataOut', bleConnect, 'dataIn');
    this.connect(bleConnect, 'dataOut', config, 'dataIn');
    this.connect(config, 'dataOut', commPort, 'dataIn');

    //Set up commPort to send data to ble device
    this.connect(commPort, 'sendData', sendData, 'dataIn');
    //Set up commPort to get data from ble device
    this.connect(commPort, 'getData', getData, 'dataIn');

};

exports.initialize = function () {

};

