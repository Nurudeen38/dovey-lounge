import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components';
import { Home, Services, About, Gallery, Contact } from '@/pages';
import { ROUTES } from '@/routes';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SERVICES} element={<Services />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
