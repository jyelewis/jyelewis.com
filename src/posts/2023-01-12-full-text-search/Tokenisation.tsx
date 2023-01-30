import React, { useMemo, useState } from "react";
import { tokeniseReturnAll } from "./utils/tokenise";

const exampleStyles = {
  marginLeft: "10px",
  marginBottom: "10px",
  display: "block",
};

export const Tokenisation: React.FC = () => {
  const [input, setInput] = useState("That fox is QUICK & brown!");

  const { lowercase, symbolsRemoved, stopWordsRemoved, tokens } = useMemo(
    () => tokeniseReturnAll(input),
    [input]
  );

  return (
    <div>
      <div className="interactive-label">Interactive</div>
      <label>
        Input text:
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <small>(Change me)</small>
      </label>

      <div>
        <ol>
          <li>
            Convert to lowercase
            <br />
            <span style={exampleStyles}>
              <code className="language-text">{input}</code>&nbsp;➡️&nbsp;
              <code className="language-text">{lowercase}</code>
            </span>
          </li>

          <li>
            Flatten symbols & boundary characters into a standard character &
            reduce to 1 sequential delimiter
            <br />
            <span style={exampleStyles}>
              <code className="language-text">{lowercase}</code>&nbsp;➡️&nbsp;
              <code className="language-text">{symbolsRemoved}</code>
            </span>
          </li>

          <li>
            Remove{" "}
            <a
              href="https://en.wikipedia.org/wiki/Stop_word"
              target="_blank"
              rel="noreferrer"
            >
              stop words
            </a>{" "}
            (words insignificant to searching, i.e &apos;the&apos;,
            &apos;is&apos;, &apos;a&apos;, &apos;their&apos;)
            <br />
            <span style={exampleStyles}>
              <code className="language-text">{symbolsRemoved}</code>
              &nbsp;➡️&nbsp;
              <code className="language-text">{stopWordsRemoved}</code>
            </span>
          </li>

          <li>
            Break into tokens on boundaries (delimiters such as hyphen, space,
            parentheses)
            <br />
            <ul>
              {tokens.map((token, index) => (
                <li key={index}>
                  <code className="language-text">{token}</code>
                </li>
              ))}
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};
