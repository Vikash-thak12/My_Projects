import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompts, setRecentPrompts] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showresult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const onSent = async (prompt) => {
        await runChat(prompt)
    }

    // onSent("What is Software Engineering")

    const contextvalue = {

    }

    return (
        <Context.Provider value={contextvalue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider; 