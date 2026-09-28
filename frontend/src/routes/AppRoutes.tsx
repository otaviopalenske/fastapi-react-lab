import { Routes, Route } from 'react-router-dom';
import Teste from '../pages/teste';
import Home from '../pages/home/home';
import Checkout from '../pages/checkout/checkout';
import TesteComponentes from '../pages/teste-componentes/TesteComponentes';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/teste" element={<Teste />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/teste-componentes" element={<TesteComponentes />} />
        </Routes>
    );
}
