import Header from "../Component/Header";
import Sidebar from "./Sidebar";


function Defautlayout({children}) {
    return ( 
        <div>
            <Header/>
            <div className="container">
                <Sidebar/>
                <div className="content">
                    {children}
                </div>
            </div>
        </div> 
    );
}

export default Defautlayout;