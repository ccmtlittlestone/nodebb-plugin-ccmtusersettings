(function(module){
	"use strict";
	var controllers = require('./lib/controllers'),
	db = module.parent.require('../src/database');
	var	plugin = {};

	// plugin.init = function(params, callback) {
	// 	var router = params.router,
	// 		hostMiddleware = params.middleware,
	// 		hostControllers = params.controllers;
    //
	// 	router.get('/admin/plugins/usersettings', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	// 	router.get('/api/admin/plugins/usersettings', controllers.renderAdminPage);
	// 	router.get("/api/plugins/usersettings",controllers.loadSettings);
    //
	// 	callback();
	// };
    //
	// plugin.addAdminNavigation = function(header, callback) {
	// 	header.plugins.push({
	// 		route: '/plugins/usersettings',
	// 		icon: 'fa-bar-chart-o',
	// 		name: 'Usersettings'
	// 	});
    //
	// 	callback(null, header);
	// };

	plugin.set=function(user_massege){
	  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	  var uid=user_massege.uid;
	  var settings={
	    sendChatNotifications: 1,
	    sendPostNotifications: 1,
	    dailyDigestFreq:'week'
	  };
	  db.setObject('user:' + uid + ':settings', settings);
	}

	module.exports = plugin;
}(module))
