import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import htmlToDraft from "html-to-draftjs";
import { useEffect, useState } from "react";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "./styles/textEditor.module.scss";

// TODO : Set Props interface
// eslint-disable-next-line
const TextEditor = ({ setPost, post }: any): JSX.Element => {
  const blocksFromHtml = htmlToDraft(post.content);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(
    contentBlocks,
    entityMap
  );
  const editorState = EditorState.createWithContent(contentState);
  const [editableEditorState, setEditableEditorState] = useState(editorState);

  const handleChange = (state: EditorState) => {
    setEditableEditorState(state);
    setPost({
      ...post,
      content: draftToHtml(convertToRaw(state.getCurrentContent())),
    });
  };

  useEffect(() => {
    setEditableEditorState(editorState);
  }, [post.id]);

  return (
    <Editor
      toolbarClassName={styles.toolbar}
      wrapperClassName={styles.editorWrapper}
      editorClassName={styles.editor}
      onEditorStateChange={handleChange}
      editorState={editableEditorState}
    />
  );
};

export default TextEditor;
