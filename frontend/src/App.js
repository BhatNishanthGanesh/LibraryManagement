import Menu from './Menu';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Insert from './Insert'
import Display from './Display'
import Update from './Update';
import Delete from './Delete';

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
                </Routes>
            </div>
        </div>
    );
};

export default App;