"use strict";

class SVGParser {

	constructor(svg_file_path) {
		this.svg_file_path = svg_file_path;
		this.svg_string = "";
	}

	readFile() {
		const fs = require('fs');
		const _self = this;

		return new Promise((resolve, reject) => {
			fs.readFile(this.svg_file_path, 'utf8', (err, data) => {
				if (err) {
					throw err;
				}
				_self.svg_file_content = data;
				resolve();
			});
		});
	}

	optimize() {
		const SVGO = require('svgo');
		const svgo = new SVGO();
		const _self = this;
		const content = this.svg_file_content;

		svgo.optimize(content, (svg_string) => {
			_self.svg_string = svg_string.data;
		});
	}

	getSVGString() {
		return this.svg_string;
	}

}

module.exports = SVGParser;
