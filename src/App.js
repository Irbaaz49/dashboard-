import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings} from "./components";
import { Ecommerce, Orders, Employees, Customers, Kanban, ColorPicker, Editor, Line} from './pages';
// import { useStateContext } from './contexts/ContextProvider';
import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = ()=>{
    // const {activeMenu} = useStateContext();
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

    return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
       <BrowserRouter>
       
       <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{zInde:'1000'}}>

            <TooltipComponent  content="Settings" position="Top">
<button type="button" 
onClick={()=>setThemeSettings(true)}
className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{background: currentColor, borderRadius:'50%'}}>
    <FiSettings/>
</button>

</TooltipComponent>
        </div>
{activeMenu ? 
(<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg
bg-white
">
    <Sidebar/>
    </div>)
:
(<div className="w-0 dark:bg-secondary-dark">
       <Sidebar/>

    </div>)}



    <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
    ${activeMenu ? 'md:ml-72': 'flex-2'}`}>
    
    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
<Navbar/>

        </div>




<div>
{themeSettings && <ThemeSettings/>}
<Routes>
<Route path="/" element={<Ecommerce></Ecommerce>}/>
<Route path="/ecommerce" element={<Ecommerce></Ecommerce>}/>
<Route path="/orders" element={<Orders></Orders>}/>
<Route path="/employees" element={<Employees></Employees>}/>
<Route path="/customers" element={<Customers></Customers>}/>
<Route path="/kanban" element={<Kanban></Kanban>}/>
<Route path="/editor" element={<Editor></Editor>}/>
<Route path="/color-picker" element={<ColorPicker></ColorPicker>}/>
<Route path="/line" element={<Line></Line>}/>


</Routes>

</div>
</div>

       </div>
       
       </BrowserRouter>
       </div>
    )
}

export default App
