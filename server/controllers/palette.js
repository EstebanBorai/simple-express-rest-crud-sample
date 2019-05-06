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

module.exports = {
	getPalettes
};
