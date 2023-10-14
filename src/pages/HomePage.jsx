import React from "react";
import { Link } from "react-router-dom";
import Center from '../components/center/Center';

function HomePage() {

    return (
        <div>
            <h1>Главная страница</h1>
            <br/>
            {/* <Link to="/equipment">EquipmentPage</Link> */}
            <Center></Center>
        </div>
        
    );
}

export default HomePage;