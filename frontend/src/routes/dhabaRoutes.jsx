import { Route } from 'react-router-dom';
import { DhabaEarnings, DhabaLayout, DhabaLogin, DhabaMenu, DhabaOrders, DhabaRegister } from './lazyPages';

// Partner panel for highway dhabas (InstaaWheels Bus food pre-orders).
const dhabaRoutes = (
  <>
    {/* HIDDEN (bus): dhaba partner panel belongs to InstaaWheels Bus
    <Route path="/dhaba/login" element={<DhabaLogin />} />
    <Route path="/dhaba/register" element={<DhabaRegister />} />
    <Route path="/dhaba" element={<DhabaLayout />}>
      <Route index element={<DhabaOrders />} />
      <Route path="menu" element={<DhabaMenu />} />
      <Route path="earnings" element={<DhabaEarnings />} />
    </Route>
    */}
  </>
);

export default dhabaRoutes;
