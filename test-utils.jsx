import {render} from "@testing-library/react";
import AppProvider from "./src/Providers/AppProvider.jsx";

const customRender= (ui, options) => {
    render(ui, { wrapper:AppProvider, ...options});
}

export * from "@testing-library/react";

export {customRender as render};

