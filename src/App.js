import './assets/styles/App.scss';
import Header from './components/head/Header';
import Main from './components/main/Main';
import Clients from './components/main/Clients';
import ContactUs from './components/main/ContactUs';
import Footer from './components/footer/Footer';
function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Clients />
            <ContactUs />
            <Footer />
        </div>
    );
}
export default App;
