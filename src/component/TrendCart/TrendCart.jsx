import './TrendCart.css';
import { TrendData } from '../../Data/TrendData';

const TrendCart = () => {
    return (
        <div className="trendCart">
            <h3>Trends for you</h3>
                {
                    TrendData.map((data,id)=>{
                        return (
                            <div className="trends" key={id}>
                                <span>#{data.name}</span>
                                <span>{data.shares}k shares</span>
                            </div>
                        )
                    })
                }
               
        </div>
    );
};

export default TrendCart;