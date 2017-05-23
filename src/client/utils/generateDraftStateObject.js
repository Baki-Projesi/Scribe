//given an editorstate object, return a larger object with important data points conveniently broken out
export default function genereateDraftStateObject(editorState) {
    return {
        editorState: editorState,
        contentState: editorState.getCurrentContent(),
        oldSelectionState: editorState.getSelection(),
        startKey: editorState.getSelection().getStartKey(),
        startOffset: editorState.getSelection().getStartOffset(),
        endKey: editorState.getSelection().getEndKey(),
        endOffset: editorState.getSelection().getEndOffset(),
        currentBlock: editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getStartKey())
    }
}