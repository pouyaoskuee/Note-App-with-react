import {NotesProvider} from "../context/NotesContext";
import * as React from "react";
import {Children} from "../Types/Children.ts";




const AppProvider = ({children}:Children) => {
    return <NotesProvider>{children}</NotesProvider>;
};

export default AppProvider;