import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Rest from '../components/Rest'
import Footer from '../components/Footer'

const Inbox = () => {
  return (
<div id="kt_app_body" data-kt-app-layout="dark-sidebar" data-kt-app-header-fixed="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-hoverable="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" data-kt-app-toolbar-enabled="true" className="app-default">
  <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
    {/*begin::Page*/}
    <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
<Header/>
      {/*begin::Wrapper*/}
      <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
<Sidebar/>
        {/*begin::Main*/}
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
          {/*begin::Content wrapper*/}
          <div className="d-flex flex-column flex-column-fluid">
            {/*begin::Toolbar*/}
            <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
              {/*begin::Toolbar container*/}
              <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                {/*begin::Page title*/}
                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                  {/*begin::Title*/}
                  <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Messages</h1>
                  {/*end::Title*/}
                  {/*begin::Breadcrumb*/}
                  <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                    {/*begin::Item*/}
                    <li className="breadcrumb-item text-muted">
                      <a href="../../demo1/dist/index.html" className="text-muted text-hover-primary">Home</a>
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item">
                      <span className="bullet bg-gray-400 w-5px h-2px" />
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item text-muted">Inbox</li>
                    {/*end::Item*/}
                  </ul>
                  {/*end::Breadcrumb*/}
                </div>
                {/*end::Page title*/}
                {/*begin::Actions*/}
                <div className="d-flex align-items-center gap-2 gap-lg-3">
                  {/*begin::Filter menu*/}
                  <div className="m-0">
                    {/*begin::Menu toggle*/}
                    <a href="#" className="btn btn-sm btn-flex bg-body btn-color-gray-700 btn-active-color-primary fw-bold" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                      {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
                      <span className="svg-icon svg-icon-6 svg-icon-muted me-1">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}Filter</a>
                    {/*end::Menu toggle*/}
                    {/*begin::Menu 1*/}
                    <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_63d0da02e79ab">
                      {/*begin::Header*/}
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                      </div>
                      {/*end::Header*/}
                      {/*begin::Menu separator*/}
                      <div className="separator border-gray-200" />
                      {/*end::Menu separator*/}
                      {/*begin::Form*/}
                      <div className="px-7 py-5">
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">Status:</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div>
                            <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_63d0da02e79ab" data-allow-clear="true">
                              <option />
                              <option value={1}>Approved</option>
                              <option value={2}>Pending</option>
                              <option value={2}>In Process</option>
                              <option value={2}>Rejected</option>
                            </select>
                          </div>
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">Member Type:</label>
                          {/*end::Label*/}
                          {/*begin::Options*/}
                          <div className="d-flex">
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                              <span className="form-check-label">Author</span>
                            </label>
                            {/*end::Options*/}
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={2} defaultChecked="checked" />
                              <span className="form-check-label">Customer</span>
                            </label>
                            {/*end::Options*/}
                          </div>
                          {/*end::Options*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">Notifications:</label>
                          {/*end::Label*/}
                          {/*begin::Switch*/}
                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" defaultValue name="notifications" defaultChecked="checked" />
                            <label className="form-check-label">Enabled</label>
                          </div>
                          {/*end::Switch*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Actions*/}
                        <div className="d-flex justify-content-end">
                          <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                          <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                        </div>
                        {/*end::Actions*/}
                      </div>
                      {/*end::Form*/}
                    </div>
                    {/*end::Menu 1*/}
                  </div>
                  {/*end::Filter menu*/}
                  {/*begin::Secondary button*/}
                  {/*end::Secondary button*/}
                  {/*begin::Primary button*/}
                  <a href="#" className="btn btn-sm fw-bold btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Create</a>
                  {/*end::Primary button*/}
                </div>
                {/*end::Actions*/}
              </div>
              {/*end::Toolbar container*/}
            </div>
            {/*end::Toolbar*/}
            {/*begin::Content*/}
            <div id="kt_app_content" className="app-content flex-column-fluid">
              {/*begin::Content container*/}
              <div id="kt_app_content_container" className="app-container container-xxl">
                {/*begin::Inbox App - Messages */}
                <div className="d-flex flex-column flex-lg-row">
                  {/*begin::Sidebar*/}
                  <div className="d-none d-lg-flex flex-column flex-lg-row-auto w-100 w-lg-275px" data-kt-drawer="true" data-kt-drawer-name="inbox-aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_inbox_aside_toggle">
                    {/*begin::Sticky aside*/}
                    <div className="card card-flush mb-0" data-kt-sticky="true" data-kt-sticky-name="inbox-aside-sticky" data-kt-sticky-offset="{default: false, xl: '100px'}" data-kt-sticky-width="{lg: '275px'}" data-kt-sticky-left="auto" data-kt-sticky-top="100px" data-kt-sticky-animation="false" data-kt-sticky-zindex={95}>
                      {/*begin::Aside content*/}
                      <div className="card-body">
                        {/*begin::Button*/}
                        <a href="../../demo1/dist/apps/inbox/compose.html" className="btn btn-primary fw-bold w-100 mb-8">New Message</a>
                        {/*end::Button*/}
                        {/*begin::Menu*/}
                        <div className="menu menu-column menu-rounded menu-state-bg menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary mb-10">
                          {/*begin::Menu item*/}
                          <div className="menu-item mb-3">
                            {/*begin::Inbox*/}
                            <span className="menu-link active">
                              <span className="menu-icon">
                                {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                <span className="svg-icon svg-icon-2 me-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor" />
                                    <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="menu-title fw-bold">Inbox</span>
                              <span className="badge badge-light-success">3</span>
                            </span>
                            {/*end::Inbox*/}
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item mb-3">
                            {/*begin::Marked*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs024.svg*/}
                                <span className="svg-icon svg-icon-2 me-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M7.16973 20.95C6.26973 21.55 5.16972 20.75 5.46972 19.75L7.36973 14.05L2.46972 10.55C1.56972 9.95005 2.06973 8.55005 3.06973 8.55005H20.8697C21.9697 8.55005 22.3697 9.95005 21.4697 10.55L7.16973 20.95Z" fill="currentColor" />
                                    <path d="M11.0697 2.75L7.46973 13.95L16.9697 20.85C17.8697 21.45 18.9697 20.65 18.6697 19.65L13.1697 2.75C12.7697 1.75 11.3697 1.75 11.0697 2.75Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="menu-title fw-bold">Marked</span>
                            </span>
                            {/*end::Marked*/}
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item mb-3">
                            {/*begin::Draft*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen009.svg*/}
                                <span className="svg-icon svg-icon-2 me-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M21 22H14C13.4 22 13 21.6 13 21V3C13 2.4 13.4 2 14 2H21C21.6 2 22 2.4 22 3V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
                                    <path d="M10 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H10C10.6 2 11 2.4 11 3V21C11 21.6 10.6 22 10 22Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="menu-title fw-bold">Draft</span>
                              <span className="badge badge-light-warning">5</span>
                            </span>
                            {/*end::Draft*/}
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item mb-3">
                            {/*begin::Sent*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen016.svg*/}
                                <span className="svg-icon svg-icon-2 me-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.43 8.56949L10.744 15.1395C10.6422 15.282 10.5804 15.4492 10.5651 15.6236C10.5498 15.7981 10.5815 15.9734 10.657 16.1315L13.194 21.4425C13.2737 21.6097 13.3991 21.751 13.5557 21.8499C13.7123 21.9488 13.8938 22.0014 14.079 22.0015H14.117C14.3087 21.9941 14.4941 21.9307 14.6502 21.8191C14.8062 21.7075 14.9261 21.5526 14.995 21.3735L21.933 3.33649C22.0011 3.15918 22.0164 2.96594 21.977 2.78013C21.9376 2.59432 21.8452 2.4239 21.711 2.28949L15.43 8.56949Z" fill="currentColor" />
                                    <path opacity="0.3" d="M20.664 2.06648L2.62602 9.00148C2.44768 9.07085 2.29348 9.19082 2.1824 9.34663C2.07131 9.50244 2.00818 9.68731 2.00074 9.87853C1.99331 10.0697 2.04189 10.259 2.14054 10.4229C2.23919 10.5869 2.38359 10.7185 2.55601 10.8015L7.86601 13.3365C8.02383 13.4126 8.19925 13.4448 8.37382 13.4297C8.54839 13.4145 8.71565 13.3526 8.85801 13.2505L15.43 8.56548L21.711 2.28448C21.5762 2.15096 21.4055 2.05932 21.2198 2.02064C21.034 1.98196 20.8409 1.99788 20.664 2.06648Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="menu-title fw-bold">Sent</span>
                            </span>
                            {/*end::Sent*/}
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item">
                            {/*begin::Trash*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                <span className="svg-icon svg-icon-2 me-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="menu-title fw-bold">Trash</span>
                            </span>
                            {/*end::Trash*/}
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu*/}
                        {/*begin::Menu*/}
                        <div className="menu menu-column menu-rounded menu-state-bg menu-state-title-primary">
                          {/*begin::Menu item*/}
                          <div className="menu-item mb-3">
                            {/*begin::Custom work*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs009.svg*/}
                                <span className="svg-icon svg-icon-6 svg-icon-danger me-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C15.3 18 18 15.3 18 12C18 8.7 15.3 6 12 6Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="menu-title fw-semibold">Custom Work</span>
                              <span className="badge badge-light-danger">6</span>
                            </span>
                            {/*end::Custom work*/}
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item mb-3">
                            {/*begin::Partnership*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs009.svg*/}
                                <span className="svg-icon svg-icon-6 svg-icon-success me-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C15.3 18 18 15.3 18 12C18 8.7 15.3 6 12 6Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="menu-title fw-semibold">Partnership</span>
                            </span>
                            {/*end::Partnership*/}
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item mb-3">
                            {/*begin::In progress*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs009.svg*/}
                                <span className="svg-icon svg-icon-6 svg-icon-info me-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C15.3 18 18 15.3 18 12C18 8.7 15.3 6 12 6Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="menu-title fw-semibold">In Progress</span>
                            </span>
                            {/*end::In progress*/}
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item">
                            {/*begin::Add label*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr087.svg*/}
                                <span className="svg-icon svg-icon-2 me-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x={11} y={18} width={12} height={2} rx={1} transform="rotate(-90 11 18)" fill="currentColor" />
                                    <rect x={6} y={11} width={12} height={2} rx={1} fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="menu-title fw-semibold">Add Label</span>
                            </span>
                            {/*end::Add label*/}
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu*/}
                      </div>
                      {/*end::Aside content*/}
                    </div>
                    {/*end::Sticky aside*/}
                  </div>
                  {/*end::Sidebar*/}
                  {/*begin::Content*/}
                  <div className="flex-lg-row-fluid ms-lg-7 ms-xl-10">
                    {/*begin::Card*/}
                    <div className="card">
                      <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                        {/*begin::Actions*/}
                        <div className="d-flex flex-wrap gap-2">
                          {/*begin::Checkbox*/}
                          <div className="form-check form-check-sm form-check-custom form-check-solid me-4 me-lg-7">
                            <input className="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_inbox_listing .form-check-input" defaultValue={1} />
                          </div>
                          {/*end::Checkbox*/}
                          {/*begin::Reload*/}
                          <a href="#" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-placement="top" title="Reload">
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr029.svg*/}
                            <span className="svg-icon svg-icon-2">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 20.7259C14.6 21.2259 14.2 21.826 13.7 21.926C13.2 22.026 12.6 22.0259 12.1 22.0259C9.5 22.0259 6.9 21.0259 5 19.1259C1.4 15.5259 1.09998 9.72592 4.29998 5.82592L5.70001 7.22595C3.30001 10.3259 3.59999 14.8259 6.39999 17.7259C8.19999 19.5259 10.8 20.426 13.4 19.926C13.9 19.826 14.4 20.2259 14.5 20.7259ZM18.4 16.8259L19.8 18.2259C22.9 14.3259 22.7 8.52593 19 4.92593C16.7 2.62593 13.5 1.62594 10.3 2.12594C9.79998 2.22594 9.4 2.72595 9.5 3.22595C9.6 3.72595 10.1 4.12594 10.6 4.02594C13.1 3.62594 15.7 4.42595 17.6 6.22595C20.5 9.22595 20.7 13.7259 18.4 16.8259Z" fill="currentColor" />
                                <path opacity="0.3" d="M2 3.62592H7C7.6 3.62592 8 4.02592 8 4.62592V9.62589L2 3.62592ZM16 14.4259V19.4259C16 20.0259 16.4 20.4259 17 20.4259H22L16 14.4259Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          {/*end::Reload*/}
                          {/*begin::Archive*/}
                          <a href="#" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-placement="top" title="Archive">
                            {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                            <span className="svg-icon svg-icon-2">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor" />
                                <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          {/*end::Archive*/}
                          {/*begin::Delete*/}
                          <a href="#" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-placement="top" title="Delete">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                            <span className="svg-icon svg-icon-2">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          {/*end::Delete*/}
                          {/*begin::Filter*/}
                          <div>
                            <a href="#" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                            {/*begin::Menu*/}
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-inbox-listing-filter="show_all">All</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-inbox-listing-filter="show_read">Read</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-inbox-listing-filter="show_unread">Unread</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-inbox-listing-filter="show_starred">Starred</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-inbox-listing-filter="show_unstarred">Unstarred</a>
                              </div>
                              {/*end::Menu item*/}
                            </div>
                            {/*end::Menu*/}
                          </div>
                          {/*end::Filter*/}
                          {/*begin::Sort*/}
                          <span>
                            <a href="#" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-placement="top" title="Sort">
                              {/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
                              <span className="svg-icon svg-icon-3 m-0">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect x={10} y={10} width={4} height={4} rx={2} fill="currentColor" />
                                  <rect x={17} y={10} width={4} height={4} rx={2} fill="currentColor" />
                                  <rect x={3} y={10} width={4} height={4} rx={2} fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                            {/*begin::Menu*/}
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-inbox-listing-filter="filter_newest">Newest</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-inbox-listing-filter="filter_oldest">Oldest</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-inbox-listing-filter="filter_unread">Unread</a>
                              </div>
                              {/*end::Menu item*/}
                            </div>
                            {/*end::Menu*/}
                          </span>
                          {/*end::Sort*/}
                        </div>
                        {/*end::Actions*/}
                        {/*begin::Actions*/}
                        <div className="d-flex align-items-center flex-wrap gap-2">
                          {/*begin::Search*/}
                          <div className="d-flex align-items-center position-relative">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                            <span className="svg-icon svg-icon-2 position-absolute ms-4">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height={2} rx={1} transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                                <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                            <input type="text" data-kt-inbox-listing-filter="search" className="form-control form-control-sm form-control-solid mw-100 min-w-125px min-w-lg-150px min-w-xxl-200px ps-12" placeholder="Search Inbox" />
                          </div>
                          {/*end::Search*/}
                          {/*begin::Toggle*/}
                          <a href="#" className="btn btn-sm btn-icon btn-color-primary btn-light btn-active-light-primary" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-placement="top" title="Toggle inbox menu" id="kt_inbox_aside_toggle">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen059.svg*/}
                            <span className="svg-icon svg-icon-3 m-0">
                              <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y={6} width={16} height={3} rx="1.5" fill="currentColor" />
                                <rect opacity="0.3" y={12} width={8} height={3} rx="1.5" fill="currentColor" />
                                <rect opacity="0.3" width={12} height={3} rx="1.5" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          {/*end::Toggle*/}
                        </div>
                        {/*end::Actions*/}
                      </div>
                      <div className="card-body p-0">
                        {/*begin::Table*/}
                        <table className="table table-hover table-row-dashed fs-6 gy-5 my-0" id="kt_inbox_listing">
                          {/*begin::Table head*/}
                          <thead className="d-none">
                            <tr>
                              <th>Checkbox</th>
                              <th>Actions</th>
                              <th>Author</th>
                              <th>Title</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          {/*end::Table head*/}
                          {/*begin::Table body*/}
                          <tbody>
                            <tr>
                              <td className="ps-9">
                                {/*begin::Checkbox*/}
                                <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                  <input className="form-check-input" type="checkbox" defaultValue={1} />
                                </div>
                                {/*end::Checkbox*/}
                              </td>
                              <td className="min-w-80px">
                                {/*begin::Star*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Star">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-3">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Star*/}
                                {/*begin::Important*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Mark as important">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                  <span className="svg-icon svg-icon-4 mt-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Important*/}
                              </td>
                              {/*begin::Author*/}
                              <td className="w-150px w-md-175px">
                                <a href="../../demo1/dist/apps/inbox/reply.html" className="d-flex align-items-center text-dark">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px me-3">
                                    <div className="symbol-label bg-light-danger">
                                      <span className="text-danger">M</span>
                                    </div>
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Name*/}
                                  <span className="fw-semibold">Melody Macy</span>
                                  {/*end::Name*/}
                                </a>
                              </td>
                              {/*end::Author*/}
                              {/*begin::Title*/}
                              <td>
                                <div className="text-dark mb-1">
                                  {/*begin::Heading*/}
                                  <a href="../../demo1/dist/apps/inbox/reply.html" className="text-dark">
                                    <span className="fw-bold">Digital PPV Customer Confirmation</span>
                                    <span className="fw-bold d-none d-md-inine">-</span>
                                    <span className="d-none d-md-inine text-muted">Thank you for ordering UFC 240 Holloway vs Edgar Alternate camera angles...</span>
                                  </a>
                                  {/*end::Heading*/}
                                </div>
                                {/*begin::Badges*/}
                                <div className="badge badge-light-primary">inbox</div>
                                <div className="badge badge-light-warning">task</div>
                                {/*end::Badges*/}
                              </td>
                              {/*end::Title*/}
                              {/*begin::Date*/}
                              <td className="w-100px text-end fs-7 pe-9">
                                <span className="fw-semibold">8:30 PM</span>
                              </td>
                              {/*end::Date*/}
                            </tr>
                            <tr>
                              <td className="ps-9">
                                {/*begin::Checkbox*/}
                                <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                  <input className="form-check-input" type="checkbox" defaultValue={1} />
                                </div>
                                {/*end::Checkbox*/}
                              </td>
                              <td className="min-w-80px">
                                {/*begin::Star*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Star">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-3">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Star*/}
                                {/*begin::Important*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Mark as important">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                  <span className="svg-icon svg-icon-4 mt-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Important*/}
                              </td>
                              {/*begin::Author*/}
                              <td className="w-150px w-md-175px">
                                <a href="../../demo1/dist/apps/inbox/reply.html" className="d-flex align-items-center text-dark">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px me-3">
                                    <span className="symbol-label" style={{backgroundImage: 'url(assets/media/avatars/300-1.jpg)'}} />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Name*/}
                                  <span className="fw-semibold">Max Smith</span>
                                  {/*end::Name*/}
                                </a>
                              </td>
                              {/*end::Author*/}
                              {/*begin::Title*/}
                              <td>
                                <div className="text-dark mb-1">
                                  {/*begin::Heading*/}
                                  <a href="../../demo1/dist/apps/inbox/reply.html" className="text-dark">
                                    <span className="fw-bold">Your iBuy.com grocery shopping confirmation</span>
                                    <span className="fw-bold d-none d-md-inine">-</span>
                                    <span className="d-none d-md-inine text-muted">Please make sure that you have one of the following cards with you when we deliver your order...</span>
                                  </a>
                                  {/*end::Heading*/}
                                </div>
                              </td>
                              {/*end::Title*/}
                              {/*begin::Date*/}
                              <td className="w-100px text-end fs-7 pe-9">
                                <span className="fw-semibold">day ago</span>
                              </td>
                              {/*end::Date*/}
                            </tr>
                            <tr>
                              <td className="ps-9">
                                {/*begin::Checkbox*/}
                                <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                  <input className="form-check-input" type="checkbox" defaultValue={1} />
                                </div>
                                {/*end::Checkbox*/}
                              </td>
                              <td className="min-w-80px">
                                {/*begin::Star*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Star">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-3">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Star*/}
                                {/*begin::Important*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Mark as important">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                  <span className="svg-icon svg-icon-4 mt-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Important*/}
                              </td>
                              {/*begin::Author*/}
                              <td className="w-150px w-md-175px">
                                <a href="../../demo1/dist/apps/inbox/reply.html" className="d-flex align-items-center text-dark">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px me-3">
                                    <span className="symbol-label" style={{backgroundImage: 'url(assets/media/avatars/300-5.jpg)'}} />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Name*/}
                                  <span className="fw-semibold">Sean Bean</span>
                                  {/*end::Name*/}
                                </a>
                              </td>
                              {/*end::Author*/}
                              {/*begin::Title*/}
                              <td>
                                <div className="text-dark mb-1">
                                  {/*begin::Heading*/}
                                  <a href="../../demo1/dist/apps/inbox/reply.html" className="text-dark">
                                    <span className="fw-bold">Your Order #224820998666029 has been Confirmed</span>
                                    <span className="fw-bold d-none d-md-inine">-</span>
                                    <span className="d-none d-md-inine text-muted">Your Order #224820998666029 has been placed on Saturday, 29 June</span>
                                  </a>
                                  {/*end::Heading*/}
                                </div>
                              </td>
                              {/*end::Title*/}
                              {/*begin::Date*/}
                              <td className="w-100px text-end fs-7 pe-9">
                                <span className="fw-semibold text-muted">11:20 PM</span>
                              </td>
                              {/*end::Date*/}
                            </tr>
                            <tr>
                              <td className="ps-9">
                                {/*begin::Checkbox*/}
                                <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                  <input className="form-check-input" type="checkbox" defaultValue={1} />
                                </div>
                                {/*end::Checkbox*/}
                              </td>
                              <td className="min-w-80px">
                                {/*begin::Star*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Star">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-3">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Star*/}
                                {/*begin::Important*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Mark as important">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                  <span className="svg-icon svg-icon-4 mt-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Important*/}
                              </td>
                              {/*begin::Author*/}
                              <td className="w-150px w-md-175px">
                                <a href="../../demo1/dist/apps/inbox/reply.html" className="d-flex align-items-center text-dark">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px me-3">
                                    <span className="symbol-label" style={{backgroundImage: 'url(assets/media/avatars/300-25.jpg)'}} />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Name*/}
                                  <span className="fw-semibold">Brian Cox</span>
                                  {/*end::Name*/}
                                </a>
                              </td>
                              {/*end::Author*/}
                              {/*begin::Title*/}
                              <td>
                                <div className="text-dark mb-1">
                                  {/*begin::Heading*/}
                                  <a href="../../demo1/dist/apps/inbox/reply.html" className="text-dark">
                                    <span className="fw-bold">Payment Notification DLOP2329KD</span>
                                    <span className="fw-bold d-none d-md-inine">-</span>
                                    <span className="d-none d-md-inine text-muted">Your payment of 4500USD to AirCar has been authorized and confirmed, thank you your account. This...</span>
                                  </a>
                                  {/*end::Heading*/}
                                </div>
                                {/*begin::Badges*/}
                                <div className="badge badge-light-danger">new</div>
                                {/*end::Badges*/}
                              </td>
                              {/*end::Title*/}
                              {/*begin::Date*/}
                              <td className="w-100px text-end fs-7 pe-9">
                                <span className="fw-semibold text-muted">2 days ago</span>
                              </td>
                              {/*end::Date*/}
                            </tr>
                            <tr>
                              <td className="ps-9">
                                {/*begin::Checkbox*/}
                                <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                  <input className="form-check-input" type="checkbox" defaultValue={1} />
                                </div>
                                {/*end::Checkbox*/}
                              </td>
                              <td className="min-w-80px">
                                {/*begin::Star*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Star">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-3">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Star*/}
                                {/*begin::Important*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Mark as important">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                  <span className="svg-icon svg-icon-4 mt-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Important*/}
                              </td>
                              {/*begin::Author*/}
                              <td className="w-150px w-md-175px">
                                <a href="../../demo1/dist/apps/inbox/reply.html" className="d-flex align-items-center text-dark">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px me-3">
                                    <div className="symbol-label bg-light-warning">
                                      <span className="text-warning">C</span>
                                    </div>
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Name*/}
                                  <span className="fw-semibold">Mikaela Collins</span>
                                  {/*end::Name*/}
                                </a>
                              </td>
                              {/*end::Author*/}
                              {/*begin::Title*/}
                              <td>
                                <div className="text-dark mb-1">
                                  {/*begin::Heading*/}
                                  <a href="../../demo1/dist/apps/inbox/reply.html" className="text-dark">
                                    <span className="fw-bold">Congratulations on your iRun Coach subscription</span>
                                    <span className="fw-bold d-none d-md-inine">-</span>
                                    <span className="d-none d-md-inine text-muted">Congratulations on your iRun Coach subscription. You made no space for excuses and you</span>
                                  </a>
                                  {/*end::Heading*/}
                                </div>
                              </td>
                              {/*end::Title*/}
                              {/*begin::Date*/}
                              <td className="w-100px text-end fs-7 pe-9">
                                <span className="fw-semibold text-muted">July 25</span>
                              </td>
                              {/*end::Date*/}
                            </tr>
                            <tr>
                              <td className="ps-9">
                                {/*begin::Checkbox*/}
                                <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                  <input className="form-check-input" type="checkbox" defaultValue={1} />
                                </div>
                                {/*end::Checkbox*/}
                              </td>
                              <td className="min-w-80px">
                                {/*begin::Star*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Star">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-3">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Star*/}
                                {/*begin::Important*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Mark as important">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                  <span className="svg-icon svg-icon-4 mt-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Important*/}
                              </td>
                              {/*begin::Author*/}
                              <td className="w-150px w-md-175px">
                                <a href="../../demo1/dist/apps/inbox/reply.html" className="d-flex align-items-center text-dark">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px me-3">
                                    <span className="symbol-label" style={{backgroundImage: 'url(assets/media/avatars/300-9.jpg)'}} />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Name*/}
                                  <span className="fw-semibold">Francis Mitcham</span>
                                  {/*end::Name*/}
                                </a>
                              </td>
                              {/*end::Author*/}
                              {/*begin::Title*/}
                              <td>
                                <div className="text-dark mb-1">
                                  {/*begin::Heading*/}
                                  <a href="../../demo1/dist/apps/inbox/reply.html" className="text-dark">
                                    <span className="fw-bold">Pay bills &amp; win up to 600$ Cashback!</span>
                                    <span className="fw-bold d-none d-md-inine">-</span>
                                    <span className="d-none d-md-inine text-muted">Congratulations on your iRun Coach subscription. You made no space for excuses and you decided on a healthier and happier life...</span>
                                  </a>
                                  {/*end::Heading*/}
                                </div>
                              </td>
                              {/*end::Title*/}
                              {/*begin::Date*/}
                              <td className="w-100px text-end fs-7 pe-9">
                                <span className="fw-semibold text-muted">July 24</span>
                              </td>
                              {/*end::Date*/}
                            </tr>
                            <tr>
                              <td className="ps-9">
                                {/*begin::Checkbox*/}
                                <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                  <input className="form-check-input" type="checkbox" defaultValue={1} />
                                </div>
                                {/*end::Checkbox*/}
                              </td>
                              <td className="min-w-80px">
                                {/*begin::Star*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Star">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-3">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Star*/}
                                {/*begin::Important*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Mark as important">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                  <span className="svg-icon svg-icon-4 mt-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Important*/}
                              </td>
                              {/*begin::Author*/}
                              <td className="w-150px w-md-175px">
                                <a href="../../demo1/dist/apps/inbox/reply.html" className="d-flex align-items-center text-dark">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px me-3">
                                    <div className="symbol-label bg-light-danger">
                                      <span className="text-danger">O</span>
                                    </div>
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Name*/}
                                  <span className="fw-semibold">Olivia Wild</span>
                                  {/*end::Name*/}
                                </a>
                              </td>
                              {/*end::Author*/}
                              {/*begin::Title*/}
                              <td>
                                <div className="text-dark mb-1">
                                  {/*begin::Heading*/}
                                  <a href="../../demo1/dist/apps/inbox/reply.html" className="text-dark">
                                    <span className="fw-bold">Activate your LIPO Account today</span>
                                    <span className="fw-bold d-none d-md-inine">-</span>
                                    <span className="d-none d-md-inine text-muted">Thank you for creating a LIPO Account. Please click the link below to activate your account.</span>
                                  </a>
                                  {/*end::Heading*/}
                                </div>
                                {/*begin::Badges*/}
                                <div className="badge badge-light-warning">task</div>
                                {/*end::Badges*/}
                              </td>
                              {/*end::Title*/}
                              {/*begin::Date*/}
                              <td className="w-100px text-end fs-7 pe-9">
                                <span className="fw-semibold text-muted">July 13</span>
                              </td>
                              {/*end::Date*/}
                            </tr>
                            <tr>
                              <td className="ps-9">
                                {/*begin::Checkbox*/}
                                <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                  <input className="form-check-input" type="checkbox" defaultValue={1} />
                                </div>
                                {/*end::Checkbox*/}
                              </td>
                              <td className="min-w-80px">
                                {/*begin::Star*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Star">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-3">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Star*/}
                                {/*begin::Important*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Mark as important">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                  <span className="svg-icon svg-icon-4 mt-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Important*/}
                              </td>
                              {/*begin::Author*/}
                              <td className="w-150px w-md-175px">
                                <a href="../../demo1/dist/apps/inbox/reply.html" className="d-flex align-items-center text-dark">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px me-3">
                                    <div className="symbol-label bg-light-primary">
                                      <span className="text-primary">N</span>
                                    </div>
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Name*/}
                                  <span className="fw-semibold">Neil Owen</span>
                                  {/*end::Name*/}
                                </a>
                              </td>
                              {/*end::Author*/}
                              {/*begin::Title*/}
                              <td>
                                <div className="text-dark mb-1">
                                  {/*begin::Heading*/}
                                  <a href="../../demo1/dist/apps/inbox/reply.html" className="text-dark">
                                    <span className="fw-bold">About your request for PalmLake</span>
                                    <span className="fw-bold d-none d-md-inine">-</span>
                                    <span className="d-none d-md-inine text-muted">What you requested can't be arranged ahead of time but PalmLake said they'll do their best to accommodate you upon arrival....</span>
                                  </a>
                                  {/*end::Heading*/}
                                </div>
                              </td>
                              {/*end::Title*/}
                              {/*begin::Date*/}
                              <td className="w-100px text-end fs-7 pe-9">
                                <span className="fw-semibold text-muted">May 25</span>
                              </td>
                              {/*end::Date*/}
                            </tr>
                            <tr>
                              <td className="ps-9">
                                {/*begin::Checkbox*/}
                                <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                  <input className="form-check-input" type="checkbox" defaultValue={1} />
                                </div>
                                {/*end::Checkbox*/}
                              </td>
                              <td className="min-w-80px">
                                {/*begin::Star*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Star">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-3">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Star*/}
                                {/*begin::Important*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Mark as important">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                  <span className="svg-icon svg-icon-4 mt-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Important*/}
                              </td>
                              {/*begin::Author*/}
                              <td className="w-150px w-md-175px">
                                <a href="../../demo1/dist/apps/inbox/reply.html" className="d-flex align-items-center text-dark">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px me-3">
                                    <span className="symbol-label" style={{backgroundImage: 'url(assets/media/avatars/300-23.jpg)'}} />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Name*/}
                                  <span className="fw-semibold">Dan Wilson</span>
                                  {/*end::Name*/}
                                </a>
                              </td>
                              {/*end::Author*/}
                              {/*begin::Title*/}
                              <td>
                                <div className="text-dark mb-1">
                                  {/*begin::Heading*/}
                                  <a href="../../demo1/dist/apps/inbox/reply.html" className="text-dark">
                                    <span className="fw-bold">Welcome, Patty</span>
                                    <span className="fw-bold d-none d-md-inine">-</span>
                                    <span className="d-none d-md-inine text-muted">Discover interesting ideas and unique perspectives. Read, explore and follow your interests. Get personalized recommendations delivered to you....</span>
                                  </a>
                                  {/*end::Heading*/}
                                </div>
                              </td>
                              {/*end::Title*/}
                              {/*begin::Date*/}
                              <td className="w-100px text-end fs-7 pe-9">
                                <span className="fw-semibold">April 15</span>
                              </td>
                              {/*end::Date*/}
                            </tr>
                            <tr>
                              <td className="ps-9">
                                {/*begin::Checkbox*/}
                                <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                  <input className="form-check-input" type="checkbox" defaultValue={1} />
                                </div>
                                {/*end::Checkbox*/}
                              </td>
                              <td className="min-w-80px">
                                {/*begin::Star*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Star">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-3">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Star*/}
                                {/*begin::Important*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Mark as important">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                  <span className="svg-icon svg-icon-4 mt-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Important*/}
                              </td>
                              {/*begin::Author*/}
                              <td className="w-150px w-md-175px">
                                <a href="../../demo1/dist/apps/inbox/reply.html" className="d-flex align-items-center text-dark">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px me-3">
                                    <div className="symbol-label bg-light-danger">
                                      <span className="text-danger">E</span>
                                    </div>
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Name*/}
                                  <span className="fw-semibold">Emma Bold</span>
                                  {/*end::Name*/}
                                </a>
                              </td>
                              {/*end::Author*/}
                              {/*begin::Title*/}
                              <td>
                                <div className="text-dark mb-1">
                                  {/*begin::Heading*/}
                                  <a href="../../demo1/dist/apps/inbox/reply.html" className="text-dark">
                                    <span className="fw-bold">Free Video Marketing Guide</span>
                                    <span className="fw-bold d-none d-md-inine">-</span>
                                    <span className="d-none d-md-inine text-muted">Video has rolled into every marketing platform or channel, leaving...</span>
                                  </a>
                                  {/*end::Heading*/}
                                </div>
                                {/*begin::Badges*/}
                                <div className="badge badge-light-success">project</div>
                                {/*end::Badges*/}
                              </td>
                              {/*end::Title*/}
                              {/*begin::Date*/}
                              <td className="w-100px text-end fs-7 pe-9">
                                <span className="fw-semibold text-muted">April 3</span>
                              </td>
                              {/*end::Date*/}
                            </tr>
                            <tr>
                              <td className="ps-9">
                                {/*begin::Checkbox*/}
                                <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                  <input className="form-check-input" type="checkbox" defaultValue={1} />
                                </div>
                                {/*end::Checkbox*/}
                              </td>
                              <td className="min-w-80px">
                                {/*begin::Star*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Star">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-3">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Star*/}
                                {/*begin::Important*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Mark as important">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                  <span className="svg-icon svg-icon-4 mt-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Important*/}
                              </td>
                              {/*begin::Author*/}
                              <td className="w-150px w-md-175px">
                                <a href="../../demo1/dist/apps/inbox/reply.html" className="d-flex align-items-center text-dark">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px me-3">
                                    <span className="symbol-label" style={{backgroundImage: 'url(assets/media/avatars/300-12.jpg)'}} />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Name*/}
                                  <span className="fw-semibold">Ana Crown</span>
                                  {/*end::Name*/}
                                </a>
                              </td>
                              {/*end::Author*/}
                              {/*begin::Title*/}
                              <td>
                                <div className="text-dark mb-1">
                                  {/*begin::Heading*/}
                                  <a href="../../demo1/dist/apps/inbox/reply.html" className="text-dark">
                                    <span className="fw-bold">Your iBuy.com grocery shopping confirmation</span>
                                    <span className="fw-bold d-none d-md-inine">-</span>
                                    <span className="d-none d-md-inine text-muted">Please make sure that you have one of the following cards with you when we deliver your order...</span>
                                  </a>
                                  {/*end::Heading*/}
                                </div>
                              </td>
                              {/*end::Title*/}
                              {/*begin::Date*/}
                              <td className="w-100px text-end fs-7 pe-9">
                                <span className="fw-semibold text-muted">March 17</span>
                              </td>
                              {/*end::Date*/}
                            </tr>
                            <tr>
                              <td className="ps-9">
                                {/*begin::Checkbox*/}
                                <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                  <input className="form-check-input" type="checkbox" defaultValue={1} />
                                </div>
                                {/*end::Checkbox*/}
                              </td>
                              <td className="min-w-80px">
                                {/*begin::Star*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Star">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-3">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Star*/}
                                {/*begin::Important*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Mark as important">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                  <span className="svg-icon svg-icon-4 mt-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Important*/}
                              </td>
                              {/*begin::Author*/}
                              <td className="w-150px w-md-175px">
                                <a href="../../demo1/dist/apps/inbox/reply.html" className="d-flex align-items-center text-dark">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px me-3">
                                    <div className="symbol-label bg-light-info">
                                      <span className="text-info">A</span>
                                    </div>
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Name*/}
                                  <span className="fw-semibold">Robert Doe</span>
                                  {/*end::Name*/}
                                </a>
                              </td>
                              {/*end::Author*/}
                              {/*begin::Title*/}
                              <td>
                                <div className="text-dark mb-1">
                                  {/*begin::Heading*/}
                                  <a href="../../demo1/dist/apps/inbox/reply.html" className="text-dark">
                                    <span className="fw-bold">Your Order #224820998666029 has been Confirmed</span>
                                    <span className="fw-bold d-none d-md-inine">-</span>
                                    <span className="d-none d-md-inine text-muted">Your Order #224820998666029 has been placed on Saturday, 07 March</span>
                                  </a>
                                  {/*end::Heading*/}
                                </div>
                              </td>
                              {/*end::Title*/}
                              {/*begin::Date*/}
                              <td className="w-100px text-end fs-7 pe-9">
                                <span className="fw-semibold text-muted">March 12</span>
                              </td>
                              {/*end::Date*/}
                            </tr>
                            <tr>
                              <td className="ps-9">
                                {/*begin::Checkbox*/}
                                <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                  <input className="form-check-input" type="checkbox" defaultValue={1} />
                                </div>
                                {/*end::Checkbox*/}
                              </td>
                              <td className="min-w-80px">
                                {/*begin::Star*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Star">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-3">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Star*/}
                                {/*begin::Important*/}
                                <a href="#" className="btn btn-icon btn-color-gray-400 btn-active-color-primary w-35px h-35px" data-bs-toggle="tooltip" data-bs-placement="right" title="Mark as important">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                  <span className="svg-icon svg-icon-4 mt-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Important*/}
                              </td>
                              {/*begin::Author*/}
                              <td className="w-150px w-md-175px">
                                <a href="../../demo1/dist/apps/inbox/reply.html" className="d-flex align-items-center text-dark">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px me-3">
                                    <span className="symbol-label" style={{backgroundImage: 'url(assets/media/avatars/300-13.jpg)'}} />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Name*/}
                                  <span className="fw-semibold">John Miller</span>
                                  {/*end::Name*/}
                                </a>
                              </td>
                              {/*end::Author*/}
                              {/*begin::Title*/}
                              <td>
                                <div className="text-dark mb-1">
                                  {/*begin::Heading*/}
                                  <a href="../../demo1/dist/apps/inbox/reply.html" className="text-dark">
                                    <span className="fw-bold">Payment Notification DLOP2329KD</span>
                                    <span className="fw-bold d-none d-md-inine">-</span>
                                    <span className="d-none d-md-inine text-muted">Your payment of 4500USD to AirCar has been authorized and confirmed, thank you your account. This...</span>
                                  </a>
                                  {/*end::Heading*/}
                                </div>
                              </td>
                              {/*end::Title*/}
                              {/*begin::Date*/}
                              <td className="w-100px text-end fs-7 pe-9">
                                <span className="fw-semibold text-muted">March 11</span>
                              </td>
                              {/*end::Date*/}
                            </tr>
                          </tbody>
                          {/*end::Table body*/}
                        </table>
                        {/*end::Table*/}
                      </div>
                    </div>
                    {/*end::Card*/}
                  </div>
                  {/*end::Content*/}
                </div>
                {/*end::Inbox App - Messages */}
              </div>
              {/*end::Content container*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Content wrapper*/}
<Footer/>
        </div>
        {/*end:::Main*/}
      </div>
      {/*end::Wrapper*/}
    </div>
    {/*end::Page*/}
  </div>
  {/*end::App*/}
  <Rest/>
<Helmet>
<script src={process.env.PUBLIC_URL+"/dist/assets/plugins/custom/datatables/datatables.bundle.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/apps/inbox/listing.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/widgets.bundle.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/widgets.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/apps/chat/chat.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/upgrade-plan.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/create-app.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/users-search.js"}></script>
</Helmet>
  </div>

  )
}

export default Inbox