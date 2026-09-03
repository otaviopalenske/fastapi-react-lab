import Header from '../../components/header/Header'
import './home.css'
import { headerNavItems, secondaryNavItems } from '../../constants/home_const'

export default function Home() {


    return (
        <div className='mainContainer'>
            <div className="contentHeader">
                <Header headerItems={headerNavItems}/>
            </div>
            <main className="contentMeio">
                <h2 className='titleMeio'>meio</h2>
            </main>
            <div className="contentFooter">
                <h2 className='titleFooter'>footer</h2>
            </div>
        </div>
    )
}

