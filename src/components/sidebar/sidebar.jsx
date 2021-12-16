import React, { useState } from "react";
import { Sidebar, Menu, Icon, Accordion } from "semantic-ui-react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import MenuItems from "./menuitems";
const SidebarComponent = ({ visible }) => {
  const [show, setShow] = useState({
    project: false,
    ecommerce: false,
    general: false,
    layout: false,
    navigation: false,
    dataEntry: false,
    dataDisplay: false,
    feedback: false,
    other: false,
    charts: false,
  });

  const ContentAccordion = (
    <>
      <Menu.Item className="menu__accordion-content menu__link">List</Menu.Item>
      <Menu.Item className="menu__accordion-content menu__link">List</Menu.Item>
    </>
  );

  const accordionTitle = (title, icon) => {
    return (
      <div className="slidebar__menu white menu__link">
        <Icon name={icon} className="menu__icon" />
        {title}
      </div>
    );
  };
  return (
    <Sidebar
      as={Menu}
      animation="push"
      visible={visible}
      icon="labeled"
      vertical
      inverted
      className="sidebar-menu"
    >
      <Menu.Header name="brand" className="slidbar__menu-header">
        Test
      </Menu.Header>
      <Menu.Item className="menu__name">APPS</Menu.Item>
      {MenuItems[0].data.map((menu, index) => {
        // eslint-disable-next-line
        if (!menu.submenu.length) {
          return (
            <Menu.Item key={index}>
              <div className="slidebar__menu menu__link">
                <Icon name={menu.icon} className="menu__icon" />
                <Link to={menu.path} className="white">
                  {menu.key}
                </Link>
              </div>
            </Menu.Item>
          );
        }
        if (menu.submenu.length) {
          return (
            <Accordion
              as={Menu}
              vertical
              inverted
              className="menu__accordion"
              key={index}
            >
              <Menu.Item className="menu__item">
                <Accordion.Title
                  active={show[menu.index]}
                  content={accordionTitle(`${menu.key}`, `${menu.icon}`)}
                  index={1}
                  onClick={() =>
                    setShow({ ...show, [menu.index]: !show[menu.index] })
                  }
                />
                <Accordion.Content
                  active={show[menu.index]}
                  content={ContentAccordion}
                />
              </Menu.Item>
            </Accordion>
          );
        }
      })}
      <Menu.Item className="menu__name">COMPONENTS</Menu.Item>
      {MenuItems[1].data.map((menu, menuIndex) => {
        return (
          <Accordion
            as={Menu}
            vertical
            inverted
            className="menu__accordion"
            key={menuIndex}
          >
            <Menu.Item className="menu__item">
              <Accordion.Title
                active={show[menu.index]}
                content={accordionTitle(`${menu.key}`, `${menu.icon}`)}
                index={1}
                onClick={() =>
                  setShow({ ...show, [menu.index]: !show[menu.index] })
                }
              />
              <Accordion.Content
                active={show[menu.index]}
                content={ContentAccordion}
              />
            </Menu.Item>
          </Accordion>
        );
      })}
    </Sidebar>
  );
};

export default SidebarComponent;
