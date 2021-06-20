import Sneaker from "../sneaker/Sneaker";
import './Sneakers.scss';

function Sneakers () {
    return (
        <div className="Sneakers">
            <div className="container">
                <div className="title">Все кроссовки</div>
                <div className="grid">
                    <Sneaker />
                    <Sneaker />
                    <Sneaker />
                    <Sneaker />
                    <Sneaker />
                </div>
            </div>
        </div>
    )
}

export default Sneakers;