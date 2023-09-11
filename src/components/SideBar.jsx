import { NavLink } from "react-router-dom";

export default function SideBar() {
	return (
		<>
            <aside className="left-sidebar">
                <div>
                    <div className="brand-logo d-flex align-items-center justify-content-between">
                        <NavLink
                            href="/"
                            className="text-nowrap logo-img"
                        >
                            <img
                                src="/src/assets/images/logo_x2.png"
                                width="180"
                                alt=""
                            />
                        </NavLink>
                        <div
                            className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
                            id="sidebarCollapse"
                        >
                            <i className="ti ti-x fs-8"></i>
                        </div>
                    </div>
                    <nav
                        className="sidebar-nav scroll-sidebar"
                        data-simplebar=""
                    >
                        <ul id="sidebarnav">
                            <li className="nav-small-cap">
                                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                <span className="hide-menu">Home</span>
                            </li>
                            <li className="sidebar-item">
                                <NavLink
                                    className="sidebar-link"
                                    to="/"
                                >
                                    <span>
                                        <i className="ti ti-layout-dashboard"></i>
                                    </span>
                                    <span className="hide-menu">
                                        Dashboard
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-small-cap">
                                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                <span className="hide-menu">
                                    Operations
                                </span>
                            </li>
                            <li className="sidebar-item">
                                <NavLink
                                    className="sidebar-link"
                                    to="/orders"
                                >
                                    <span>
                                        <i className="ti ti-article"></i>
                                    </span>
                                    <span className="hide-menu">
                                        Orders
                                    </span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./ui-buttons.html"
                                    aria-expanded="false"
                                >
                                    <span>
                                        <i className="ti ti-article"></i>
                                    </span>
                                    <span className="hide-menu">
                                        Buttons
                                    </span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./ui-alerts.html"
                                    aria-expanded="false"
                                >
                                    <span>
                                        <i className="ti ti-alert-circle"></i>
                                    </span>
                                    <span className="hide-menu">
                                        Alerts
                                    </span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./ui-card.html"
                                    aria-expanded="false"
                                >
                                    <span>
                                        <i className="ti ti-cards"></i>
                                    </span>
                                    <span className="hide-menu">Card</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./ui-forms.html"
                                    aria-expanded="false"
                                >
                                    <span>
                                        <i className="ti ti-file-description"></i>
                                    </span>
                                    <span className="hide-menu">Forms</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./ui-typography.html"
                                    aria-expanded="false"
                                >
                                    <span>
                                        <i className="ti ti-typography"></i>
                                    </span>
                                    <span className="hide-menu">
                                        Typography
                                    </span>
                                </a>
                            </li>
                            <li className="nav-small-cap">
                                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                <span className="hide-menu">AUTH</span>
                            </li>
                            <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./authentication-login.html"
                                    aria-expanded="false"
                                >
                                    <span>
                                        <i className="ti ti-login"></i>
                                    </span>
                                    <span className="hide-menu">Login</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
		</>
	);
}
