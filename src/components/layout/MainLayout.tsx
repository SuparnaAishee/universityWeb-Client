import {  Layout} from "antd";
const { Content,  Header } =Layout;


import {  Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


// const items: MenuProps["items"] = [
//   {
//     key: "Dashboard",
//     label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
//   },
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "11",
//         label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
//       },
//       {
//         key: "13",
//         label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
//       },
//       {
//         key: "21",
//         label: <NavLink to="/admin/create-student">Create Student</NavLink>,
//       },
//     ],
//   },
// ];


const MainLayout=()=>{
    return (
      <Layout style={{height:"100vh"}}>
       <Sidebar/>
        <Layout>
          <Header style={{ padding: 0, }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
               
              }}
            >
            <Outlet/>
            </div>
          </Content>
         
        </Layout>
      </Layout>
    );
}
export default MainLayout;