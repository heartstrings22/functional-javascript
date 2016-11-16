/*function countWords(inputWords) {
	var obj = {};
	return inputWords.reduce(function(obj, word, index, array){
		if (obj[word]) {
			obj[word]++;
		}else{
			obj[word] = 1;
		}
		return obj;
	}, obj);
}*/

// better!
function countWords(inputWords) {
	return inputWords.reduce(function(countMap, word){
		countMap[word] = ++countMap[word] || 1;
		return countMap;
	}, {})
}

module.exports = countWords;