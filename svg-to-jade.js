#!/usr/bin/env node
"use strict";

const SVGParser = require('./svg-parse');
const svgParser = new SVGParser('./images/test.svg');

svgParser
	.readFile()
	.then(() => {
		return svgParser.optimize();
	})
	.then(() => {
		console.log('svg',svgParser.getSVGString());
	});
