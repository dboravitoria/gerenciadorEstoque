import { StockContextProvider } from "./context/StockContext";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
export default function App() {
  return (
    <StockContextProvider>
      <RouterProvider router={router}/>
    </StockContextProvider>
  )
}


