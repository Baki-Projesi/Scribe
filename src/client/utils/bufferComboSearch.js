//searches for a combination string match using the given buffer and charRules
export default function findCombination(buffer, charRules) {
    let results = [];
    let _buffer = buffer;
    while (_buffer && _buffer.length > 1) {
        if (charRules[_buffer]) {
            results = charRules[_buffer];
        }

        _buffer = _buffer.substring(1);
        console.log(_buffer);
    }

    return results;
}