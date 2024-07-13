import { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';

// Custom hook definition
export const useScrollToTop = () => {
    useEffect(() => {
        scrollToTop();
    }, []);
};

export default useScrollToTop;

/*
* Use it every pages/routes in react project
* To use this hook just import and call the Hook like this
* useScrollToTop();
*/
