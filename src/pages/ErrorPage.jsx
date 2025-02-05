import { useRouteError } from 'react-router-dom';
import { NotFound } from '../components/NotFound/NotFound';

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <NotFound/>
    )
}