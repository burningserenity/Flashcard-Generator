exports.ClozeCard =
    function ClozeCard(text, cloze) {
        if (this instanceof ClozeCard) {
            this.cloze = cloze;
            this.clozeArray = cloze.split(" ");
            this.fullText = text;
            this.fullArray = text.split(" ");
            this.buildArray = [];
            for (i = 0; i < this.fullArray.length; i++) {
                for (j = 0; j < this.clozeArray.length; j++) {
                    if (this.clozeArray[j] == this.fullArray[i]) {
                        this.buildArray.push(this.fullArray[i]);
                        this.fullArray.splice(i, 1);
                    }
                }
            }
            this.buildStr = this.buildArray.join(" ");
            if (this.buildStr == this.cloze) {
                this.partial = this.fullArray.join(" ");
            }
            else throw ('"' + cloze + '"' + ' not found in ' + '"' + text + '"');
        }
        else return new ClozeCard(text, cloze);
    }
