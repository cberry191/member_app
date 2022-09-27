import { Login } from "./Components/Login"
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

export const App = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="users">
                            <Route index element={<List />} />
                            <Route path=":userId" element={<Single />} />
                            <Route path="new" element={<New />} />
                        </Route>
                        <Route path="products">
                            <Route index element={<List />} />
                            <Route path=":productId" element={<Single />} />
                            <Route path="new" element={<New />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}