import React from 'react'

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Main content */}
            <div className="flex flex-col items-center justify-center flex-grow">
                <h1 className="text-center text-5xl mb-4 game-heading">Khelū̃ Ki?</h1>
                <h2 className="text-center mb-13">Should I play?</h2>

                <div className="flex flex-col items-center gap-4">
                    <a href='/taas' className="py-2 px-7 bg-black text-white rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                        Taas
                    </a>
                    <a href='/langurburja' className="py-2 px-7 bg-black text-white rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                        Langur burja
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center py-4 bg-gray-900 text-white">
                © 2025 Pragyan / Developer
            </footer>
        </div>
    )
}

export default Home
