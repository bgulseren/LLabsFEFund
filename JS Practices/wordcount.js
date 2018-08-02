function wordCount(wordsArray, searchWord) {
	// Add your code here
	wordAppearance = 0;
	for (i = 0; i < wordsArray.length; i++) {
		console.log('Checking ' + wordsArray[i]);
		if (wordsArray[i] === searchWord) {
			console.log('Yay!');
			wordAppearance = wordAppearance + 1;
		}
		//console.log(wordAppearance);
	}
	return wordAppearance;
}

foods = ['pizza', 'celery', 'bananas', 'pizza', 'lettuce', 'cookies', 'pizza'];

a = wordCount(foods, 'pizza');
console.log('We found ' + a + ' instances in total.');
