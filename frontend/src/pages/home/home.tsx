import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './home.css'
import { headerNavItems, footerSections } from '../../constants/home_const'
import CardListProdutos from '../../components/cards/cardList/cardList_produtos';
import { useProdutos } from '../../hooks/useProdutos';

export default function Home() {
    const { produtos, loading, error } = useProdutos();

    return (
        <div className='mainContainer'>
            <div className="contentHeader">
                <Header headerItems={headerNavItems} />
            </div>
            <main className="contentMeio">
                <div className="contentMeioSection">
                    <p className='titleMeio'>Ofertas Imperdíveis</p>
                    {loading && <p className="loading-text">Carregando produtos...</p>}
                    {error && <p className="error-text">Erro: {error}</p>}
                    {!loading && !error && produtos.length === 0 && (
                        <p className="empty-text">Nenhum produto encontrado.</p>
                    )}
                    {!loading && !error && produtos.length > 0 && (
                        <CardListProdutos produtos={produtos} />
                    )}
                </div>
            </main>
            <div className="contentFooter">
                <Footer footerSections={footerSections} />
            </div>
        </div>
    )
}
