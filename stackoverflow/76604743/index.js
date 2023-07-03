const Sharp = require('sharp');

module.exports = class ImageManipulator {
	#sharpObject;

	constructor(body) {
		this.#sharpObject = Sharp(body);
	}

	applyResizingOptions(width = null, height = null) {
		const resizingOptions = { width, height };
		this.#sharpObject.resize(resizingOptions);
	}
};
