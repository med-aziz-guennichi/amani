import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Rest from '../components/Rest'
import Footer from '../components/Footer'

const Documents = () => {
  return (
    <div id="kt_app_body" data-kt-app-layout="dark-sidebar" data-kt-app-header-fixed="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-hoverable="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" data-kt-app-toolbar-enabled="true" className="app-default">
  {/*begin::App*/}
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
                  <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Documents</h1>
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
                    <li className="breadcrumb-item text-muted">User Profile</li>
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
                    <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_63d0d99723a73">
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
                            <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_63d0d99723a73" data-allow-clear="true">
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
                {/*begin::Navbar*/}
                <div className="card mb-6">
                  <div className="card-body pt-9 pb-0">
                    {/*begin::Details*/}
                    <div className="d-flex flex-wrap flex-sm-nowrap">
                      {/*begin: Pic*/}
                      <div className="me-7 mb-4">
                        <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                          <img src="assets/media/avatars/300-1.jpg" alt="image" />
                          <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px" />
                        </div>
                      </div>
                      {/*end::Pic*/}
                      {/*begin::Info*/}
                      <div className="flex-grow-1">
                        {/*begin::Title*/}
                        <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                          {/*begin::User*/}
                          <div className="d-flex flex-column">
                            {/*begin::Name*/}
                            <div className="d-flex align-items-center mb-2">
                              <a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">Max Smith</a>
                              <a href="#">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen026.svg*/}
                                <span className="svg-icon svg-icon-1 svg-icon-primary">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                    <path d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z" fill="currentColor" />
                                    <path d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z" fill="white" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </a>
                            </div>
                            {/*end::Name*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                              <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                <span className="svg-icon svg-icon-4 me-1">
                                  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor" />
                                    <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor" />
                                    <rect x={7} y={6} width={4} height={4} rx={2} fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}Developer</a>
                              <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                <span className="svg-icon svg-icon-4 me-1">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor" />
                                    <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}SF, Bay Area</a>
                              <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
                                {/*begin::Svg Icon | path: icons/duotune/communication/com011.svg*/}
                                <span className="svg-icon svg-icon-4 me-1">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="currentColor" />
                                    <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}max@kt.com</a>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Actions*/}
                          <div className="d-flex my-4">
                            <a href="#" className="btn btn-sm btn-light me-2" id="kt_user_follow_button">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
                              <span className="svg-icon svg-icon-3 d-none">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path opacity="0.3" d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="currentColor" />
                                  <path d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                              {/*begin::Indicator label*/}
                              <span className="indicator-label">Follow</span>
                              {/*end::Indicator label*/}
                              {/*begin::Indicator progress*/}
                              <span className="indicator-progress">Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                              {/*end::Indicator progress*/}
                            </a>
                            <a href="#" className="btn btn-sm btn-primary me-2" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">Hire Me</a>
                            {/*begin::Menu*/}
                            <div className="me-0">
                              <button className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                <i className="bi bi-three-dots fs-3" />
                              </button>
                              {/*begin::Menu 3*/}
                              <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                                {/*begin::Heading*/}
                                <div className="menu-item px-3">
                                  <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                                </div>
                                {/*end::Heading*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">Create Invoice</a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link flex-stack px-3">Create Payment
                                    <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference" /></a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">Generate Bill</a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                                  <a href="#" className="menu-link px-3">
                                    <span className="menu-title">Subscription</span>
                                    <span className="menu-arrow" />
                                  </a>
                                  {/*begin::Menu sub*/}
                                  <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">Plans</a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">Billing</a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">Statements</a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu separator*/}
                                    <div className="separator my-2" />
                                    {/*end::Menu separator*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <div className="menu-content px-3">
                                        {/*begin::Switch*/}
                                        <label className="form-check form-switch form-check-custom form-check-solid">
                                          {/*begin::Input*/}
                                          <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue={1} defaultChecked="checked" name="notifications" />
                                          {/*end::Input*/}
                                          {/*end::Label*/}
                                          <span className="form-check-label text-muted fs-6">Recuring</span>
                                          {/*end::Label*/}
                                        </label>
                                        {/*end::Switch*/}
                                      </div>
                                    </div>
                                    {/*end::Menu item*/}
                                  </div>
                                  {/*end::Menu sub*/}
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3 my-1">
                                  <a href="#" className="menu-link px-3">Settings</a>
                                </div>
                                {/*end::Menu item*/}
                              </div>
                              {/*end::Menu 3*/}
                            </div>
                            {/*end::Menu*/}
                          </div>
                          {/*end::Actions*/}
                        </div>
                        {/*end::Title*/}
                        {/*begin::Stats*/}
                        <div className="d-flex flex-wrap flex-stack">
                          {/*begin::Wrapper*/}
                          <div className="d-flex flex-column flex-grow-1 pe-8">
                            {/*begin::Stats*/}
                            <div className="d-flex flex-wrap">
                              {/*begin::Stat*/}
                              <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                {/*begin::Number*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                  <span className="svg-icon svg-icon-3 svg-icon-success me-2">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                      <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value={4500} data-kt-countup-prefix="$">0</div>
                                </div>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="fw-semibold fs-6 text-gray-400">Earnings</div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Stat*/}
                              {/*begin::Stat*/}
                              <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                {/*begin::Number*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                  <span className="svg-icon svg-icon-3 svg-icon-danger me-2">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.5" x={11} y={18} width={13} height={2} rx={1} transform="rotate(-90 11 18)" fill="currentColor" />
                                      <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value={80}>0</div>
                                </div>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="fw-semibold fs-6 text-gray-400">Projects</div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Stat*/}
                              {/*begin::Stat*/}
                              <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                {/*begin::Number*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                  <span className="svg-icon svg-icon-3 svg-icon-success me-2">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                      <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value={60} data-kt-countup-prefix="%">0</div>
                                </div>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="fw-semibold fs-6 text-gray-400">Success Rate</div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Stat*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::Wrapper*/}
                          {/*begin::Progress*/}
                          <div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                            <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                              <span className="fw-semibold fs-6 text-gray-400">Profile Compleation</span>
                              <span className="fw-bold fs-6">50%</span>
                            </div>
                            <div className="h-5px mx-3 w-100 bg-light mb-3">
                              <div className="bg-success rounded h-5px" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                          {/*end::Progress*/}
                        </div>
                        {/*end::Stats*/}
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Navs*/}
                    <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                      {/*begin::Nav item*/}
                      <li className="nav-item mt-2">
                        <a className="nav-link text-active-primary ms-0 me-10 py-5" href="/profile">Overview</a>
                      </li>
                      {/*end::Nav item*/}
                      {/*begin::Nav item*/}
                      {/*end::Nav item*/}
                      {/*begin::Nav item*/}
                      {/*end::Nav item*/}
                      {/*begin::Nav item*/}
                      <li className="nav-item mt-2">
                        <a className="nav-link text-active-primary ms-0 me-10 py-5 active" href="../../demo1/dist/pages/user-profile/documents.html">Documents</a>
                      </li>
                      {/*end::Nav item*/}
                      {/*begin::Nav item*/}

                      {/*end::Nav item*/}
                      {/*begin::Nav item*/}
                      {/*end::Nav item*/}
                    </ul>
                    {/*begin::Navs*/}
                  </div>
                </div>
                {/*end::Navbar*/}
                {/*begin::Documents toolbar*/}
                <div className="d-flex flex-wrap flex-stack mb-6">
                  {/*begin::Title*/}
                  <h3 className="fw-bold my-2">My Documents
                    <span className="fs-6 text-gray-400 fw-semibold ms-1">100+ resources</span></h3>
                  {/*end::Title*/}
                  {/*begin::Controls*/}
                  <div className="d-flex my-2">
                    {/*begin::Search*/}
                    <div className="d-flex align-items-center position-relative me-4">
                      {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                      <span className="svg-icon svg-icon-3 position-absolute ms-3">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height={2} rx={1} transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                          <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                      <input type="text" id="kt_filter_search" className="form-control form-control-sm border-body bg-body w-150px ps-10" placeholder="Search" />
                    </div>
                    {/*end::Search*/}
                    <a href="../../demo1/dist/apps/file-manager/files.html" className="btn btn-primary btn-sm">File Manager</a>
                  </div>
                  {/*end::Controls*/}
                </div>
                {/*end::Documents toolbar*/}
                {/*begin::Row*/}
                <div className="row g-6 g-xl-9 mb-6 mb-xl-9">
                  {/*begin::Col*/}
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    {/*begin::Card*/}
                    <div className="card h-100">
                      {/*begin::Card body*/}
                      <div className="card-body d-flex justify-content-center text-center flex-column p-8">
                        {/*begin::Name*/}
                        <a href="../../demo1/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                          {/*begin::Image*/}
                          <div className="symbol symbol-75px mb-5">
                            <img src="assets/media/svg/files/folder-document.svg" className="theme-light-show" alt />
                            <img src={process.env.PUBLIC_URL+"/dist/assets/media/svg/files/folder-document-dark.svg"} className="theme-dark-show" alt />
                          </div>
                          {/*end::Image*/}
                          {/*begin::Title*/}
                          <div className="fs-5 fw-bold mb-2">Finance</div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Name*/}
                        {/*begin::Description*/}
                        <div className="fs-7 fw-semibold text-gray-400">7 files</div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    {/*begin::Card*/}
                    <div className="card h-100">
                      {/*begin::Card body*/}
                      <div className="card-body d-flex justify-content-center text-center flex-column p-8">
                        {/*begin::Name*/}
                        <a href="../../demo1/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                          {/*begin::Image*/}
                          <div className="symbol symbol-75px mb-5">
                            <img src="assets/media/svg/files/folder-document.svg" className="theme-light-show" alt />
                            <img src={process.env.PUBLIC_URL+"/dist/assets/media/svg/files/folder-document-dark.svg"} className="theme-dark-show" alt />
                          </div>
                          {/*end::Image*/}
                          {/*begin::Title*/}
                          <div className="fs-5 fw-bold mb-2">Customers</div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Name*/}
                        {/*begin::Description*/}
                        <div className="fs-7 fw-semibold text-gray-400">3 files</div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    {/*begin::Card*/}
                    <div className="card h-100">
                      {/*begin::Card body*/}
                      <div className="card-body d-flex justify-content-center text-center flex-column p-8">
                        {/*begin::Name*/}
                        <a href="../../demo1/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                          {/*begin::Image*/}
                          <div className="symbol symbol-75px mb-5">
                            <img src="assets/media/svg/files/folder-document.svg" className="theme-light-show" alt />
                            <img src={process.env.PUBLIC_URL+"/dist/assets/media/svg/files/folder-document-dark.svg"} className="theme-dark-show" alt />
                          </div>
                          {/*end::Image*/}
                          {/*begin::Title*/}
                          <div className="fs-5 fw-bold mb-2">CRM Project</div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Name*/}
                        {/*begin::Description*/}
                        <div className="fs-7 fw-semibold text-gray-400">25 files</div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end:Row*/}
                {/*begin::Row*/}
                <div className="row g-6 g-xl-9 mb-6 mb-xl-9">
                  {/*begin::Col*/}
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    {/*begin::Card*/}
                    <div className="card h-100">
                      {/*begin::Card body*/}
                      <div className="card-body d-flex justify-content-center text-center flex-column p-8">
                        {/*begin::Name*/}
                        <a href="../../demo1/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                          {/*begin::Image*/}
                          <div className="symbol symbol-60px mb-5">
                            <img src="assets/media/svg/files/pdf.svg" className="theme-light-show" alt />
                            <img src="assets/media/svg/files/pdf-dark.svg" className="theme-dark-show" alt />
                          </div>
                          {/*end::Image*/}
                          {/*begin::Title*/}
                          <div className="fs-5 fw-bold mb-2">Project Reqs..</div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Name*/}
                        {/*begin::Description*/}
                        <div className="fs-7 fw-semibold text-gray-400">3 days ago</div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    {/*begin::Card*/}
                    <div className="card h-100">
                      {/*begin::Card body*/}
                      <div className="card-body d-flex justify-content-center text-center flex-column p-8">
                        {/*begin::Name*/}
                        <a href="../../demo1/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                          {/*begin::Image*/}
                          <div className="symbol symbol-60px mb-5">
                            <img src="assets/media/svg/files/doc.svg" className="theme-light-show" alt />
                            <img src="assets/media/svg/files/doc-dark.svg" className="theme-dark-show" alt />
                          </div>
                          {/*end::Image*/}
                          {/*begin::Title*/}
                          <div className="fs-5 fw-bold mb-2">CRM App Docs..</div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Name*/}
                        {/*begin::Description*/}
                        <div className="fs-7 fw-semibold text-gray-400">3 days ago</div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    {/*begin::Card*/}
                    <div className="card h-100">
                      {/*begin::Card body*/}
                      <div className="card-body d-flex justify-content-center text-center flex-column p-8">
                        {/*begin::Name*/}
                        <a href="../../demo1/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                          {/*begin::Image*/}
                          <div className="symbol symbol-60px mb-5">
                            <img src="assets/media/svg/files/css.svg" className="theme-light-show" alt />
                            <img src="assets/media/svg/files/css-dark.svg" className="theme-dark-show" alt />
                          </div>
                          {/*end::Image*/}
                          {/*begin::Title*/}
                          <div className="fs-5 fw-bold mb-2">User CRUD Styles</div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Name*/}
                        {/*begin::Description*/}
                        <div className="fs-7 fw-semibold text-gray-400">4 days ago</div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    {/*begin::Card*/}
                    <div className="card h-100">
                      {/*begin::Card body*/}
                      <div className="card-body d-flex justify-content-center text-center flex-column p-8">
                        {/*begin::Name*/}
                        <a href="../../demo1/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                          {/*begin::Image*/}
                          <div className="symbol symbol-60px mb-5">
                            <img src="assets/media/svg/files/ai.svg" className="theme-light-show" alt />
                            <img src="assets/media/svg/files/ai-dark.svg" className="theme-dark-show" alt />
                          </div>
                          {/*end::Image*/}
                          {/*begin::Title*/}
                          <div className="fs-5 fw-bold mb-2">Product Logo</div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Name*/}
                        {/*begin::Description*/}
                        <div className="fs-7 fw-semibold text-gray-400">5 days ago</div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    {/*begin::Card*/}
                    <div className="card h-100">
                      {/*begin::Card body*/}
                      <div className="card-body d-flex justify-content-center text-center flex-column p-8">
                        {/*begin::Name*/}
                        <a href="../../demo1/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                          {/*begin::Image*/}
                          <div className="symbol symbol-60px mb-5">
                            <img src="assets/media/svg/files/sql.svg" className="theme-light-show" alt />
                            <img src="assets/media/svg/files/sql-dark.svg" className="theme-dark-show" alt />
                          </div>
                          {/*end::Image*/}
                          {/*begin::Title*/}
                          <div className="fs-5 fw-bold mb-2">Orders backup</div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Name*/}
                        {/*begin::Description*/}
                        <div className="fs-7 fw-semibold text-gray-400">1 week ago</div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    {/*begin::Card*/}
                    <div className="card h-100">
                      {/*begin::Card body*/}
                      <div className="card-body d-flex justify-content-center text-center flex-column p-8">
                        {/*begin::Name*/}
                        <a href="../../demo1/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                          {/*begin::Image*/}
                          <div className="symbol symbol-60px mb-5">
                            <img src="assets/media/svg/files/xml.svg" className="theme-light-show" alt />
                            <img src="assets/media/svg/files/xml-dark.svg" className="theme-dark-show" alt />
                          </div>
                          {/*end::Image*/}
                          {/*begin::Title*/}
                          <div className="fs-5 fw-bold mb-2">UTAIR CRM API Co..</div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Name*/}
                        {/*begin::Description*/}
                        <div className="fs-7 fw-semibold text-gray-400">2 weeks ago</div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    {/*begin::Card*/}
                    <div className="card h-100">
                      {/*begin::Card body*/}
                      <div className="card-body d-flex justify-content-center text-center flex-column p-8">
                        {/*begin::Name*/}
                        <a href="../../demo1/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                          {/*begin::Image*/}
                          <div className="symbol symbol-60px mb-5">
                            <img src="assets/media/svg/files/tif.svg" className="theme-light-show" alt />
                            <img src="assets/media/svg/files/tif-dark.svg" className="theme-dark-show" alt />
                          </div>
                          {/*end::Image*/}
                          {/*begin::Title*/}
                          <div className="fs-5 fw-bold mb-2">Tower Hill App..</div>
                          {/*end::Title*/}
                        </a>
                        {/*end::Name*/}
                        {/*begin::Description*/}
                        <div className="fs-7 fw-semibold text-gray-400">3 weeks ago</div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end:Row*/}
                {/*begin::Modals*/}
                {/*begin::Modal - Offer A Deal*/}
                <div className="modal fade" id="kt_modal_offer_a_deal" tabIndex={-1} aria-hidden="true">
                  {/*begin::Modal dialog*/}
                  <div className="modal-dialog modal-dialog-centered mw-1000px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                      {/*begin::Modal header*/}
                      <div className="modal-header py-7 d-flex justify-content-between">
                        {/*begin::Modal title*/}
                        <h2>Offer a Deal</h2>
                        {/*end::Modal title*/}
                        {/*begin::Close*/}
                        <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                          <span className="svg-icon svg-icon-1">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                              <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Close*/}
                      </div>
                      {/*begin::Modal header*/}
                      {/*begin::Modal body*/}
                      <div className="modal-body scroll-y m-5">
                        {/*begin::Stepper*/}
                        <div className="stepper stepper-links d-flex flex-column" id="kt_modal_offer_a_deal_stepper">
                          {/*begin::Nav*/}
                          <div className="stepper-nav justify-content-center py-2">
                            {/*begin::Step 1*/}
                            <div className="stepper-item me-5 me-md-15 current" data-kt-stepper-element="nav">
                              <h3 className="stepper-title">Deal Type</h3>
                            </div>
                            {/*end::Step 1*/}
                            {/*begin::Step 2*/}
                            <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                              <h3 className="stepper-title">Deal Details</h3>
                            </div>
                            {/*end::Step 2*/}
                            {/*begin::Step 3*/}
                            <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                              <h3 className="stepper-title">Finance Settings</h3>
                            </div>
                            {/*end::Step 3*/}
                            {/*begin::Step 4*/}
                            <div className="stepper-item" data-kt-stepper-element="nav">
                              <h3 className="stepper-title">Completed</h3>
                            </div>
                            {/*end::Step 4*/}
                          </div>
                          {/*end::Nav*/}
                          {/*begin::Form*/}
                          <form className="mx-auto mw-500px w-100 pt-15 pb-10" noValidate="novalidate" id="kt_modal_offer_a_deal_form">
                            {/*begin::Type*/}
                            <div className="current" data-kt-stepper-element="content">
                              {/*begin::Wrapper*/}
                              <div className="w-100">
                                {/*begin::Heading*/}
                                <div className="mb-13">
                                  {/*begin::Title*/}
                                  <h2 className="mb-3">Deal Type</h2>
                                  {/*end::Title*/}
                                  {/*begin::Description*/}
                                  <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                                    <a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
                                  {/*end::Description*/}
                                </div>
                                {/*end::Heading*/}
                                {/*begin::Input group*/}
                                <div className="fv-row mb-15" data-kt-buttons="true">
                                  {/*begin::Option*/}
                                  <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6 active">
                                    {/*begin::Input*/}
                                    <input className="btn-check" type="radio" defaultChecked="checked" name="offer_type" defaultValue={1} />
                                    {/*end::Input*/}
                                    {/*begin::Label*/}
                                    <span className="d-flex">
                                      {/*begin::Icon*/}
                                      {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                      <span className="svg-icon svg-icon-3hx">
                                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor" />
                                          <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor" />
                                          <rect x={7} y={6} width={4} height={4} rx={2} fill="currentColor" />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                      {/*end::Icon*/}
                                      {/*begin::Info*/}
                                      <span className="ms-4">
                                        <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Personal Deal</span>
                                        <span className="fw-semibold fs-4 text-muted">If you need more info, please check it out</span>
                                      </span>
                                      {/*end::Info*/}
                                    </span>
                                    {/*end::Label*/}
                                  </label>
                                  {/*end::Option*/}
                                  {/*begin::Option*/}
                                  <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6">
                                    {/*begin::Input*/}
                                    <input className="btn-check" type="radio" name="offer_type" defaultValue={2} />
                                    {/*end::Input*/}
                                    {/*begin::Label*/}
                                    <span className="d-flex">
                                      {/*begin::Icon*/}
                                      {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                      <span className="svg-icon svg-icon-3hx">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect x={2} y={2} width={9} height={9} rx={2} fill="currentColor" />
                                          <rect opacity="0.3" x={13} y={2} width={9} height={9} rx={2} fill="currentColor" />
                                          <rect opacity="0.3" x={13} y={13} width={9} height={9} rx={2} fill="currentColor" />
                                          <rect opacity="0.3" x={2} y={13} width={9} height={9} rx={2} fill="currentColor" />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                      {/*end::Icon*/}
                                      {/*begin::Info*/}
                                      <span className="ms-4">
                                        <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Corporate Deal</span>
                                        <span className="fw-semibold fs-4 text-muted">Create corporate account to manage users</span>
                                      </span>
                                      {/*end::Info*/}
                                    </span>
                                    {/*end::Label*/}
                                  </label>
                                  {/*end::Option*/}
                                </div>
                                {/*end::Input group*/}
                                {/*begin::Actions*/}
                                <div className="d-flex justify-content-end">
                                  <button type="button" className="btn btn-lg btn-primary" data-kt-element="type-next">
                                    <span className="indicator-label">Offer Details</span>
                                    <span className="indicator-progress">Please wait...
                                      <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                                  </button>
                                </div>
                                {/*end::Actions*/}
                              </div>
                              {/*end::Wrapper*/}
                            </div>
                            {/*end::Type*/}
                            {/*begin::Details*/}
                            <div data-kt-stepper-element="content">
                              {/*begin::Wrapper*/}
                              <div className="w-100">
                                {/*begin::Heading*/}
                                <div className="mb-13">
                                  {/*begin::Title*/}
                                  <h2 className="mb-3">Deal Details</h2>
                                  {/*end::Title*/}
                                  {/*begin::Description*/}
                                  <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                                    <a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
                                  {/*end::Description*/}
                                </div>
                                {/*end::Heading*/}
                                {/*begin::Input group*/}
                                <div className="fv-row mb-8">
                                  {/*begin::Label*/}
                                  <label className="required fs-6 fw-semibold mb-2">Customer</label>
                                  {/*end::Label*/}
                                  {/*begin::Input*/}
                                  <select className="form-select form-select-solid" data-control="select2" data-placeholder="Select an option" name="details_customer">
                                    <option />
                                    <option value={1} selected="selected">Keenthemes</option>
                                    <option value={2}>CRM App</option>
                                  </select>
                                  {/*end::Input*/}
                                </div>
                                {/*end::Input group*/}
                                {/*begin::Input group*/}
                                <div className="fv-row mb-8">
                                  {/*begin::Label*/}
                                  <label className="required fs-6 fw-semibold mb-2">Deal Title</label>
                                  {/*end::Label*/}
                                  {/*begin::Input*/}
                                  <input type="text" className="form-control form-control-solid" placeholder="Enter Deal Title" name="details_title" defaultValue="Marketing Campaign" />
                                  {/*end::Input*/}
                                </div>
                                {/*end::Input group*/}
                                {/*begin::Input group*/}
                                <div className="fv-row mb-8">
                                  {/*begin::Label*/}
                                  <label className="fs-6 fw-semibold mb-2">Deal Description</label>
                                  {/*end::Label*/}
                                  {/*begin::Label*/}
                                  <textarea className="form-control form-control-solid" rows={3} placeholder="Enter Deal Description" name="details_description" defaultValue={"Experience share market at your fingertips with TICK PRO stock investment mobile trading app"} />
                                  {/*end::Label*/}
                                </div>
                                {/*end::Input group*/}
                                {/*begin::Input group*/}
                                <div className="fv-row mb-8">
                                  <label className="required fs-6 fw-semibold mb-2">Activation Date</label>
                                  <div className="position-relative d-flex align-items-center">
                                    {/*begin::Icon*/}
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                                    <span className="svg-icon svg-icon-2 position-absolute mx-4">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
                                        <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor" />
                                        <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                    {/*end::Icon*/}
                                    {/*begin::Datepicker*/}
                                    <input className="form-control form-control-solid ps-12" placeholder="Pick date range" name="details_activation_date" />
                                    {/*end::Datepicker*/}
                                  </div>
                                </div>
                                {/*end::Input group*/}
                                {/*begin::Input group*/}
                                <div className="fv-row mb-15">
                                  {/*begin::Wrapper*/}
                                  <div className="d-flex flex-stack">
                                    {/*begin::Label*/}
                                    <div className="me-5">
                                      <label className="required fs-6 fw-semibold">Notifications</label>
                                      <div className="fs-7 fw-semibold text-muted">Allow Notifications by Phone or Email</div>
                                    </div>
                                    {/*end::Label*/}
                                    {/*begin::Checkboxes*/}
                                    <div className="d-flex">
                                      {/*begin::Checkbox*/}
                                      <label className="form-check form-check-custom form-check-solid me-10">
                                        {/*begin::Input*/}
                                        <input className="form-check-input h-20px w-20px" type="checkbox" defaultValue="email" name="details_notifications[]" />
                                        {/*end::Input*/}
                                        {/*begin::Label*/}
                                        <span className="form-check-label fw-semibold">Email</span>
                                        {/*end::Label*/}
                                      </label>
                                      {/*end::Checkbox*/}
                                      {/*begin::Checkbox*/}
                                      <label className="form-check form-check-custom form-check-solid">
                                        {/*begin::Input*/}
                                        <input className="form-check-input h-20px w-20px" type="checkbox" defaultValue="phone" defaultChecked="checked" name="details_notifications[]" />
                                        {/*end::Input*/}
                                        {/*begin::Label*/}
                                        <span className="form-check-label fw-semibold">Phone</span>
                                        {/*end::Label*/}
                                      </label>
                                      {/*end::Checkbox*/}
                                    </div>
                                    {/*end::Checkboxes*/}
                                  </div>
                                  {/*begin::Wrapper*/}
                                </div>
                                {/*end::Input group*/}
                                {/*begin::Actions*/}
                                <div className="d-flex flex-stack">
                                  <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="details-previous">Deal Type</button>
                                  <button type="button" className="btn btn-lg btn-primary" data-kt-element="details-next">
                                    <span className="indicator-label">Financing</span>
                                    <span className="indicator-progress">Please wait...
                                      <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                                  </button>
                                </div>
                                {/*end::Actions*/}
                              </div>
                              {/*end::Wrapper*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Budget*/}
                            <div data-kt-stepper-element="content">
                              {/*begin::Wrapper*/}
                              <div className="w-100">
                                {/*begin::Heading*/}
                                <div className="mb-13">
                                  {/*begin::Title*/}
                                  <h2 className="mb-3">Finance</h2>
                                  {/*end::Title*/}
                                  {/*begin::Description*/}
                                  <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                                    <a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
                                  {/*end::Description*/}
                                </div>
                                {/*end::Heading*/}
                                {/*begin::Input group*/}
                                <div className="fv-row mb-8">
                                  {/*begin::Label*/}
                                  <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                                    <span className="required">Setup Budget</span>
                                    <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="<div class='p-4 rounded bg-light'> <div class='d-flex flex-stack text-muted mb-4'> <i class='fas fa-university fs-3 me-3'></i> <div class='fw-bold'>INCBANK **** 1245 STATEMENT</div> </div> <div class='d-flex flex-stack fw-semibold text-gray-600'> <div>Amount</div> <div>Transaction</div> </div> <div class='separator separator-dashed my-2'></div> <div class='d-flex flex-stack text-dark fw-bold mb-2'> <div>USD345.00</div> <div>KEENTHEMES*</div> </div> <div class='d-flex flex-stack text-muted mb-2'> <div>USD75.00</div> <div>Hosting fee</div> </div> <div class='d-flex flex-stack text-muted'> <div>USD3,950.00</div> <div>Payrol</div> </div> </div>" />
                                  </label>
                                  {/*end::Label*/}
                                  {/*begin::Dialer*/}
                                  <div className="position-relative w-lg-250px" id="kt_modal_finance_setup" data-kt-dialer="true" data-kt-dialer-min={50} data-kt-dialer-max={50000} data-kt-dialer-step={100} data-kt-dialer-prefix="$" data-kt-dialer-decimals={2}>
                                    {/*begin::Decrease control*/}
                                    <button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0" data-kt-dialer-control="decrease">
                                      {/*begin::Svg Icon | path: icons/duotune/general/gen042.svg*/}
                                      <span className="svg-icon svg-icon-1">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                                          <rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="currentColor" />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </button>
                                    {/*end::Decrease control*/}
                                    {/*begin::Input control*/}
                                    <input type="text" className="form-control form-control-solid border-0 ps-12" data-kt-dialer-control="input" placeholder="Amount" name="finance_setup" readOnly="readonly" defaultValue="$50" />
                                    {/*end::Input control*/}
                                    {/*begin::Increase control*/}
                                    <button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0" data-kt-dialer-control="increase">
                                      {/*begin::Svg Icon | path: icons/duotune/general/gen041.svg*/}
                                      <span className="svg-icon svg-icon-1">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                                          <rect x="10.8891" y="17.8033" width={12} height={2} rx={1} transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                                          <rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="currentColor" />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </button>
                                    {/*end::Increase control*/}
                                  </div>
                                  {/*end::Dialer*/}
                                </div>
                                {/*end::Input group*/}
                                {/*begin::Input group*/}
                                <div className="fv-row mb-8">
                                  {/*begin::Label*/}
                                  <label className="fs-6 fw-semibold mb-2">Budget Usage</label>
                                  {/*end::Label*/}
                                  {/*begin::Row*/}
                                  <div className="row g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">
                                    {/*begin::Col*/}
                                    <div className="col-md-6 col-lg-12 col-xxl-6">
                                      {/*begin::Option*/}
                                      <label className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6" data-kt-button="true">
                                        {/*begin::Radio*/}
                                        <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                          <input className="form-check-input" type="radio" name="finance_usage" defaultValue={1} defaultChecked="checked" />
                                        </span>
                                        {/*end::Radio*/}
                                        {/*begin::Info*/}
                                        <span className="ms-5">
                                          <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Precise Usage</span>
                                          <span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                                        </span>
                                        {/*end::Info*/}
                                      </label>
                                      {/*end::Option*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-md-6 col-lg-12 col-xxl-6">
                                      {/*begin::Option*/}
                                      <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
                                        {/*begin::Radio*/}
                                        <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                          <input className="form-check-input" type="radio" name="finance_usage" defaultValue={2} />
                                        </span>
                                        {/*end::Radio*/}
                                        {/*begin::Info*/}
                                        <span className="ms-5">
                                          <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Extreme Usage</span>
                                          <span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                                        </span>
                                        {/*end::Info*/}
                                      </label>
                                      {/*end::Option*/}
                                    </div>
                                    {/*end::Col*/}
                                  </div>
                                  {/*end::Row*/}
                                </div>
                                {/*end::Input group*/}
                                {/*begin::Input group*/}
                                <div className="fv-row mb-15">
                                  {/*begin::Wrapper*/}
                                  <div className="d-flex flex-stack">
                                    {/*begin::Label*/}
                                    <div className="me-5">
                                      <label className="fs-6 fw-semibold">Allow Changes in Budget</label>
                                      <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                                    </div>
                                    {/*end::Label*/}
                                    {/*begin::Switch*/}
                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                      <input className="form-check-input" type="checkbox" defaultValue={1} name="finance_allow" defaultChecked="checked" />
                                      <span className="form-check-label fw-semibold text-muted">Allowed</span>
                                    </label>
                                    {/*end::Switch*/}
                                  </div>
                                  {/*end::Wrapper*/}
                                </div>
                                {/*end::Input group*/}
                                {/*begin::Actions*/}
                                <div className="d-flex flex-stack">
                                  <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="finance-previous">Project Settings</button>
                                  <button type="button" className="btn btn-lg btn-primary" data-kt-element="finance-next">
                                    <span className="indicator-label">Build Team</span>
                                    <span className="indicator-progress">Please wait...
                                      <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                                  </button>
                                </div>
                                {/*end::Actions*/}
                              </div>
                              {/*end::Wrapper*/}
                            </div>
                            {/*end::Budget*/}
                            {/*begin::Complete*/}
                            <div data-kt-stepper-element="content">
                              {/*begin::Wrapper*/}
                              <div className="w-100">
                                {/*begin::Heading*/}
                                <div className="mb-13">
                                  {/*begin::Title*/}
                                  <h2 className="mb-3">Deal Created!</h2>
                                  {/*end::Title*/}
                                  {/*begin::Description*/}
                                  <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                                    <a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
                                  {/*end::Description*/}
                                </div>
                                {/*end::Heading*/}
                                {/*begin::Actions*/}
                                <div className="d-flex flex-center pb-20">
                                  <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="complete-start">Create New Deal</button>
                                  <a href="#" className="btn btn-lg btn-primary" data-bs-toggle="tooltip" title="Coming Soon">View Deal</a>
                                </div>
                                {/*end::Actions*/}
                                {/*begin::Illustration*/}
                                <div className="text-center px-4">
                                  <img src="assets/media/illustrations/sketchy-1/20.png" alt className="mw-100 mh-300px" />
                                </div>
                                {/*end::Illustration*/}
                              </div>
                            </div>
                            {/*end::Complete*/}
                          </form>
                          {/*end::Form*/}
                        </div>
                        {/*end::Stepper*/}
                      </div>
                      {/*begin::Modal body*/}
                    </div>
                  </div>
                </div>
                {/*end::Modal - Offer A Deal*/}
                {/*end::Modals*/}
              </div>
              {/*end::Content container*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Content wrapper*/}
          {/*begin::Footer*/}
          <div id="kt_app_footer" className="app-footer">
            {/*begin::Footer container*/}
            <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
              {/*begin::Copyright*/}
              <div className="text-dark order-2 order-md-1">
                <span className="text-muted fw-semibold me-1">2023©</span>
                <a href="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
              </div>
              {/*end::Copyright*/}
              {/*begin::Menu*/}
              <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                <li className="menu-item">
                  <a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
                </li>
                <li className="menu-item">
                  <a href="https://devs.keenthemes.com" target="_blank" className="menu-link px-2">Support</a>
                </li>
                <li className="menu-item">
                  <a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2">Purchase</a>
                </li>
              </ul>
              {/*end::Menu*/}
            </div>
            {/*end::Footer container*/}
          </div>
          {/*end::Footer*/}
        </div>
        {/*end:::Main*/}
      </div>
      {/*end::Wrapper*/}
    </div>
    <Footer/>
    {/*end::Page*/}
  </div>
  {/*end::App*/}
  <Rest/>
        <Helmet><script src={process.env.PUBLIC_URL+"/dist/assets/plugins/custom/datatables/datatables.bundle.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/pages/user-profile/general.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/widgets.bundle.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/widgets.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/apps/chat/chat.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/upgrade-plan.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/create-app.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/offer-a-deal/type.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/offer-a-deal/details.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/offer-a-deal/finance.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/offer-a-deal/complete.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/offer-a-deal/main.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/users-search.js"}></script></Helmet>
</div>

  )
}

export default Documents