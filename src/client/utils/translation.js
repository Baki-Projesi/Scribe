const currentOutputState = {

}

export default function translate(editorState, currentBlockKey, language) {
    const entityMap = editorState.entityMap;
    const contentBlocks = editorState.blocks;
    let outputText = "";
    // if (currentOutputState[currentBlockKey]) {
    //     outputText = ""
    // }

    for (let i = currentBlockKey; i < contentBlocks.length; i++) {
        const block = contentBlocks[i];
        block.entityRanges.forEach(function(entityRange) {
            if (entityMap[entityRange.key].type === "DISAMBIGUATION" || 
                entityMap[entityRange.key].type === "SPACE") {
                
                outputText += entityMap[entityRange.key].data[language];
            }
        });
        //output.push(outputText);
        outputText += '\n';
    }

    return outputText;
}