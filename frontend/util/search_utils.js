class TrieNode {
    constructor(letter, isEnd) {
        this.isEnd = isEnd;
        this.letter = letter;
        this.children = {}
    }

    addChild(letter, isEnd) {
        if (!this.children[letter]) {
            this.children[letter] = new TrieNode(letter, isEnd)
        }
        const childNode = this.children[letter];
        childNode.isEnd = childNode.isEnd || isEnd;
        return childNode;
    }

    getChild(letter) {
        return this.children[letter];
    }

    hasChild(letter) {
        if (this.children[letter]) {
            return true;
        }
        return false;
    }
}

const ROOT_CHAR = "*";
export default class Autocomplete {

    constructor() {
        this.root = new TrieNode(ROOT_CHAR, false);
        this.suggestions = [];
    }

    addWord(word) {
        const letters = Array.from(word);
        let curNode = this.root;

        for (let i = 0; i < letters.length; i++) {
            const isEnd = ((i + 1) === letters.length);
            curNode = curNode.addChild(letters[i], isEnd);
        }

        return this;
    }

    addWords(words) {
        let ret = null;
        for (let i = 0; i < words.length; i++) {
            ret = this.addWord(words[i].toUpperCase());
        }
        return ret;
    }

    suggestionsHelper(node, prefix) {
        if (node.isEnd) {
            this.suggestions.push(prefix)
        }

        Object.keys(node.children).forEach(key => {
            this.suggestionsHelper(node.getChild(key[key.length - 1]), prefix + key);
        })
    }

    getSuggestions(prefix) {
        prefix = prefix.toUpperCase();

        let curNode = this.root;
        let notFound = false;
        let tempWord = "";

        for (let i = 0; i < prefix.length; i++) {
            if (!curNode.hasChild(prefix[i])) {
                notFound = true;
                break
            }
            tempWord += prefix[i];
            curNode = curNode.getChild(prefix[i]);
        }

        if (notFound) {
            return null;
        }
        if (curNode.isEnd && !curNode.children) {
            return null
        }

        this.suggestionsHelper(curNode, tempWord)

        const ret = this.suggestions;
        this.suggestions = [];
        return ret;
    }
}