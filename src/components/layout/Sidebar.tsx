import { Layout, Menu } from "antd";
import { sideBarItemsGenerator } from "../../utils/sidebarItemGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.route";

const {  Sider } = Layout;

const UserRole={
ADMIN:'admin',
FACULTY:'faculty',
STUDENT:'student'
}

const Sidebar = () => {
    const role='student';
    let sidebarItems;

    switch(role){
        case UserRole.ADMIN:
        sidebarItems=sideBarItemsGenerator(adminPaths,UserRole.ADMIN);
        break;
        case UserRole.FACULTY:
        sidebarItems=sideBarItemsGenerator(facultyPaths,UserRole.FACULTY);
        break;
        case UserRole.STUDENT:
        sidebarItems=sideBarItemsGenerator(studentPaths,UserRole.STUDENT);
        break;

        default:
            break;
    }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
