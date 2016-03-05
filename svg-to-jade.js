#!/usr/bin/env node
"use strict";

const SVGManager = require('./libs/svg-manager');
let sVGManager = new SVGManager('./images/test.svg');

sVGManager
	.readFile()
	.then(() => {
		return sVGManager.optimize();
	})
	.then(() => {
		console.log('svg', sVGManager.getSVGString());
	});
