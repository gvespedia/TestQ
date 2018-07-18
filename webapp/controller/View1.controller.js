sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller"
	//	"com/demo/test/TestQ/utils/qModule"
], function (jQuery, Controller) {
	"use strict";

	return Controller.extend("com.demo.test.TestQ.controller.View1", {

		onInit: function () {
			jQuery.sap.require("com.demo.test.TestQ.utils.q");
			this._Q = Q;
		},

		showPopup: function () {
			this.returnPromise().then(
				function (text) {
					sap.m.MessageToast.show(text);
				},
				function (error) {
					sap.m.MessageToast.show(error);
				}
			)
		},

		returnPromise: function () {
			this.defer = this._Q.defer();
			sap.m.MessageToast.show("Promise Created");
			return this.defer.promise;
		},

		onResolve: function () {
			this.defer.resolve("HURRAA");
		},

		onReject: function () {
			this.defer.reject("NOOOOOO");
		}
	});
});