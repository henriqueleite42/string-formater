import React, { useState, useCallback, useMemo } from "react";
import ReactAutoSizeTextArea from "react-autosize-textarea";
import { ToastContainer, toast } from "react-toastify";

import {
  descriptions,
  Description as IDescription,
  StringFormatters,
} from "./description";

import style from "./style.module.scss";
import "react-toastify/dist/ReactToastify.css";

const Home: React.FC = () => {
  const [string, setString] = useState<string>("");
  const [mode, setMode] = useState<IDescription["function"]>("removeAccents");

  const getFormattedString = useMemo(() => {
    try {
      if (StringFormatters[mode]) {
        return StringFormatters[mode](string);
      }

      return string;
    } catch (e) {
      return "Invalid!";
    }
  }, [mode, string]);

  const copyToClipBoard = useCallback(() => {
    try {
      navigator.clipboard
        .writeText(getFormattedString)
        .then(() => {
          toast("Copied!", { type: "success" });
        })
        .catch(() => {
          toast("Fail!", { type: "error" });
        });
    } catch (e) {
      toast("Fail!", { type: "error" });
    }
  }, [getFormattedString]);

  return (
    <div className={style["container"]}>
      <ToastContainer />
      <select
        onChange={e => setMode(e.target.value as IDescription["function"])}
      >
        {descriptions.map(option => (
          <option key={option.function} value={option.function}>
            {option.name}
          </option>
        ))}
      </select>
      <div className={`${style["input"]} ${style["textarea-container"]}`}>
        <ReactAutoSizeTextArea
          value={string}
          placeholder="Some Text Here"
          className={style["textarea"]}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setString(e.target.value)
          }
        />
      </div>
      <div
        className={`${style["output"]} ${style["textarea-container"]}`}
        onClick={copyToClipBoard}
      >
        <ReactAutoSizeTextArea
          id="output"
          disabled
          value={getFormattedString}
          className={style["textarea"]}
          placeholder="Result Will Be Displayed Here, Click to Copy"
        />
      </div>
    </div>
  );
};

export default Home;
