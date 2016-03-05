#!/usr/bin/env node
"use strict";

class SVGToJade {

	getSVGCode(file_path) {
		const SVGManager = require('./libs/svg-manager');
		let sVGManager = new SVGManager(file_path);

		return sVGManager
			.readFile()
			.then(() => {
				return sVGManager.optimize();
			})
			.then(() => {
				 return sVGManager.getSVGString();
			});
	}
}

module.export = SVGToJade;
