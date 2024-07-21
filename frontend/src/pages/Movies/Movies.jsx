import React from 'react'
import Navbar from '../Navbar'
import Slider from './Slider'
import Search from './Search'
import Filter from './Filter'
import ParticleCanvas from '../../ParticleCanvas'

const Movies = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Partikül arka planı */}
            <ParticleCanvas className="absolute top-0 left-0 w-full h-full z-0" />

            {/* İçerik alanı */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Search />
                    <Filter />
                    <Slider />
                </main>
            </div>
        </div>
    );
}
export default Movies