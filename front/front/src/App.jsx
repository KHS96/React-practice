import {Route, Router, Routes} from 'react-router-dom';
import Main from './component/pages/home/Main';
import Login from './component/pages/Login';

function App() {

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Main" element={<Main />}/>
        </Routes>
    );
}

export default App;
