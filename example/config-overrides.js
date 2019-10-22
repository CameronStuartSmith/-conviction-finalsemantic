const {
	override,
	addWebpackAlias,
} = require("customize-cra");

const path = require('path'); 

module.exports = override( 
	addWebpackAlias({
			react: path.resolve('./node_modules/react'),
			'react-final-form': path.resolve('./node_modules/react-final-form'),
	})
)