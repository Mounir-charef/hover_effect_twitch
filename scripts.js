const desc = document.getElementById("box-desc");

const createWord = (text, index) => {
    const word = document.createElement("span");
    console.log(word)
    word.innerHTML = `${text}`;
    word.classList.add("box-desc-word");
    word.style.transitionDelay = `${index * 50}ms`

    return word;
}

const addWord = (text, index) => desc.appendChild(createWord(text, index));

"Hover here to <br> get the cool hover effect ur wishin for boi".split(" ").map(addWord);