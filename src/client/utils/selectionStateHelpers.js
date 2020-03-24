export const adjustSelectionOffset = function(oldSelectionState, anchorOffsetAmount, focusOffsetAmount) {
    const oldAnchor = oldSelectionState.getAnchorOffset();
    const oldFocus = oldSelectionState.getFocusOffset();
    const newSelectionState = oldSelectionState.merge({
        anchorOffset: oldAnchor + anchorOffsetAmount,
        focusOffset: oldFocus + focusOffsetAmount
    });
    return newSelectionState;
}
