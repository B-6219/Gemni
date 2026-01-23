// import { createContext } from "react";
// import main from "../config/gemni";

// export const Context = createContext()

// const ContexProvider = (props) => {

//     const onSent = async () => {
//         //await main()
//     }

//     onSent('What is React Js')

//     const contextValue = {

//     }

//     return (
//         <Context.Provider value={contextValue}>
//             {props.children}
//         </Context.Provider>
//     )
// }
// export default ContexProvider






import { createContext, useState } from "react";
import main from "../config/gemni";

export const Context = createContext();

const ContextProvider = ({ children }) => {

    const [input, setInput] = useState('')
    const [recentPrompt, setrecentPrompt] = useState('')
    const [prevPrompt, setprevPrompt] = useState([])
    const [showResult, setshowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setresultData] = useState('')

    const onSent = async (prompt) => {
        setresultData('')
        setLoading(true)
        setshowResult(true)

        try {
            const result = await main(input);
            setresultData(result)
            console.log(result);
            return result;
        } catch (error) {
            console.error(error);
        }

        setLoading(false)
        setInput('')
    };

    const contextValue = {
        onSent, prevPrompt,
        setInput, setLoading, loading, input, recentPrompt
        , setrecentPrompt, setprevPrompt, resultData
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
