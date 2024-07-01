import { useNavigate } from 'react-router-dom';

export default function Board() {
    const navigate = useNavigate();
    const navigateToCategory = () => {
        navigate('/category');
    }

    const navigateToHome = () => {
        navigate('/');
    }

    return (
      <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <button type="button" className="btn btn-success" onClick={navigateToCategory}>Go to Category</button>
                    <button type="button" className="btn btn-danger" onClick={navigateToHome}>Go to Home</button>
                </div>
                <div className="col-md-4 col-sm-6">2/3</div>
                <div className="col-md-4 col-sm-6">3/3</div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-4 col-sm-6">1/3</div>
                <div className="col-md-4 col-sm-6">2/3</div>
                <div className="col-md-4 col-sm-6">3/3</div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-12 col-12">                      
                </div>
            </div>

    

        <div className="card" style={{ margin: "20px 0" }} >
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        </div>

        <div className="card" style={{ margin: "20px 0" }}>
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        </div>


        <div className="card" style={{ width: "22rem" }}>
            <div className="card-header">
                Featured
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
        </div>


    
        </div>
      </div>
    );
}
