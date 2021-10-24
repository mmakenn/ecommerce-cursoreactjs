import './itemListContainer2.css';
import { ItemCount2 } from '../../components/itemCount2/itemCount2.js';

export const ItemListContainer2 = () => {
    const addOne = (value, funct) => {funct(value + 1)}
    const restOne = (value, funct) => {
        if (value > 0){
            funct(value - 1)
        }
    }

    return (<div>
            <ItemCount2 adding={addOne} resting={restOne} />
    </div> );
}