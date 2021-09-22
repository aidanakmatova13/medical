import './style.css'
import Aside from "../Aside";
import Header from "../Header";

const Layout = ({children}) => {
    return (
        <main className='main'>
            <Aside/>
            <div className="right-side">
                <Header/>
                <div className="content">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default Layout;