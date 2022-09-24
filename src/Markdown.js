import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Markdown = () => {
  const [text, setText] = useState("# MarkDown Preview App");
  return (
    <>
      <textarea
        name="markdown"
        id="markdown"
        className="markdown"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <ReactMarkdown className="preview">{text}</ReactMarkdown>
    </>
  );
};

export default Markdown;
