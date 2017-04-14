//translates a
export default function translate(contentState, currentBlockKey, lastCreatedEntityKey, language) {
    const block = contentState.getBlockForKey(currentBlockKey);
    let outputText = "";
    

    block.entityRanges.forEach(function (entityRange) {
        if (entityMap[entityRange.key].type === "DISAMBIGUATION") {
            outputText += entityMap[entityRange.key].data[language];
        }
    });

    return outputText;
}