import React from 'react'
import Search from './components/navbar/SearchBar'

import './css/tailwind.css';
import './index.css';

export default function AppTest() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <Search/>
        </div>
    )
}
