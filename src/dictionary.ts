type Words = {
    [key: string]: string
}

class Dict {
    private words: Words;

    constructor() {
        this.words = {};
    }

    add(word: Word) {
        if (!this.words[word.term]) {
            this.words[word.term] = word.def;
        }
    }

    def(term: string) {
        return this.words[term];
    }

    getWords() {
        return this.words;
    }

    update(word: Word) {
        if (this.words[word.term]) {
            this.words[word.term] = word.def;
        }
    }

    delete(term: string) {
        if (this.words[term]) {
            delete this.words[term];
        }
    }
}

class Word {
    constructor(
        public readonly term: string,
        public readonly def: string
    ) {}
}

const word1 = new Word('a', 'aaa');
const word2 = new Word('b', 'bbb');
const word3 = new Word('c', 'ccc');

const dic = new Dict();
dic.add(word1);
dic.add(word2);
dic.add(word3);

console.log(dic.getWords());

dic.delete('b');

console.log(dic.getWords());

dic.update({term: 'c', def: 'bbb'});

console.log(dic.getWords());
