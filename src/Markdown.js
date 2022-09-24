import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Markdown = () => {
  const [text, setText] = useState("# MarkDown Preview");
  return (
    <>
      <textarea
        name="markdown"
        id="markdown"
        cols="30"
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <ReactMarkdown className="preview">{text}</ReactMarkdown>
    </>
  );
};

export default Markdown;
