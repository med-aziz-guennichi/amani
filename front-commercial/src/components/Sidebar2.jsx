import React from "react";
import { Link } from "react-router-dom";
const Sidebar2 = () => {
  return (
    <div>
      {/*begin::Sidebar*/}
      <div
        id="kt_app_sidebar"
        className="app-sidebar flex-column"
        data-kt-drawer="true"
        data-kt-drawer-name="app-sidebar"
        data-kt-drawer-activate="{default: true, lg: false}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="225px"
        data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
      >
        {/*begin::Logo*/}
        <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
          {/*begin::Logo image*/}
          <a href="../../demo1/dist/index.html">
            <img
             
              alt="Logo axia"
              src={
                process.env.PUBLIC_URL +
                "/dist/assets/media/logos/logo axia.png"
              }
              className="h-50px app-sidebar-logo-default"
            />
            <img
              alt="Logo"
              src={
                process.env.PUBLIC_URL +
                "/dist/assets/media/logos/logo axia.png"
              }
              className="h-20px app-sidebar-logo-minimize"
            />
          </a>
          {/*end::Logo image*/}
          {/*begin::Sidebar toggle*/}
          <div
            id="kt_app_sidebar_toggle"
            className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate"
            data-kt-toggle="true"
            data-kt-toggle-state="active"
            data-kt-toggle-target="body"
            data-kt-toggle-name="app-sidebar-minimize"
          >
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr079.svg*/}
            <span className="svg-icon svg-icon-2 rotate-180">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                  fill="currentColor"
                />
                <path
                  d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </div>
          {/*end::Sidebar toggle*/}
        </div>
        {/*end::Logo*/}
        {/*begin::sidebar menu*/}
        <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
          {/*begin::Menu wrapper*/}
          <div
            id="kt_app_sidebar_menu_wrapper"
            className="app-sidebar-wrapper hover-scroll-overlay-y my-5"
            data-kt-scroll="true"
            data-kt-scroll-activate="true"
            data-kt-scroll-height="auto"
            data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
            data-kt-scroll-wrappers="#kt_app_sidebar_menu"
            data-kt-scroll-offset="5px"
            data-kt-scroll-save-state="true"
          >
            {/*begin::Menu*/}
            <div
              className="menu menu-column menu-rounded menu-sub-indention px-3"
              id="#kt_app_sidebar_menu"
              data-kt-menu="true"
              data-kt-menu-expand="false"
            >
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item here show menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x={2}
                          y={2}
                          width={9}
                          height={9}
                          rx={2}
                          fill="currentColor"
                        />
                        <rect
                          opacity="0.3"
                          x={13}
                          y={2}
                          width={9}
                          height={9}
                          rx={2}
                          fill="currentColor"
                        />
                        <rect
                          opacity="0.3"
                          x={13}
                          y={13}
                          width={9}
                          height={9}
                          rx={2}
                          fill="currentColor"
                        />
                        <rect
                          opacity="0.3"
                          x={2}
                          y={13}
                          width={9}
                          height={9}
                          rx={2}
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <Link to='/'><span className="menu-title">Home</span></Link>
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}

                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item pt-5">
                {/*begin:Menu content*/}
                <div className="menu-content">
                  <span className="menu-heading fw-bold text-uppercase fs-7">
                    Pages
                  </span>
                </div>
                {/*end:Menu content*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    {/*begin::Svg Icon | path: icons/duotune/communication/com005.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.3"
                          d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <span className="menu-title">User Profile</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo1/dist/pages/user-profile/overview.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <Link to='/profile'></Link>
                      <span className="menu-title">Overview</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo1/dist/pages/user-profile/projects.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <Link to='/settings'><span className="menu-title">Settings</span></Link>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo1/dist/pages/user-profile/campaigns.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Documents</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}

                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}

                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    {/*begin::Svg Icon | path: icons/duotune/communication/com013.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                          fill="currentColor"
                        />
                        <path
                          d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <span className="menu-title">Leads</span>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Qualified leads</span>
                    </span>
                  </div>
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="right-start"
                className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    {/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z"
                          fill="currentColor"
                        />
                        <rect
                          opacity="0.3"
                          x={8}
                          y={3}
                          width={8}
                          height={8}
                          rx={4}
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <Link to='/clients'><span className="menu-title">Clients</span></Link>
                  
                </span>
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs048.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                          fill="currentColor"
                        />
                        <path
                          d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                          fill="currentColor"
                        />
                        <path
                          d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <Link to='/calendar'><span className="menu-title">Calendar</span></Link>
                  
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    {/*begin::Svg Icon | path: icons/duotune/finance/fin001.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.3"
                          d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.3"
                          d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <span className="menu-title">Products</span>
                </span>
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    {/*begin::Svg Icon | path: icons/duotune/graphs/gra010.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 7H2V11H22V7Z" fill="currentColor" />
                        <path
                          opacity="0.3"
                          d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <span className="menu-title">Bills</span>
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}

                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="click"
                className="menu-item menu-accordion"
              >
                {/*begin:Menu link*/}
                <span className="menu-link">
                  <span className="menu-icon">
                    {/*begin::Svg Icon | path: icons/duotune/art/art007.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z"
                          fill="currentColor"
                        />
                        <path
                          d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <Link to='/inbox'>                  <span className="menu-title">Inbox</span></Link>
                  <span className="menu-arrow" />
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-accordion menu-active-bg">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo1/dist/pages/pricing/column.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Column Pricing</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="../../demo1/dist/pages/pricing/table.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Table Pricing</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
            </div>
            {/*end::Menu*/}
          </div>
          {/*end::Menu wrapper*/}
        </div>
        {/*end::sidebar menu*/}
        {/*begin::Footer*/}

        {/*end::Footer*/}
      </div>
      {/*end::Sidebar*/}
    </div>
  );
};

export default Sidebar2;
