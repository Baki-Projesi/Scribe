//Using the current content block and cursor position, 
// get all current text contents before the nearest space to the left of cursor
export default function getCurrentWordBuffer(currentBlock, selectionOffset) {
    let buffer = '', _offset = selectionOffset - 1;
    let previousChar = currentBlock.getText().charAt(_offset);

    while (previousChar !== ' ' && previousChar !== '' && previousChar) {
        buffer = previousChar + buffer;
        _offset -= 1;
        previousChar = currentBlock.getText().charAt(_offset);
        if (buffer.length > 8) {
            //we'll never see a combo greater than 8 characters, 
            // so this is arbitrary and done for performance reasons only
            buffer = buffer.substring(1);
        }
    }

    return buffer;
}