function wordCountDeluxe(wordsArray) {
    // Add your code here
    for (k = 0; k < wordsArray.length; k++) {
        searchWord = wordsArray[k];
        if (k > 1) {
            wordAlreadySearchedForK = false; //to reset before loop
            //add a boundary condition here for m = k
            for (m = (k - 1); m >= 0; m--) {
                if (wordsArray[m] === searchWord) {
                    //word already searched, ignore this k
                    wordAlreadySearchedForK = true;
                }
            }
        }
        else {
            wordAlreadySearchedForK = false;
        }
    }

    if (wordAlreadySearchedForK === false) {

        wordAppearance = 0;

        for (i = 0; i < wordsArray.length; i++) {

            if (wordsArray[i] === searchWord) {
                wordAppearance = wordAppearance + 1;
            }
        }
        console.log('We have found ' + wordAppearance + ' instances of the word ' + searchWord + '.');
    }
}

foods = ['pizza', 'celery', 'bananas', 'pizza', 'lettuce', 'cookies', 'pizza'];

wordCountDeluxe(foods);
