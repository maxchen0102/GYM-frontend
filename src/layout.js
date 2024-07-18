import Board from "./components/dashboard/dashboard";
import React from "react";
import Login from "./components/account/login";
import Sign_out from "./components/account/sign_out";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from "./components/category/category";
import ItemList from "./components/items/itemList";
import RecordList from "./components/records/recordList"; // 新增這行
import { MyProvider } from "./contexts/context";
import Sign_up from "./components/account/sign_up";



export default function Layout() {
  return (
<MyProvider>
       <Router>
      <div>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:id" element={<ItemList />} />
          <Route path="/item/:itemId" element={<RecordList />} />{" "}
          <Route path="/login" element={<Login />} />
          <Route path="/sign_out" element={<Sign_out />} />
          <Route path="/sign_up" element={<Sign_up />} />

        </Routes>
      </div>
    </Router>
    </MyProvider>

   
  );
}
