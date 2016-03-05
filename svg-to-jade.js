#!/usr/bin/env node
"use strict";
import SVGManager from './libs/svg-manager';

class SVGToJade {

	getSVGCode(file_path) {
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
