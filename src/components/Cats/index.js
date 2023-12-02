import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatsFetch } from './catState';


const Cats = () => {


    const cats = useSelector(state => state.cats.cats);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCatsFetch())
    }, [dispatch]);

    console.log(cats);

    return (
        <>
            <h1>Cat Species Gallery</h1>
            <p>Images of different species of cats. Lots of cats for your viewing pleasure</p>
            <hr />

            <div className='Gallery'>
            {
                cats.map(cat => (
                    <div key={cat.id} className='row'>
                        <div className='column column-left'>
                            <img
                                alt={cat.name}
                                src="https://cdn2.thecatapi.com/images/b7t.jpg"
                                width="200"
                                height="200"
                            />
                        </div>

                        <div className='column column-right'>
                            <h2>{cat.name}</h2>
                            <h5>Termperament: {cat.temperament}</h5>
                            <p>{cat.description}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </>
    );
};

export default Cats;