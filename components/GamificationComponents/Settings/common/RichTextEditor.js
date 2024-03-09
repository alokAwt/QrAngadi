"use client";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./RichTextEditor.css";
import Label from "./Label";
function RichTextEditor({ name, placeholder, id, data, setData }) {
  return (
    <div className=" min-w-fit mt-3 w-full">
      <Label name={name} />
      {/* <div className="border-1 border-[#C8C8C8] max-w-fit rounded-md"> */}
      <ReactQuill
        placeholder={placeholder}
        type="text"
        modules={modules}
        formats={formats}
        bounds={".app"}
        id={id}
        value={data}
        onChange={setData}
        className={`border-0 focus:ring-0 rounded-md placeholder:text-sm editorContainer h-fit w-[70%]`}
      />
      {/* </div> */}
    </div>
  );
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
let modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
let formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default RichTextEditor;
