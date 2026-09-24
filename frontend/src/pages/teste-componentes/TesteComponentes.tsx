import { headerNavItems } from '../../constants/home_const'
import Header from '../../components/header/Header'
import HeliceChart from '../../components/charts/HeliceChart'
import './TesteComponentes.css';

export default function TesteComponentes() {
    return (
        <div className="mainContainer">
            <div className="contentHeader">
                <Header headerItems={headerNavItems} />
            </div>
            <main className="teste-componentes-container">
                <h1>Teste de Componentes</h1>
                <p>Sextupla Hélice — Sistema Municipal de Inovação</p>
                <HeliceChart />
            </main>
        </div>
    );
}
