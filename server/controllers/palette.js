
function getPalettes (req, res) {
	res.status(200).send([
		{
			id: 'test',
			name: 'Palette 01',
			colors: ['#aaaaaa', '#bbbbbb', '#cccccc', '#dddddd', '#eeeeee'],
			dateCreated: new Date().toISOString()
		}
	]);
}

function postPalettes(req, res) {
	const {body} = req;  
	res.status(200).send(JSON.stringify(body));				
}
module.exports = {
	getPalettes,
	postPalettes
};
