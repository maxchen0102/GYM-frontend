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

        <button type="button" className="btn btn-success" onClick={navigateToCategory}>work out !</button>
        <button type="button" className="btn btn-danger" onClick={navigateToHome}>work out !</button>
      </div>
    );
}