import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Landing from '../pages/Landing'
import Catalog from '../pages/Catalog';
import Error404 from '../pages/Error404';


const RoutesNavigator = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/catalog' element={<Catalog/>}/>
            <Route path='/*' element={<Error404/>}/>
        </Routes>

    )
}

export default RoutesNavigator;