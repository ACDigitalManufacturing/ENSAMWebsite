import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw } from "draft-js";

const TextEditor = (): JSX.Element => {
  // eslint-disable-next-line
  const handleChange = (state: any) => {
    console.log(draftToHtml(convertToRaw(state.getCurrentContent())));
  };
  return (
    <Editor
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={handleChange}
    />
  );
};

export default TextEditor;
