import Menu from './Components/Menu';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Insert from './Components/Insert'
import Display from './Components/Display'
import Update from './Components/Update';
import Delete from './Components/Delete';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import About from './Components/About';
const App = () => {
    return (
        <div>
            <Menu />

            <div className="container my-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Insert" element={<Insert />} />
                    <Route path="/Display" element={<Display/>}/>
                    <Route path="/Update" element={<Update/>}/>
                    <Route path="/Delete" element={<Delete/>}/>                    
                    <Route path="/About" element={<About/>}/>                    

                </Routes>
            </div>
        </div>
    );
};

export default App;