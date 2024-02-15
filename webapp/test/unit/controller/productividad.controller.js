/*global QUnit*/

sap.ui.define([
	"productividad/controller/productividad.controller"
], function (Controller) {
	"use strict";

	QUnit.module("productividad Controller");

	QUnit.test("I should test the productividad controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
