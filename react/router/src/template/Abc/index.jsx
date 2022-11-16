import { useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

export const Abc = () => {
    const { slug } = useParams();
    const location = useLocation();
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
            history.push('/');
        }, 5000);
    }, [history]);
    console.log(location);
    return <h1>abc {slug} </h1>;
};
