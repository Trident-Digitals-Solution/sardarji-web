import './NavBar.css';
import { ReactComponent as BellIcon } from './icons/caret.svg';
import { ReactComponent as MessengerIcon } from './icons/caret.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/caret.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function NavBar() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#home" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#home" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            leftIcon=""
            rightIcon={<ChevronIcon />}>
            Head
            </DropdownItem>
          <DropdownItem
            leftIcon={<ChevronIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="option1">
            option1
          </DropdownItem>
          <DropdownItem
            leftIcon={<ChevronIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="option2">
            option2
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'option1'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Option 1 subitem</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>subitem1</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>subitem2 </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>subitem3</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>subitem4!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'option2'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Option 2 subitem </h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>subitem1</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>subitem2</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>subitem3</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>subitem4</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default NavBar;
