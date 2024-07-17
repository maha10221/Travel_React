import React, { useState } from 'react';
import Card from './Card';
import data from './data'; // Assuming 'data' contains all your card information

function CardListPagination() {
    const cardsPerPage = 5;
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

    return (
        <div className="card-list-container">
            <div className="card-list">
                {currentCards.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        class={card.class}
                        location={card.location}
                        googleMapsUrl={card.googleMapsUrl}
                        bestViewSeason={card.bestViewSeason}
                        description={card.description}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>
                    Previous Page
                </button>
                <button onClick={nextPage} disabled={currentPage === Math.ceil(data.length / cardsPerPage)}>
                    Next Page
                </button>
            </div>
        </div>
    );
}

export default CardListPagination;
