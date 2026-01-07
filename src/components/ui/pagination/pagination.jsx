
function Pagination ({ setPage, isLoading }) {

    const handlePageLoad = () => {
        setPage(p => p + 1);
    }

    return (
        <div className="py-4 d-flex auto-mx justify-content-center">
            <button 
                type="button" className="btn btn-outline-secondary"
                onClick={() => handlePageLoad()} 
                disabled={isLoading}
            >
                {isLoading ? 'Cargando...' : 'Cargar más'}
            </button>
        </div>
    );
}

export default Pagination;