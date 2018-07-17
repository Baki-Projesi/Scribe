export default function concat(baseObj, newObj) {
    /**
     * Global states: paragraph list, entitymap, key-counter
     * 
     * Strategy: 
     * 1. Start with first jsonObj, append paragraphs and entityMap
     * 2. Update counter with key # of last entity
     * 3. Take next jsonObj, loop through paragraphs
     *       a. for each paragraph, find entitykey and add counter to key
     *       b. find old entitykey and replace with matching from step (a)
     *       c  add updated entity record to global entitymap
     *       d. Add paragraph to list
     * 4. Update counter with key # of last entity
     * 5. repeat steps 3, 4 for each jsonObj
     * 6. Download resulting file to browser
     */

    baseObj.blocks[baseObj.blocks.length - 1] // last paragraph

    // Ensure entity map is ordered so we can take the last key #
    const baseEntityMap = orderObjectKeys(baseObj.entityMap);
    const orderedEntityKeys = Object.keys(baseEntityMap);
    const lastKey = orderedEntityKeys[orderedEntityKeys.length - 1];
    const lastKeyNumeric = Number(lastKey);

    // Ensure the key is numeric so we can add it to the other
    if (!Number.isInteger(lastKeyNumeric)) {
        console.log('last key ' + lastKeyNumeric + ' is not a valid integer')
        return;
    }
    
    let newKeysMap = {} // e.g. {oldkey: newKeyNumeric, "0": 34}
    for (const oldKey in newObj.entityMap) {
        const oldKeyNumeric = Number(oldKey);
        const newKeyNumeric = oldKeyNumeric + lastKeyNumeric;
        newKeysMap[oldKey] = newKeyNumeric;
    }

    /* UPDATE ENTITY MAP */
    const newEntityMap = renameKeys(newObj.entityMap, newKeysMap);
    newObj.entityMap = newEntityMap
    //console.log(newObj.entityMap);

    /* UPDATE BLOCK LIST */
    newObj.blocks.forEach(function(block) {
        block.entityRanges.forEach(function(rangeObj) {
            rangeObj["key"] = newKeysMap[rangeObj["key"]];
        });
    });

    /* ADD EVERYTHING TO BASE OBJ */
    baseObj.blocks = baseObj.blocks.concat(newObj.blocks);
    baseObj.entityMap = Object.assign(baseObj.entityMap, newObj.entityMap);

    /* RETURN MERGED OBJECT */
    return baseObj;
}

function orderObjectKeys(obj) {
    const ordered = {};
    Object.keys(obj).sort().forEach(function (key) {
        ordered[key] = obj[key];
    });
    return ordered;
}
/*  USAGE
    const obj = { a: "1", b: "2" };
    const newKeys = { a: "A", c: "C" };
    const renamedObj = renameKeys(obj, newKeys);
    console.log(renamedObj);
    // {A:"1", b:"2"}
*/
function renameKeys(obj, newKeys) {
    const keyValues = Object.keys(obj).map(key => {
      const newKey = newKeys[key] || key;
      return { [newKey]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
  }