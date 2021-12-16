import React from "react";
import { Dropdown, Icon, Menu } from "semantic-ui-react";
import "./header.css";

const Header = ({ visible, setVisible }) => {
  const trigger = (
    <span>
      <Icon name="user circle outline" size="big" className="header__user" />
    </span>
  );

  return (
    <Menu inverted borderless fixed="top" className="header-menu">
      <Menu.Item>
        <Icon
          name={visible ? "indent" : "align justify"}
          aria-label="menu"
          className="menu-icon"
          size="large"
          onClick={() => setVisible(!visible)}
        />
        <div className="ui icon input header__search">
          <input
            className="prompt input__search__header"
            type="text"
            placeholder="Search..."
          />
          <i className="search link icon" />
        </div>
      </Menu.Item>
      <Menu.Item
        style={{
          marginLeft:
            window.innerWidth < 480
              ? visible
                ? "auto"
                : "auto"
              : visible
              ? "calc(100% - 760px)"
              : "calc(100% - 500px)",
        }}
      >
        {window.innerWidth > 426 ? (
          <>
            <div className="icon-content">
              <Icon
                name="bell outline"
                aria-label="menu"
                className="menu-icon"
                size="large"
              />
            </div>
            <div className="icon-content">
              <Icon
                name="globe"
                aria-label="menu"
                className="menu-icon"
                size="large"
              />
            </div>
          </>
        ) : null}

        <Dropdown trigger={trigger} className="user__dropdown">
          <Dropdown.Menu className="user__dropdown-menu">
            <Dropdown.Item className="dropdown__user-info">
              <div>
                <Icon
                  name="user circle outline"
                  aria-label="menu"
                  className="menu-icon"
                />
              </div>
              <div>
                <h2>Elon Reeve Musk</h2>
                <p>Frontend Developer</p>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Icon name="edit outline" />
              Edit Profile
            </Dropdown.Item>
            <Dropdown.Item>
              <Icon name="setting" />
              Account Setting
            </Dropdown.Item>
            <Dropdown.Item>
              <Icon name="building" />
              Billing
            </Dropdown.Item>
            <Dropdown.Item>
              <Icon name="question circle outline" />
              Help Center
            </Dropdown.Item>
            <Dropdown.Item>
              <Icon name="sign-out" />
              Sign Out
            </Dropdown.Item>
            {window.innerWidth < 427 ? (
              <Dropdown.Item>
                <Icon name="setting" />
                <Icon name="bell outline" />
                <Icon name="bell globe" />
              </Dropdown.Item>
            ) : null}
          </Dropdown.Menu>
        </Dropdown>
        {window.innerWidth > 426 ? (
          <div className="icon-content">
            <Icon
              name="setting"
              aria-label="menu"
              className="menu-icon"
              size="large"
            />
          </div>
        ) : null}
      </Menu.Item>
    </Menu>
  );
};

export default Header;
