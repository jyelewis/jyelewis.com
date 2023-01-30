import React, { useMemo, useState } from "react";
import { cleanText } from "./utils/tokenise";

export const CleanSearchText: React.FC = () => {
  const [input, setInput] = useState("Fox: quick, brown");

  const cleanedText = useMemo(() => cleanText(input), [input]);

  return (
    <div>
      <div className="interactive-label">Interactive</div>
      <label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "200px",
          }}
        />
        &nbsp;➡️&nbsp;
        <code className="language-text">{cleanedText}</code>
      </label>
    </div>
  );
};
