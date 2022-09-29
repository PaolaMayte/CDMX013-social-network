import { Welcome } from './components/Welcome.js';
import { SingUp } from './components/SingUp.js';


const root = document.getElementById('root');

const routes = {
    '/': Welcome,
    '/singup': SingUp,
};

// root.appendChild (Welcome());
export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname,
    );
    root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

root.appendChild(component());