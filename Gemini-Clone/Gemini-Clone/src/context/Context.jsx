import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();


// This is the main function under which all the activies are happening...
const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompts, setRecentPrompts] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");



    //Function for the typing effect in the webpage like chatgpt does
    const deplayPara = (index,nextword) => {
        setTimeout(() => {
            setResultData(prev=>prev+nextword)
        }, 35*index);
    }


    // This is the function that will used to submit the input values
    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)    
        setShowResult(true)
        setRecentPrompts(input)
        setPrevPrompts(prev=>[...prev,input ])  // For storing the recect prompts in the sidebar
        const response = await runChat(input);
        let responseArray = response.split("**");
        let newResponse = "";
        for(let i = 0; i<responseArray.length; i++) {
            if(i===0 || i%2 == 0) {
                newResponse += responseArray[i];
            } else  
            {
                newResponse += "<b>"+responseArray[i]+"</b>"
            }
        }

        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ");
        for(let i=0; i<newResponseArray.length; i++) {
            const nextword = newResponseArray[i];
            deplayPara(i,nextword+" ")
        }
        // setResultData(newResponse2)
        setLoading(false)
        setInput("")
    }

    const contextvalue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompts,
        recentPrompts,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return (
        <Context.Provider value={contextvalue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider; 