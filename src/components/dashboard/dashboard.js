import { useNavigate } from 'react-router-dom';

export default function Board() {
    const navigate = useNavigate();
    const navigateToCategory = () => {
        navigate('/category');
    }

    const navigateToHome = () => {
        navigate('/');
    }

    const items_test = [
        { id: 1, text: 'An item' },
        { id: 2, text: 'A second item' },
        { id: 3, text: 'A third item' },

    ];  

    return (
      <div>
        <div className="container mt-5">
            <div className="row">
                
                <div className="col-md-4 col-sm-6">
                    <button type="button" className="btn btn-success" onClick={navigateToCategory}>Go to Category</button>
                    <button type="button" className="btn btn-danger" onClick={navigateToHome}>Go to Home</button>
                </div>
     
            </div>
        



    
        </div>
      </div>
    );
}
