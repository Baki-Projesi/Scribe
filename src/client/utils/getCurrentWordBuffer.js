//Using the current content block and cursor position, 
// get all current text contents before the nearest space to the left of cursor
export default function getCurrentWordBuffer(currentBlock, selectionOffset) {
    let buffer = '', _offset = selectionOffset - 1;
    let previousChar = currentBlock.getText().charAt(_offset);

    while (previousChar !== ' ' && previousChar !== '' && previousChar) {
        buffer = previousChar + buffer;
        _offset -= 1;
        previousChar = currentBlock.getText().charAt(_offset);
    }

    return buffer;
}