import React from "react";
import { Header } from "../components";
import {
  HtmlEditor,
  Inject,
  RichTextEditorComponent,
  Image,
  Link,
  QuickToolbar,
  Toolbar,
  RichTextEditor,
} from "@syncfusion/ej2-react-richtexteditor";
import { EditorData } from "../data/dummy.js";
const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Image, Link, Toolbar, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
