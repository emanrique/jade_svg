"use strict";

class SVGManager {

	constructor(svg_file_path) {
		this.svg_file_path = svg_file_path;
		this.svg_string = "";
	}

	readFile() {
		let fs, _self;

		fs = require('fs');
		_self = this;

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
		let SVGO, svgo, _self, content;

		SVGO = require('svgo');
		svgo = new SVGO();
		_self = this;
		content = this.svg_file_content;

		svgo.optimize(content, (svg_string) => {
			_self.svg_string = svg_string.data;
		});
	}

	getSVGString() {
		return this.svg_string;
	}

}

module.exports = SVGManager;
