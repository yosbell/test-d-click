import './App.css'
import TaskView from "./app/task/index.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({});

function App() {

    return (
        <>
            <ThemeProvider theme={theme}>
                <TaskView/>
            </ThemeProvider>
        </>
    )
}

export default App
