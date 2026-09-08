import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './home.css'
import { headerNavItems, cardProdutos, footerSections } from '../../constants/home_const'
import CardListProdutos from '../../components/cards/cardList/cardList_produtos';

export default function Home() {

    return (
        <div className='mainContainer'>
            <div className="contentHeader">
                <Header headerItems={headerNavItems} />
            </div>
            <main className="contentMeio">
                <div className="contentMeioSection">
                    <p className='titleMeio'>Ofertas Imperdíveis</p>
                    <CardListProdutos produtos={cardProdutos} />
                </div>
            </main>
            <div className="contentFooter">
                <Footer footerSections={footerSections} />
            </div>
        </div>
    )
}

