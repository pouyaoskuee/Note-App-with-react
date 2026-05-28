import {NotesProvider} from "../context/NotesContext.jsx";


const AppProvider = ({children}) => {
    return <NotesProvider>{children}</NotesProvider>;
};

export default AppProvider;