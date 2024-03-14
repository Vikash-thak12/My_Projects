import { createContext } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

        const onSent = async (prompt) => {
            await runChat(prompt)
        }

        onSent("What is Software Engineering")
        const contextvalue = {

        }

    return (
        <Context.Provider value={contextvalue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider; 