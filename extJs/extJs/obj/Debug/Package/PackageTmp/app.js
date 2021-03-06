﻿var baseRESTAddress = 'http://192.168.1.200/tmmc_agv_web/Api/';

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'tags',
    requires: ['tags.view.MainView'],
    stores: [
        'zonestore',
        'routestore',
        'plcstore',
        'routestore'
    ],
    models:[
        'plc'
    ],
    views:[
        'Routes',
        'Zones',
        'Agvs',
        'PLCs',
        'PLCDataPackets'
    ],

    launch: function() {
        Ext.create('tags.view.MainView');
    }
});