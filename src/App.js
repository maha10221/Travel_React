import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";
import "./App.css";

function App() {
    const cardsPerPage = 5; // Number of cards to display per page
    const [currentPage, setCurrentPage] = useState(1);

    // Logic to slice the data array based on currentPage
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

    // Logic to paginate
    const nextPage = () => {
        if (currentPage < Math.ceil(data.length / cardsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const renderCards = currentCards.map((item) => (
        <Card key={item.id} {...item} />
    ));

    return (
        <div className="App">
            <Navbar />
            <section className="cards-list">{renderCards}</section>
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>
                    Previous Page
                </button>
                <button onClick={nextPage} disabled={currentPage === Math.ceil(data.length / cardsPerPage)}>
                    Next Page
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default App;
