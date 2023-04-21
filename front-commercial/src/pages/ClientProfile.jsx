import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Rest from '../components/Rest'
const ClientProfile = () => {
  return (
<div id="kt_app_body" data-kt-app-layout="dark-sidebar" data-kt-app-header-fixed="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-hoverable="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" data-kt-app-toolbar-enabled="true" className="app-default">
  {/*begin::Theme mode setup on page load*/}
  {/*end::Theme mode setup on page load*/}
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
                  <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Customer Details</h1>
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
                    <li className="breadcrumb-item text-muted">Customers</li>
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
                    <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_63d0d9f48c0c0">
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
                            <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_63d0d9f48c0c0" data-allow-clear="true">
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
                {/*begin::Layout*/}
                <div className="d-flex flex-column flex-xl-row">
                  {/*begin::Sidebar*/}
                  <div className="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
                    {/*begin::Card*/}
                    <div className="card mb-5 mb-xl-8">
                      {/*begin::Card body*/}
                      <div className="card-body pt-15">
                        {/*begin::Summary*/}
                        <div className="d-flex flex-center flex-column mb-5">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-100px symbol-circle mb-7">
                            <img src="assets/media/avatars/300-1.jpg" alt="image" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Name*/}
                          <a href="#" className="fs-3 text-gray-800 text-hover-primary fw-bold mb-1">Max Smith</a>
                          {/*end::Name*/}
                          {/*begin::Position*/}
                          <div className="fs-5 fw-semibold text-muted mb-6">Software Enginer</div>
                          {/*end::Position*/}
                          {/*begin::Info*/}
                          <div className="d-flex flex-wrap flex-center">
                            {/*begin::Stats*/}
                            <div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                              <div className="fs-4 fw-bold text-gray-700">
                                <span className="w-75px">6,900</span>
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                <span className="svg-icon svg-icon-3 svg-icon-success">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="fw-semibold text-muted">Earnings</div>
                            </div>
                            {/*end::Stats*/}
                            {/*begin::Stats*/}
                            <div className="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3">
                              <div className="fs-4 fw-bold text-gray-700">
                                <span className="w-50px">130</span>
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                <span className="svg-icon svg-icon-3 svg-icon-danger">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x={11} y={18} width={13} height={2} rx={1} transform="rotate(-90 11 18)" fill="currentColor" />
                                    <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="fw-semibold text-muted">Tasks</div>
                            </div>
                            {/*end::Stats*/}
                            {/*begin::Stats*/}
                            <div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                              <div className="fs-4 fw-bold text-gray-700">
                                <span className="w-50px">500</span>
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                <span className="svg-icon svg-icon-3 svg-icon-success">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="fw-semibold text-muted">Hours</div>
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::Info*/}
                        </div>
                        {/*end::Summary*/}
                        {/*begin::Details toggle*/}
                        <div className="d-flex flex-stack fs-4 py-3">
                          <div className="fw-bold rotate collapsible" data-bs-toggle="collapse" href="#kt_customer_view_details" role="button" aria-expanded="false" aria-controls="kt_customer_view_details">Details
                            <span className="ms-2 rotate-180">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                              <span className="svg-icon svg-icon-3">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </span></div>
                          <span data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit customer details">
                            <a href="#" className="btn btn-sm btn-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_update_customer">Edit</a>
                          </span>
                        </div>
                        {/*end::Details toggle*/}
                        <div className="separator separator-dashed my-3" />
                        {/*begin::Details content*/}
                        <div id="kt_customer_view_details" className="collapse show">
                          <div className="py-5 fs-6">
                            {/*begin::Badge*/}
                            <div className="badge badge-light-info d-inline">Premium user</div>
                            {/*begin::Badge*/}
                            {/*begin::Details item*/}
                            <div className="fw-bold mt-5">Account ID</div>
                            <div className="text-gray-600">ID-45453423</div>
                            {/*begin::Details item*/}
                            {/*begin::Details item*/}
                            <div className="fw-bold mt-5">Billing Email</div>
                            <div className="text-gray-600">
                              <a href="#" className="text-gray-600 text-hover-primary">info@keenthemes.com</a>
                            </div>
                            {/*begin::Details item*/}
                            {/*begin::Details item*/}
                            <div className="fw-bold mt-5">Billing Address</div>
                            <div className="text-gray-600">101 Collin Street,
                              <br />Melbourne 3000 VIC
                              <br />Australia</div>
                            {/*begin::Details item*/}
                            {/*begin::Details item*/}
                            <div className="fw-bold mt-5">Language</div>
                            <div className="text-gray-600">English</div>
                            {/*begin::Details item*/}
                            {/*begin::Details item*/}
                            <div className="fw-bold mt-5">Upcoming Invoice</div>
                            <div className="text-gray-600">54238-8693</div>
                            {/*begin::Details item*/}
                            {/*begin::Details item*/}
                            <div className="fw-bold mt-5">Tax ID</div>
                            <div className="text-gray-600">TX-8674</div>
                            {/*begin::Details item*/}
                          </div>
                        </div>
                        {/*end::Details content*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                    {/*begin::Connected Accounts*/}
                    <div className="card mb-5 mb-xl-8">
                      {/*begin::Card header*/}
                      <div className="card-header border-0">
                        <div className="card-title">
                          <h3 className="fw-bold m-0">Connected Accounts</h3>
                        </div>
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-2">
                        {/*begin::Notice*/}
                        <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
                          {/*begin::Icon*/}
                          {/*begin::Svg Icon | path: icons/duotune/art/art006.svg*/}
                          <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M22 19V17C22 16.4 21.6 16 21 16H8V3C8 2.4 7.6 2 7 2H5C4.4 2 4 2.4 4 3V19C4 19.6 4.4 20 5 20H21C21.6 20 22 19.6 22 19Z" fill="currentColor" />
                              <path d="M20 5V21C20 21.6 19.6 22 19 22H17C16.4 22 16 21.6 16 21V8H8V4H19C19.6 4 20 4.4 20 5ZM3 8H4V4H3C2.4 4 2 4.4 2 5V7C2 7.6 2.4 8 3 8Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                          {/*end::Icon*/}
                          {/*begin::Wrapper*/}
                          <div className="d-flex flex-stack flex-grow-1">
                            {/*begin::Content*/}
                            <div className="fw-semibold">
                              <div className="fs-6 text-gray-700">By connecting an account, you hereby agree to our
                                <a href="#" className="me-1">privacy policy</a>and
                                <a href="#">terms of use</a>.</div>
                            </div>
                            {/*end::Content*/}
                          </div>
                          {/*end::Wrapper*/}
                        </div>
                        {/*end::Notice*/}
                        {/*begin::Items*/}
                        <div className="py-2">
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            <div className="d-flex">
                              <img src="assets/media/svg/brand-logos/google-icon.svg" className="w-30px me-6" alt />
                              <div className="d-flex flex-column">
                                <a href="#" className="fs-5 text-dark text-hover-primary fw-bold">Google</a>
                                <div className="fs-6 fw-semibold text-muted">Plan properly your workflow</div>
                              </div>
                            </div>
                            <div className="d-flex justify-content-end">
                              {/*begin::Switch*/}
                              <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                {/*begin::Input*/}
                                <input className="form-check-input" name="google" type="checkbox" defaultValue={1} id="kt_modal_connected_accounts_google" defaultChecked="checked" />
                                {/*end::Input*/}
                                {/*begin::Label*/}
                                <span className="form-check-label fw-semibold text-muted" htmlFor="kt_modal_connected_accounts_google" />
                                {/*end::Label*/}
                              </label>
                              {/*end::Switch*/}
                            </div>
                          </div>
                          {/*end::Item*/}
                          <div className="separator separator-dashed my-5" />
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            <div className="d-flex">
                              <img src="assets/media/svg/brand-logos/github.svg" className="w-30px me-6" alt />
                              <div className="d-flex flex-column">
                                <a href="#" className="fs-5 text-dark text-hover-primary fw-bold">Github</a>
                                <div className="fs-6 fw-semibold text-muted">Keep eye on on your Repositories</div>
                              </div>
                            </div>
                            <div className="d-flex justify-content-end">
                              {/*begin::Switch*/}
                              <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                {/*begin::Input*/}
                                <input className="form-check-input" name="github" type="checkbox" defaultValue={1} id="kt_modal_connected_accounts_github" defaultChecked="checked" />
                                {/*end::Input*/}
                                {/*begin::Label*/}
                                <span className="form-check-label fw-semibold text-muted" htmlFor="kt_modal_connected_accounts_github" />
                                {/*end::Label*/}
                              </label>
                              {/*end::Switch*/}
                            </div>
                          </div>
                          {/*end::Item*/}
                          <div className="separator separator-dashed my-5" />
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            <div className="d-flex">
                              <img src="assets/media/svg/brand-logos/slack-icon.svg" className="w-30px me-6" alt />
                              <div className="d-flex flex-column">
                                <a href="#" className="fs-5 text-dark text-hover-primary fw-bold">Slack</a>
                                <div className="fs-6 fw-semibold text-muted">Integrate Projects Discussions</div>
                              </div>
                            </div>
                            <div className="d-flex justify-content-end">
                              {/*begin::Switch*/}
                              <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                {/*begin::Input*/}
                                <input className="form-check-input" name="slack" type="checkbox" defaultValue={1} id="kt_modal_connected_accounts_slack" />
                                {/*end::Input*/}
                                {/*begin::Label*/}
                                <span className="form-check-label fw-semibold text-muted" htmlFor="kt_modal_connected_accounts_slack" />
                                {/*end::Label*/}
                              </label>
                              {/*end::Switch*/}
                            </div>
                          </div>
                          {/*end::Item*/}
                        </div>
                        {/*end::Items*/}
                      </div>
                      {/*end::Card body*/}
                      {/*begin::Card footer*/}
                      <div className="card-footer border-0 d-flex justify-content-center pt-0">
                        <button className="btn btn-sm btn-light-primary">Save Changes</button>
                      </div>
                      {/*end::Card footer*/}
                    </div>
                    {/*end::Connected Accounts*/}
                  </div>
                  {/*end::Sidebar*/}
                  {/*begin::Content*/}
                  <div className="flex-lg-row-fluid ms-lg-15">
                    {/*begin:::Tabs*/}
                    <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-8">
                      {/*begin:::Tab item*/}
                      <li className="nav-item">
                        <a className="nav-link text-active-primary pb-4 active" data-bs-toggle="tab" href="#kt_customer_view_overview_tab">Overview</a>
                      </li>
                      {/*end:::Tab item*/}
                      {/*begin:::Tab item*/}
                      <li className="nav-item">
                        <a className="nav-link text-active-primary pb-4" data-bs-toggle="tab" href="#kt_customer_view_overview_events_and_logs_tab">Events &amp; Logs</a>
                      </li>
                      {/*end:::Tab item*/}
                      {/*begin:::Tab item*/}
                      <li className="nav-item">
                        <a className="nav-link text-active-primary pb-4" data-kt-countup-tabs="true" data-bs-toggle="tab" href="#kt_customer_view_overview_statements">Statements</a>
                      </li>
                      {/*end:::Tab item*/}
                      {/*begin:::Tab item*/}
                      <li className="nav-item ms-auto">
                        {/*begin::Action menu*/}
                        <a href="#" className="btn btn-primary ps-7" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">Actions
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                          <span className="svg-icon svg-icon-2 me-0">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}</a>
                        {/*begin::Menu*/}
                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold py-4 w-250px fs-6" data-kt-menu="true">
                          {/*begin::Menu item*/}
                          <div className="menu-item px-5">
                            <div className="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">Payments</div>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-5">
                            <a href="#" className="menu-link px-5">Create invoice</a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-5">
                            <a href="#" className="menu-link flex-stack px-5">Create payments
                              <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference" /></a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start">
                            <a href="#" className="menu-link px-5">
                              <span className="menu-title">Subscription</span>
                              <span className="menu-arrow" />
                            </a>
                            {/*begin::Menu sub*/}
                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-5">Apps</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-5">Billing</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-5">Statements</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu separator*/}
                              <div className="separator my-2" />
                              {/*end::Menu separator*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <div className="menu-content px-3">
                                  <label className="form-check form-switch form-check-custom form-check-solid">
                                    <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue name="notifications" defaultChecked="checked" id="kt_user_menu_notifications" />
                                    <span className="form-check-label text-muted fs-6" htmlFor="kt_user_menu_notifications">Notifications</span>
                                  </label>
                                </div>
                              </div>
                              {/*end::Menu item*/}
                            </div>
                            {/*end::Menu sub*/}
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu separator*/}
                          <div className="separator my-3" />
                          {/*end::Menu separator*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-5">
                            <div className="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">Account</div>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-5">
                            <a href="#" className="menu-link px-5">Reports</a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-5 my-1">
                            <a href="#" className="menu-link px-5">Account Settings</a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-5">
                            <a href="#" className="menu-link text-danger px-5">Delete customer</a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu*/}
                        {/*end::Menu*/}
                      </li>
                      {/*end:::Tab item*/}
                    </ul>
                    {/*end:::Tabs*/}
                    {/*begin:::Tab content*/}
                    <div className="tab-content" id="myTabContent">
                      {/*begin:::Tab pane*/}
                      <div className="tab-pane fade show active" id="kt_customer_view_overview_tab" role="tabpanel">
                        {/*begin::Card*/}
                        <div className="card pt-4 mb-6 mb-xl-9">
                          {/*begin::Card header*/}
                          <div className="card-header border-0">
                            {/*begin::Card title*/}
                            <div className="card-title">
                              <h2>Payment Records</h2>
                            </div>
                            {/*end::Card title*/}
                            {/*begin::Card toolbar*/}
                            <div className="card-toolbar">
                              {/*begin::Filter*/}
                              <button type="button" className="btn btn-sm btn-flex btn-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_payment">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                                <span className="svg-icon svg-icon-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                    <rect x="10.8891" y="17.8033" width={12} height={2} rx={1} transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                                    <rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}Add payment</button>
                              {/*end::Filter*/}
                            </div>
                            {/*end::Card toolbar*/}
                          </div>
                          {/*end::Card header*/}
                          {/*begin::Card body*/}
                          <div className="card-body pt-0 pb-5">
                            {/*begin::Table*/}
                            <table className="table align-middle table-row-dashed gy-5" id="kt_table_customers_payment">
                              {/*begin::Table head*/}
                              <thead className="border-bottom border-gray-200 fs-7 fw-bold">
                                {/*begin::Table row*/}
                                <tr className="text-start text-muted text-uppercase gs-0">
                                  <th className="min-w-100px">Invoice No.</th>
                                  <th>Status</th>
                                  <th>Amount</th>
                                  <th className="min-w-100px">Date</th>
                                  <th className="text-end min-w-100px pe-4">Actions</th>
                                </tr>
                                {/*end::Table row*/}
                              </thead>
                              {/*end::Table head*/}
                              {/*begin::Table body*/}
                              <tbody className="fs-6 fw-semibold text-gray-600">
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Invoice=*/}
                                  <td>
                                    <a href="#" className="text-gray-600 text-hover-primary mb-1">5711-9749</a>
                                  </td>
                                  {/*end::Invoice=*/}
                                  {/*begin::Status=*/}
                                  <td>
                                    <span className="badge badge-light-success">Successful</span>
                                  </td>
                                  {/*end::Status=*/}
                                  {/*begin::Amount=*/}
                                  <td>$1,200.00</td>
                                  {/*end::Amount=*/}
                                  {/*begin::Date=*/}
                                  <td>14 Dec 2020, 8:43 pm</td>
                                  {/*end::Date=*/}
                                  {/*begin::Action=*/}
                                  <td className="pe-0 text-end">
                                    <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}</a>
                                    {/*begin::Menu*/}
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu*/}
                                  </td>
                                  {/*end::Action=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Invoice=*/}
                                  <td>
                                    <a href="#" className="text-gray-600 text-hover-primary mb-1">9617-9391</a>
                                  </td>
                                  {/*end::Invoice=*/}
                                  {/*begin::Status=*/}
                                  <td>
                                    <span className="badge badge-light-success">Successful</span>
                                  </td>
                                  {/*end::Status=*/}
                                  {/*begin::Amount=*/}
                                  <td>$79.00</td>
                                  {/*end::Amount=*/}
                                  {/*begin::Date=*/}
                                  <td>01 Dec 2020, 10:12 am</td>
                                  {/*end::Date=*/}
                                  {/*begin::Action=*/}
                                  <td className="pe-0 text-end">
                                    <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}</a>
                                    {/*begin::Menu*/}
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu*/}
                                  </td>
                                  {/*end::Action=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Invoice=*/}
                                  <td>
                                    <a href="#" className="text-gray-600 text-hover-primary mb-1">7926-7798</a>
                                  </td>
                                  {/*end::Invoice=*/}
                                  {/*begin::Status=*/}
                                  <td>
                                    <span className="badge badge-light-success">Successful</span>
                                  </td>
                                  {/*end::Status=*/}
                                  {/*begin::Amount=*/}
                                  <td>$5,500.00</td>
                                  {/*end::Amount=*/}
                                  {/*begin::Date=*/}
                                  <td>12 Nov 2020, 2:01 pm</td>
                                  {/*end::Date=*/}
                                  {/*begin::Action=*/}
                                  <td className="pe-0 text-end">
                                    <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}</a>
                                    {/*begin::Menu*/}
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu*/}
                                  </td>
                                  {/*end::Action=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Invoice=*/}
                                  <td>
                                    <a href="#" className="text-gray-600 text-hover-primary mb-1">2173-1793</a>
                                  </td>
                                  {/*end::Invoice=*/}
                                  {/*begin::Status=*/}
                                  <td>
                                    <span className="badge badge-light-warning">Pending</span>
                                  </td>
                                  {/*end::Status=*/}
                                  {/*begin::Amount=*/}
                                  <td>$880.00</td>
                                  {/*end::Amount=*/}
                                  {/*begin::Date=*/}
                                  <td>21 Oct 2020, 5:54 pm</td>
                                  {/*end::Date=*/}
                                  {/*begin::Action=*/}
                                  <td className="pe-0 text-end">
                                    <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}</a>
                                    {/*begin::Menu*/}
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu*/}
                                  </td>
                                  {/*end::Action=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Invoice=*/}
                                  <td>
                                    <a href="#" className="text-gray-600 text-hover-primary mb-1">1301-8603</a>
                                  </td>
                                  {/*end::Invoice=*/}
                                  {/*begin::Status=*/}
                                  <td>
                                    <span className="badge badge-light-success">Successful</span>
                                  </td>
                                  {/*end::Status=*/}
                                  {/*begin::Amount=*/}
                                  <td>$7,650.00</td>
                                  {/*end::Amount=*/}
                                  {/*begin::Date=*/}
                                  <td>19 Oct 2020, 7:32 am</td>
                                  {/*end::Date=*/}
                                  {/*begin::Action=*/}
                                  <td className="pe-0 text-end">
                                    <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}</a>
                                    {/*begin::Menu*/}
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu*/}
                                  </td>
                                  {/*end::Action=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Invoice=*/}
                                  <td>
                                    <a href="#" className="text-gray-600 text-hover-primary mb-1">1114-8095</a>
                                  </td>
                                  {/*end::Invoice=*/}
                                  {/*begin::Status=*/}
                                  <td>
                                    <span className="badge badge-light-success">Successful</span>
                                  </td>
                                  {/*end::Status=*/}
                                  {/*begin::Amount=*/}
                                  <td>$375.00</td>
                                  {/*end::Amount=*/}
                                  {/*begin::Date=*/}
                                  <td>23 Sep 2020, 12:38 am</td>
                                  {/*end::Date=*/}
                                  {/*begin::Action=*/}
                                  <td className="pe-0 text-end">
                                    <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}</a>
                                    {/*begin::Menu*/}
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu*/}
                                  </td>
                                  {/*end::Action=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Invoice=*/}
                                  <td>
                                    <a href="#" className="text-gray-600 text-hover-primary mb-1">6351-2090</a>
                                  </td>
                                  {/*end::Invoice=*/}
                                  {/*begin::Status=*/}
                                  <td>
                                    <span className="badge badge-light-success">Successful</span>
                                  </td>
                                  {/*end::Status=*/}
                                  {/*begin::Amount=*/}
                                  <td>$129.00</td>
                                  {/*end::Amount=*/}
                                  {/*begin::Date=*/}
                                  <td>11 Sep 2020, 3:18 pm</td>
                                  {/*end::Date=*/}
                                  {/*begin::Action=*/}
                                  <td className="pe-0 text-end">
                                    <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}</a>
                                    {/*begin::Menu*/}
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu*/}
                                  </td>
                                  {/*end::Action=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Invoice=*/}
                                  <td>
                                    <a href="#" className="text-gray-600 text-hover-primary mb-1">4544-3519</a>
                                  </td>
                                  {/*end::Invoice=*/}
                                  {/*begin::Status=*/}
                                  <td>
                                    <span className="badge badge-light-danger">Rejected</span>
                                  </td>
                                  {/*end::Status=*/}
                                  {/*begin::Amount=*/}
                                  <td>$450.00</td>
                                  {/*end::Amount=*/}
                                  {/*begin::Date=*/}
                                  <td>03 Sep 2020, 1:08 am</td>
                                  {/*end::Date=*/}
                                  {/*begin::Action=*/}
                                  <td className="pe-0 text-end">
                                    <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}</a>
                                    {/*begin::Menu*/}
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu*/}
                                  </td>
                                  {/*end::Action=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Invoice=*/}
                                  <td>
                                    <a href="#" className="text-gray-600 text-hover-primary mb-1">4518-9312</a>
                                  </td>
                                  {/*end::Invoice=*/}
                                  {/*begin::Status=*/}
                                  <td>
                                    <span className="badge badge-light-warning">Pending</span>
                                  </td>
                                  {/*end::Status=*/}
                                  {/*begin::Amount=*/}
                                  <td>$8,700.00</td>
                                  {/*end::Amount=*/}
                                  {/*begin::Date=*/}
                                  <td>01 Sep 2020, 4:58 pm</td>
                                  {/*end::Date=*/}
                                  {/*begin::Action=*/}
                                  <td className="pe-0 text-end">
                                    <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}</a>
                                    {/*begin::Menu*/}
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu*/}
                                  </td>
                                  {/*end::Action=*/}
                                </tr>
                                {/*end::Table row*/}
                              </tbody>
                              {/*end::Table body*/}
                            </table>
                            {/*end::Table*/}
                          </div>
                          {/*end::Card body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card pt-4 mb-6 mb-xl-9">
                          {/*begin::Card header*/}
                          <div className="card-header border-0">
                            {/*begin::Card title*/}
                            <div className="card-title">
                              <h2 className="fw-bold mb-0">Payment Methods</h2>
                            </div>
                            {/*end::Card title*/}
                            {/*begin::Card toolbar*/}
                            <div className="card-toolbar">
                              <a href="#" className="btn btn-sm btn-flex btn-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_new_card">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                                <span className="svg-icon svg-icon-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                    <rect x="10.8891" y="17.8033" width={12} height={2} rx={1} transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                                    <rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}Add new method</a>
                            </div>
                            {/*end::Card toolbar*/}
                          </div>
                          {/*end::Card header*/}
                          {/*begin::Card body*/}
                          <div id="kt_customer_view_payment_method" className="card-body pt-0">
                            {/*begin::Option*/}
                            <div className="py-0" data-kt-customer-payment-method="row">
                              {/*begin::Header*/}
                              <div className="py-3 d-flex flex-stack flex-wrap">
                                {/*begin::Toggle*/}
                                <div className="d-flex align-items-center collapsible rotate" data-bs-toggle="collapse" href="#kt_customer_view_payment_method_1" role="button" aria-expanded="false" aria-controls="kt_customer_view_payment_method_1">
                                  {/*begin::Arrow*/}
                                  <div className="me-3 rotate-90">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                    <span className="svg-icon svg-icon-3">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </div>
                                  {/*end::Arrow*/}
                                  {/*begin::Logo*/}
                                  <img src="assets/media/svg/card-logos/mastercard.svg" className="w-40px me-3" alt />
                                  {/*end::Logo*/}
                                  {/*begin::Summary*/}
                                  <div className="me-3">
                                    <div className="d-flex align-items-center">
                                      <div className="text-gray-800 fw-bold">Mastercard</div>
                                      <div className="badge badge-light-primary ms-5">Primary</div>
                                    </div>
                                    <div className="text-muted">Expires Dec 2024</div>
                                  </div>
                                  {/*end::Summary*/}
                                </div>
                                {/*end::Toggle*/}
                                {/*begin::Toolbar*/}
                                <div className="d-flex my-3 ms-9">
                                  {/*begin::Edit*/}
                                  <a href="#" className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_new_card">
                                    <span data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit">
                                      {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                      <span className="svg-icon svg-icon-3">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                          <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                  {/*end::Edit*/}
                                  {/*begin::Delete*/}
                                  <a href="#" className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="tooltip" title="Delete" data-kt-customer-payment-method="delete">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                    <span className="svg-icon svg-icon-3">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                        <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                        <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                  {/*end::Delete*/}
                                  {/*begin::More*/}
                                  <a href="#" className="btn btn-icon btn-active-light-primary w-30px h-30px" data-bs-toggle="tooltip" title="More Options" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                    <span className="svg-icon svg-icon-3">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                        <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                  {/*begin::Menu*/}
                                  <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-150px py-3" data-kt-menu="true">
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3" data-kt-payment-mehtod-action="set_as_primary">Set as Primary</a>
                                    </div>
                                    {/*end::Menu item*/}
                                  </div>
                                  {/*end::Menu*/}
                                  {/*end::More*/}
                                </div>
                                {/*end::Toolbar*/}
                              </div>
                              {/*end::Header*/}
                              {/*begin::Body*/}
                              <div id="kt_customer_view_payment_method_1" className="collapse show fs-6 ps-10" data-bs-parent="#kt_customer_view_payment_method">
                                {/*begin::Details*/}
                                <div className="d-flex flex-wrap py-5">
                                  {/*begin::Col*/}
                                  <div className="flex-equal me-5">
                                    <table className="table table-flush fw-semibold gy-1">
                                      <tbody><tr>
                                          <td className="text-muted min-w-125px w-125px">Name</td>
                                          <td className="text-gray-800">Emma Smith</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Number</td>
                                          <td className="text-gray-800">**** 1319</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Expires</td>
                                          <td className="text-gray-800">12/2024</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Type</td>
                                          <td className="text-gray-800">Mastercard credit card</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Issuer</td>
                                          <td className="text-gray-800">VICBANK</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">ID</td>
                                          <td className="text-gray-800">id_4325df90sdf8</td>
                                        </tr>
                                      </tbody></table>
                                  </div>
                                  {/*end::Col*/}
                                  {/*begin::Col*/}
                                  <div className="flex-equal">
                                    <table className="table table-flush fw-semibold gy-1">
                                      <tbody><tr>
                                          <td className="text-muted min-w-125px w-125px">Billing address</td>
                                          <td className="text-gray-800">AU</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Phone</td>
                                          <td className="text-gray-800">No phone provided</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Email</td>
                                          <td className="text-gray-800">
                                            <a href="#" className="text-gray-900 text-hover-primary">smith@kpmg.com</a>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Origin</td>
                                          <td className="text-gray-800">Australia
                                            <div className="symbol symbol-20px symbol-circle ms-2">
                                              <img src="assets/media/flags/australia.svg" />
                                            </div></td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">CVC check</td>
                                          <td className="text-gray-800">Passed
                                            {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                            <span className="svg-icon svg-icon-2 svg-icon-success">
                                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                                                <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}</td>
                                        </tr>
                                      </tbody></table>
                                  </div>
                                  {/*end::Col*/}
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*end::Body*/}
                            </div>
                            {/*end::Option*/}
                            <div className="separator separator-dashed" />
                            {/*begin::Option*/}
                            <div className="py-0" data-kt-customer-payment-method="row">
                              {/*begin::Header*/}
                              <div className="py-3 d-flex flex-stack flex-wrap">
                                {/*begin::Toggle*/}
                                <div className="d-flex align-items-center collapsible collapsed rotate" data-bs-toggle="collapse" href="#kt_customer_view_payment_method_2" role="button" aria-expanded="false" aria-controls="kt_customer_view_payment_method_2">
                                  {/*begin::Arrow*/}
                                  <div className="me-3 rotate-90">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                    <span className="svg-icon svg-icon-3">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </div>
                                  {/*end::Arrow*/}
                                  {/*begin::Logo*/}
                                  <img src="assets/media/svg/card-logos/visa.svg" className="w-40px me-3" alt />
                                  {/*end::Logo*/}
                                  {/*begin::Summary*/}
                                  <div className="me-3">
                                    <div className="d-flex align-items-center">
                                      <div className="text-gray-800 fw-bold">Visa</div>
                                    </div>
                                    <div className="text-muted">Expires Feb 2022</div>
                                  </div>
                                  {/*end::Summary*/}
                                </div>
                                {/*end::Toggle*/}
                                {/*begin::Toolbar*/}
                                <div className="d-flex my-3 ms-9">
                                  {/*begin::Edit*/}
                                  <a href="#" className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_new_card">
                                    <span data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit">
                                      {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                      <span className="svg-icon svg-icon-3">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                          <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                  {/*end::Edit*/}
                                  {/*begin::Delete*/}
                                  <a href="#" className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="tooltip" title="Delete" data-kt-customer-payment-method="delete">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                    <span className="svg-icon svg-icon-3">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                        <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                        <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                  {/*end::Delete*/}
                                  {/*begin::More*/}
                                  <a href="#" className="btn btn-icon btn-active-light-primary w-30px h-30px" data-bs-toggle="tooltip" title="More Options" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                    <span className="svg-icon svg-icon-3">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                        <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                  {/*begin::Menu*/}
                                  <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-150px py-3" data-kt-menu="true">
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3" data-kt-payment-mehtod-action="set_as_primary">Set as Primary</a>
                                    </div>
                                    {/*end::Menu item*/}
                                  </div>
                                  {/*end::Menu*/}
                                  {/*end::More*/}
                                </div>
                                {/*end::Toolbar*/}
                              </div>
                              {/*end::Header*/}
                              {/*begin::Body*/}
                              <div id="kt_customer_view_payment_method_2" className="collapse fs-6 ps-10" data-bs-parent="#kt_customer_view_payment_method">
                                {/*begin::Details*/}
                                <div className="d-flex flex-wrap py-5">
                                  {/*begin::Col*/}
                                  <div className="flex-equal me-5">
                                    <table className="table table-flush fw-semibold gy-1">
                                      <tbody><tr>
                                          <td className="text-muted min-w-125px w-125px">Name</td>
                                          <td className="text-gray-800">Melody Macy</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Number</td>
                                          <td className="text-gray-800">**** 3389</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Expires</td>
                                          <td className="text-gray-800">02/2022</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Type</td>
                                          <td className="text-gray-800">Visa credit card</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Issuer</td>
                                          <td className="text-gray-800">ENBANK</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">ID</td>
                                          <td className="text-gray-800">id_w2r84jdy723</td>
                                        </tr>
                                      </tbody></table>
                                  </div>
                                  {/*end::Col*/}
                                  {/*begin::Col*/}
                                  <div className="flex-equal">
                                    <table className="table table-flush fw-semibold gy-1">
                                      <tbody><tr>
                                          <td className="text-muted min-w-125px w-125px">Billing address</td>
                                          <td className="text-gray-800">UK</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Phone</td>
                                          <td className="text-gray-800">No phone provided</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Email</td>
                                          <td className="text-gray-800">
                                            <a href="#" className="text-gray-900 text-hover-primary">melody@altbox.com</a>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Origin</td>
                                          <td className="text-gray-800">United Kingdom
                                            <div className="symbol symbol-20px symbol-circle ms-2">
                                              <img src="assets/media/flags/united-kingdom.svg" />
                                            </div></td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">CVC check</td>
                                          <td className="text-gray-800">Passed
                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
                                            <span className="svg-icon svg-icon-2 svg-icon-success">
                                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.3" d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="currentColor" />
                                                <path d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="currentColor" />
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}</td>
                                        </tr>
                                      </tbody></table>
                                  </div>
                                  {/*end::Col*/}
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*end::Body*/}
                            </div>
                            {/*end::Option*/}
                            <div className="separator separator-dashed" />
                            {/*begin::Option*/}
                            <div className="py-0" data-kt-customer-payment-method="row">
                              {/*begin::Header*/}
                              <div className="py-3 d-flex flex-stack flex-wrap">
                                {/*begin::Toggle*/}
                                <div className="d-flex align-items-center collapsible collapsed rotate" data-bs-toggle="collapse" href="#kt_customer_view_payment_method_3" role="button" aria-expanded="false" aria-controls="kt_customer_view_payment_method_3">
                                  {/*begin::Arrow*/}
                                  <div className="me-3 rotate-90">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                    <span className="svg-icon svg-icon-3">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </div>
                                  {/*end::Arrow*/}
                                  {/*begin::Logo*/}
                                  <img src="assets/media/svg/card-logos/american-express.svg" className="w-40px me-3" alt />
                                  {/*end::Logo*/}
                                  {/*begin::Summary*/}
                                  <div className="me-3">
                                    <div className="d-flex align-items-center">
                                      <div className="text-gray-800 fw-bold">American Express</div>
                                      <div className="badge badge-light-danger ms-5">Expired</div>
                                    </div>
                                    <div className="text-muted">Expires Aug 2021</div>
                                  </div>
                                  {/*end::Summary*/}
                                </div>
                                {/*end::Toggle*/}
                                {/*begin::Toolbar*/}
                                <div className="d-flex my-3 ms-9">
                                  {/*begin::Edit*/}
                                  <a href="#" className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_new_card">
                                    <span data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit">
                                      {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                      <span className="svg-icon svg-icon-3">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                          <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                  {/*end::Edit*/}
                                  {/*begin::Delete*/}
                                  <a href="#" className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="tooltip" title="Delete" data-kt-customer-payment-method="delete">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                    <span className="svg-icon svg-icon-3">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                        <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                        <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                  {/*end::Delete*/}
                                  {/*begin::More*/}
                                  <a href="#" className="btn btn-icon btn-active-light-primary w-30px h-30px" data-bs-toggle="tooltip" title="More Options" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                    <span className="svg-icon svg-icon-3">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                        <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                  {/*begin::Menu*/}
                                  <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-150px py-3" data-kt-menu="true">
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3" data-kt-payment-mehtod-action="set_as_primary">Set as Primary</a>
                                    </div>
                                    {/*end::Menu item*/}
                                  </div>
                                  {/*end::Menu*/}
                                  {/*end::More*/}
                                </div>
                                {/*end::Toolbar*/}
                              </div>
                              {/*end::Header*/}
                              {/*begin::Body*/}
                              <div id="kt_customer_view_payment_method_3" className="collapse fs-6 ps-10" data-bs-parent="#kt_customer_view_payment_method">
                                {/*begin::Details*/}
                                <div className="d-flex flex-wrap py-5">
                                  {/*begin::Col*/}
                                  <div className="flex-equal me-5">
                                    <table className="table table-flush fw-semibold gy-1">
                                      <tbody><tr>
                                          <td className="text-muted min-w-125px w-125px">Name</td>
                                          <td className="text-gray-800">Max Smith</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Number</td>
                                          <td className="text-gray-800">**** 5841</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Expires</td>
                                          <td className="text-gray-800">08/2021</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Type</td>
                                          <td className="text-gray-800">American express credit card</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Issuer</td>
                                          <td className="text-gray-800">USABANK</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">ID</td>
                                          <td className="text-gray-800">id_89457jcje63</td>
                                        </tr>
                                      </tbody></table>
                                  </div>
                                  {/*end::Col*/}
                                  {/*begin::Col*/}
                                  <div className="flex-equal">
                                    <table className="table table-flush fw-semibold gy-1">
                                      <tbody><tr>
                                          <td className="text-muted min-w-125px w-125px">Billing address</td>
                                          <td className="text-gray-800">US</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Phone</td>
                                          <td className="text-gray-800">No phone provided</td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Email</td>
                                          <td className="text-gray-800">
                                            <a href="#" className="text-gray-900 text-hover-primary">max@kt.com</a>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">Origin</td>
                                          <td className="text-gray-800">United States of America
                                            <div className="symbol symbol-20px symbol-circle ms-2">
                                              <img src="assets/media/flags/united-states.svg" />
                                            </div></td>
                                        </tr>
                                        <tr>
                                          <td className="text-muted min-w-125px w-125px">CVC check</td>
                                          <td className="text-gray-800">Failed
                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                            <span className="svg-icon svg-icon-2 svg-icon-danger">
                                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}</td>
                                        </tr>
                                      </tbody></table>
                                  </div>
                                  {/*end::Col*/}
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*end::Body*/}
                            </div>
                            {/*end::Option*/}
                          </div>
                          {/*end::Card body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card pt-4 mb-6 mb-xl-9">
                          {/*begin::Card header*/}
                          <div className="card-header border-0">
                            {/*begin::Card title*/}
                            <div className="card-title">
                              <h2 className="fw-bold">Credit Balance</h2>
                            </div>
                            {/*end::Card title*/}
                            {/*begin::Card toolbar*/}
                            <div className="card-toolbar">
                              <a href="#" className="btn btn-sm btn-flex btn-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_adjust_balance">
                                {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                <span className="svg-icon svg-icon-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}Adjust Balance</a>
                            </div>
                            {/*end::Card toolbar*/}
                          </div>
                          {/*end::Card header*/}
                          {/*begin::Card body*/}
                          <div className="card-body pt-0">
                            <div className="fw-bold fs-2">$32,487.57
                              <span className="text-muted fs-4 fw-semibold">USD</span>
                              <div className="fs-7 fw-normal text-muted">Balance will increase the amount due on the customer's next invoice.</div></div>
                          </div>
                          {/*end::Card body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card pt-2 mb-6 mb-xl-9">
                          {/*begin::Card header*/}
                          <div className="card-header border-0">
                            {/*begin::Card title*/}
                            <div className="card-title">
                              <h2>Invoices</h2>
                            </div>
                            {/*end::Card title*/}
                            {/*begin::Toolbar*/}
                            <div className="card-toolbar m-0">
                              {/*begin::Tab nav*/}
                              <ul className="nav nav-stretch fs-5 fw-semibold nav-line-tabs nav-line-tabs-2x border-transparent" role="tablist">
                                <li className="nav-item" role="presentation">
                                  <a id="kt_referrals_year_tab" className="nav-link text-active-primary active" data-bs-toggle="tab" role="tab" href="#kt_customer_details_invoices_1">This Year</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <a id="kt_referrals_2019_tab" className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab" href="#kt_customer_details_invoices_2">2020</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <a id="kt_referrals_2018_tab" className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab" href="#kt_customer_details_invoices_3">2019</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <a id="kt_referrals_2017_tab" className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab" href="#kt_customer_details_invoices_4">2018</a>
                                </li>
                              </ul>
                              {/*end::Tab nav*/}
                            </div>
                            {/*end::Toolbar*/}
                          </div>
                          {/*end::Card header*/}
                          {/*begin::Card body*/}
                          <div className="card-body pt-0">
                            {/*begin::Tab Content*/}
                            <div id="kt_referred_users_tab_content" className="tab-content">
                              {/*begin::Tab panel*/}
                              <div id="kt_customer_details_invoices_1" className="py-0 tab-pane fade show active" role="tabpanel">
                                {/*begin::Table*/}
                                <table id="kt_customer_details_invoices_table_1" className="table align-middle table-row-dashed fs-6 fw-bold gy-5">
                                  {/*begin::Thead*/}
                                  <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bold">
                                    <tr className="text-start text-muted gs-0">
                                      <th className="min-w-100px">Order ID</th>
                                      <th className="min-w-100px">Amount</th>
                                      <th className="min-w-100px">Status</th>
                                      <th className="min-w-125px">Date</th>
                                      <th className="min-w-100px text-end pe-7">Invoice</th>
                                    </tr>
                                  </thead>
                                  {/*end::Thead*/}
                                  {/*begin::Tbody*/}
                                  <tbody className="fs-6 fw-semibold text-gray-600">
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                      </td>
                                      <td className="text-success">$38.00</td>
                                      <td>
                                        <span className="badge badge-light-success">Approved</span>
                                      </td>
                                      <td>Nov 01, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                      </td>
                                      <td className="text-danger">$-2.60</td>
                                      <td>
                                        <span className="badge badge-light-warning">Pending</span>
                                      </td>
                                      <td>Oct 24, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td className="text-success">$76.00</td>
                                      <td>
                                        <span className="badge badge-light-warning">Pending</span>
                                      </td>
                                      <td>Oct 08, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td className="text-success">$5.00</td>
                                      <td>
                                        <span className="badge badge-light-info">In progress</span>
                                      </td>
                                      <td>Sep 15, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">523445943</a>
                                      </td>
                                      <td className="text-danger">$-1.30</td>
                                      <td>
                                        <span className="badge badge-light-warning">Pending</span>
                                      </td>
                                      <td>May 30, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">231445943</a>
                                      </td>
                                      <td className="text-success">$204.00</td>
                                      <td>
                                        <span className="badge badge-light-danger">Rejected</span>
                                      </td>
                                      <td>Apr 22, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">426445943</a>
                                      </td>
                                      <td className="text-success">$31.00</td>
                                      <td>
                                        <span className="badge badge-light-info">In progress</span>
                                      </td>
                                      <td>Feb 09, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">984445943</a>
                                      </td>
                                      <td className="text-success">$52.00</td>
                                      <td>
                                        <span className="badge badge-light-warning">Pending</span>
                                      </td>
                                      <td>Nov 01, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">324442313</a>
                                      </td>
                                      <td className="text-danger">$-0.80</td>
                                      <td>
                                        <span className="badge badge-light-danger">Rejected</span>
                                      </td>
                                      <td>Jan 04, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                  </tbody>
                                  {/*end::Tbody*/}
                                </table>
                                {/*end::Table*/}
                              </div>
                              {/*end::Tab panel*/}
                              {/*begin::Tab panel*/}
                              <div id="kt_customer_details_invoices_2" className="py-0 tab-pane fade" role="tabpanel">
                                {/*begin::Table*/}
                                <table id="kt_customer_details_invoices_table_2" className="table align-middle table-row-dashed fs-6 fw-bold gy-5">
                                  {/*begin::Thead*/}
                                  <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bold">
                                    <tr className="text-start text-muted gs-0">
                                      <th className="min-w-100px">Order ID</th>
                                      <th className="min-w-100px">Amount</th>
                                      <th className="min-w-100px">Status</th>
                                      <th className="min-w-125px">Date</th>
                                      <th className="min-w-100px text-end pe-7">Invoice</th>
                                    </tr>
                                  </thead>
                                  {/*end::Thead*/}
                                  {/*begin::Tbody*/}
                                  <tbody className="fs-6 fw-semibold text-gray-600">
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">523445943</a>
                                      </td>
                                      <td className="text-danger">$-1.30</td>
                                      <td>
                                        <span className="badge badge-light-danger">Rejected</span>
                                      </td>
                                      <td>May 30, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">231445943</a>
                                      </td>
                                      <td className="text-success">$204.00</td>
                                      <td>
                                        <span className="badge badge-light-danger">Rejected</span>
                                      </td>
                                      <td>Apr 22, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">426445943</a>
                                      </td>
                                      <td className="text-success">$31.00</td>
                                      <td>
                                        <span className="badge badge-light-danger">Rejected</span>
                                      </td>
                                      <td>Feb 09, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">984445943</a>
                                      </td>
                                      <td className="text-success">$52.00</td>
                                      <td>
                                        <span className="badge badge-light-danger">Rejected</span>
                                      </td>
                                      <td>Nov 01, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">324442313</a>
                                      </td>
                                      <td className="text-danger">$-0.80</td>
                                      <td>
                                        <span className="badge badge-light-warning">Pending</span>
                                      </td>
                                      <td>Jan 04, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                      </td>
                                      <td className="text-success">$38.00</td>
                                      <td>
                                        <span className="badge badge-light-success">Approved</span>
                                      </td>
                                      <td>Nov 01, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                      </td>
                                      <td className="text-danger">$-2.60</td>
                                      <td>
                                        <span className="badge badge-light-warning">Pending</span>
                                      </td>
                                      <td>Oct 24, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td className="text-success">$76.00</td>
                                      <td>
                                        <span className="badge badge-light-warning">Pending</span>
                                      </td>
                                      <td>Oct 08, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td className="text-success">$5.00</td>
                                      <td>
                                        <span className="badge badge-light-info">In progress</span>
                                      </td>
                                      <td>Sep 15, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                  </tbody>
                                  {/*end::Tbody*/}
                                </table>
                                {/*end::Table*/}
                              </div>
                              {/*end::Tab panel*/}
                              {/*begin::Tab panel*/}
                              <div id="kt_customer_details_invoices_3" className="py-0 tab-pane fade" role="tabpanel">
                                {/*begin::Table*/}
                                <table id="kt_customer_details_invoices_table_3" className="table align-middle table-row-dashed fs-6 fw-bold gy-5">
                                  {/*begin::Thead*/}
                                  <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bold">
                                    <tr className="text-start text-muted gs-0">
                                      <th className="min-w-100px">Order ID</th>
                                      <th className="min-w-100px">Amount</th>
                                      <th className="min-w-100px">Status</th>
                                      <th className="min-w-125px">Date</th>
                                      <th className="min-w-100px text-end pe-7">Invoice</th>
                                    </tr>
                                  </thead>
                                  {/*end::Thead*/}
                                  {/*begin::Tbody*/}
                                  <tbody className="fs-6 fw-semibold text-gray-600">
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">426445943</a>
                                      </td>
                                      <td className="text-success">$31.00</td>
                                      <td>
                                        <span className="badge badge-light-success">Approved</span>
                                      </td>
                                      <td>Feb 09, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">984445943</a>
                                      </td>
                                      <td className="text-success">$52.00</td>
                                      <td>
                                        <span className="badge badge-light-success">Approved</span>
                                      </td>
                                      <td>Nov 01, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">324442313</a>
                                      </td>
                                      <td className="text-danger">$-0.80</td>
                                      <td>
                                        <span className="badge badge-light-warning">Pending</span>
                                      </td>
                                      <td>Jan 04, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td className="text-success">$5.00</td>
                                      <td>
                                        <span className="badge badge-light-success">Approved</span>
                                      </td>
                                      <td>Sep 15, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                      </td>
                                      <td className="text-success">$38.00</td>
                                      <td>
                                        <span className="badge badge-light-success">Approved</span>
                                      </td>
                                      <td>Nov 01, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                      </td>
                                      <td className="text-danger">$-2.60</td>
                                      <td>
                                        <span className="badge badge-light-success">Approved</span>
                                      </td>
                                      <td>Oct 24, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td className="text-success">$76.00</td>
                                      <td>
                                        <span className="badge badge-light-danger">Rejected</span>
                                      </td>
                                      <td>Oct 08, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">523445943</a>
                                      </td>
                                      <td className="text-danger">$-1.30</td>
                                      <td>
                                        <span className="badge badge-light-info">In progress</span>
                                      </td>
                                      <td>May 30, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">231445943</a>
                                      </td>
                                      <td className="text-success">$204.00</td>
                                      <td>
                                        <span className="badge badge-light-success">Approved</span>
                                      </td>
                                      <td>Apr 22, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                  </tbody>
                                  {/*end::Tbody*/}
                                </table>
                                {/*end::Table*/}
                              </div>
                              {/*end::Tab panel*/}
                              {/*begin::Tab panel*/}
                              <div id="kt_customer_details_invoices_4" className="py-0 tab-pane fade" role="tabpanel">
                                {/*begin::Table*/}
                                <table id="kt_customer_details_invoices_table_4" className="table align-middle table-row-dashed fs-6 fw-bold gy-5">
                                  {/*begin::Thead*/}
                                  <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bold">
                                    <tr className="text-start text-muted gs-0">
                                      <th className="min-w-100px">Order ID</th>
                                      <th className="min-w-100px">Amount</th>
                                      <th className="min-w-100px">Status</th>
                                      <th className="min-w-125px">Date</th>
                                      <th className="min-w-100px text-end pe-7">Invoice</th>
                                    </tr>
                                  </thead>
                                  {/*end::Thead*/}
                                  {/*begin::Tbody*/}
                                  <tbody className="fs-6 fw-semibold text-gray-600">
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                      </td>
                                      <td className="text-success">$38.00</td>
                                      <td>
                                        <span className="badge badge-light-warning">Pending</span>
                                      </td>
                                      <td>Nov 01, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                      </td>
                                      <td className="text-danger">$-2.60</td>
                                      <td>
                                        <span className="badge badge-light-warning">Pending</span>
                                      </td>
                                      <td>Oct 24, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                      </td>
                                      <td className="text-success">$38.00</td>
                                      <td>
                                        <span className="badge badge-light-success">Approved</span>
                                      </td>
                                      <td>Nov 01, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                      </td>
                                      <td className="text-danger">$-2.60</td>
                                      <td>
                                        <span className="badge badge-light-info">In progress</span>
                                      </td>
                                      <td>Oct 24, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">426445943</a>
                                      </td>
                                      <td className="text-success">$31.00</td>
                                      <td>
                                        <span className="badge badge-light-info">In progress</span>
                                      </td>
                                      <td>Feb 09, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">984445943</a>
                                      </td>
                                      <td className="text-success">$52.00</td>
                                      <td>
                                        <span className="badge badge-light-success">Approved</span>
                                      </td>
                                      <td>Nov 01, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">324442313</a>
                                      </td>
                                      <td className="text-danger">$-0.80</td>
                                      <td>
                                        <span className="badge badge-light-warning">Pending</span>
                                      </td>
                                      <td>Jan 04, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td className="text-success">$76.00</td>
                                      <td>
                                        <span className="badge badge-light-info">In progress</span>
                                      </td>
                                      <td>Oct 08, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td className="text-success">$76.00</td>
                                      <td>
                                        <span className="badge badge-light-info">In progress</span>
                                      </td>
                                      <td>Oct 08, 2020</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                  </tbody>
                                  {/*end::Tbody*/}
                                </table>
                                {/*end::Table*/}
                              </div>
                              {/*end::Tab panel*/}
                            </div>
                            {/*end::Tab Content*/}
                          </div>
                          {/*end::Card body*/}
                        </div>
                        {/*end::Card*/}
                      </div>
                      {/*end:::Tab pane*/}
                      {/*begin:::Tab pane*/}
                      <div className="tab-pane fade" id="kt_customer_view_overview_events_and_logs_tab" role="tabpanel">
                        {/*begin::Card*/}
                        <div className="card pt-4 mb-6 mb-xl-9">
                          {/*begin::Card header*/}
                          <div className="card-header border-0">
                            {/*begin::Card title*/}
                            <div className="card-title">
                              <h2>Logs</h2>
                            </div>
                            {/*end::Card title*/}
                            {/*begin::Card toolbar*/}
                            <div className="card-toolbar">
                              {/*begin::Button*/}
                              <button type="button" className="btn btn-sm btn-light-primary">
                                {/*begin::Svg Icon | path: icons/duotune/files/fil021.svg*/}
                                <span className="svg-icon svg-icon-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M19 15C20.7 15 22 13.7 22 12C22 10.3 20.7 9 19 9C18.9 9 18.9 9 18.8 9C18.9 8.7 19 8.3 19 8C19 6.3 17.7 5 16 5C15.4 5 14.8 5.2 14.3 5.5C13.4 4 11.8 3 10 3C7.2 3 5 5.2 5 8C5 8.3 5 8.7 5.1 9H5C3.3 9 2 10.3 2 12C2 13.7 3.3 15 5 15H19Z" fill="currentColor" />
                                    <path d="M13 17.4V12C13 11.4 12.6 11 12 11C11.4 11 11 11.4 11 12V17.4H13Z" fill="currentColor" />
                                    <path opacity="0.3" d="M8 17.4H16L12.7 20.7C12.3 21.1 11.7 21.1 11.3 20.7L8 17.4Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}Download Report</button>
                              {/*end::Button*/}
                            </div>
                            {/*end::Card toolbar*/}
                          </div>
                          {/*end::Card header*/}
                          {/*begin::Card body*/}
                          <div className="card-body py-0">
                            {/*begin::Table wrapper*/}
                            <div className="table-responsive">
                              {/*begin::Table*/}
                              <table className="table align-middle table-row-dashed fw-semibold text-gray-600 fs-6 gy-5" id="kt_table_customers_logs">
                                {/*begin::Table body*/}
                                <tbody>
                                  {/*begin::Table row*/}
                                  <tr>
                                    {/*begin::Badge=*/}
                                    <td className="min-w-70px">
                                      <div className="badge badge-light-success">200 OK</div>
                                    </td>
                                    {/*end::Badge=*/}
                                    {/*begin::Status=*/}
                                    <td>POST /v1/invoices/in_6626_3893/payment</td>
                                    {/*end::Status=*/}
                                    {/*begin::Timestamp=*/}
                                    <td className="pe-0 text-end min-w-200px">22 Sep 2023, 8:43 pm</td>
                                    {/*end::Timestamp=*/}
                                  </tr>
                                  {/*end::Table row*/}
                                  {/*begin::Table row*/}
                                  <tr>
                                    {/*begin::Badge=*/}
                                    <td className="min-w-70px">
                                      <div className="badge badge-light-warning">404 WRN</div>
                                    </td>
                                    {/*end::Badge=*/}
                                    {/*begin::Status=*/}
                                    <td>POST /v1/customer/c_63d0d9f497def/not_found</td>
                                    {/*end::Status=*/}
                                    {/*begin::Timestamp=*/}
                                    <td className="pe-0 text-end min-w-200px">19 Aug 2023, 6:05 pm</td>
                                    {/*end::Timestamp=*/}
                                  </tr>
                                  {/*end::Table row*/}
                                  {/*begin::Table row*/}
                                  <tr>
                                    {/*begin::Badge=*/}
                                    <td className="min-w-70px">
                                      <div className="badge badge-light-warning">404 WRN</div>
                                    </td>
                                    {/*end::Badge=*/}
                                    {/*begin::Status=*/}
                                    <td>POST /v1/customer/c_63d0d9f497def/not_found</td>
                                    {/*end::Status=*/}
                                    {/*begin::Timestamp=*/}
                                    <td className="pe-0 text-end min-w-200px">25 Jul 2023, 2:40 pm</td>
                                    {/*end::Timestamp=*/}
                                  </tr>
                                  {/*end::Table row*/}
                                  {/*begin::Table row*/}
                                  <tr>
                                    {/*begin::Badge=*/}
                                    <td className="min-w-70px">
                                      <div className="badge badge-light-success">200 OK</div>
                                    </td>
                                    {/*end::Badge=*/}
                                    {/*begin::Status=*/}
                                    <td>POST /v1/invoices/in_5355_9581/payment</td>
                                    {/*end::Status=*/}
                                    {/*begin::Timestamp=*/}
                                    <td className="pe-0 text-end min-w-200px">25 Oct 2023, 2:40 pm</td>
                                    {/*end::Timestamp=*/}
                                  </tr>
                                  {/*end::Table row*/}
                                  {/*begin::Table row*/}
                                  <tr>
                                    {/*begin::Badge=*/}
                                    <td className="min-w-70px">
                                      <div className="badge badge-light-success">200 OK</div>
                                    </td>
                                    {/*end::Badge=*/}
                                    {/*begin::Status=*/}
                                    <td>POST /v1/invoices/in_4189_9753/payment</td>
                                    {/*end::Status=*/}
                                    {/*begin::Timestamp=*/}
                                    <td className="pe-0 text-end min-w-200px">10 Nov 2023, 6:43 am</td>
                                    {/*end::Timestamp=*/}
                                  </tr>
                                  {/*end::Table row*/}
                                  {/*begin::Table row*/}
                                  <tr>
                                    {/*begin::Badge=*/}
                                    <td className="min-w-70px">
                                      <div className="badge badge-light-warning">404 WRN</div>
                                    </td>
                                    {/*end::Badge=*/}
                                    {/*begin::Status=*/}
                                    <td>POST /v1/customer/c_63d0d9f497de9/not_found</td>
                                    {/*end::Status=*/}
                                    {/*begin::Timestamp=*/}
                                    <td className="pe-0 text-end min-w-200px">10 Mar 2023, 10:30 am</td>
                                    {/*end::Timestamp=*/}
                                  </tr>
                                  {/*end::Table row*/}
                                  {/*begin::Table row*/}
                                  <tr>
                                    {/*begin::Badge=*/}
                                    <td className="min-w-70px">
                                      <div className="badge badge-light-warning">404 WRN</div>
                                    </td>
                                    {/*end::Badge=*/}
                                    {/*begin::Status=*/}
                                    <td>POST /v1/customer/c_63d0d9f497def/not_found</td>
                                    {/*end::Status=*/}
                                    {/*begin::Timestamp=*/}
                                    <td className="pe-0 text-end min-w-200px">15 Apr 2023, 2:40 pm</td>
                                    {/*end::Timestamp=*/}
                                  </tr>
                                  {/*end::Table row*/}
                                  {/*begin::Table row*/}
                                  <tr>
                                    {/*begin::Badge=*/}
                                    <td className="min-w-70px">
                                      <div className="badge badge-light-danger">500 ERR</div>
                                    </td>
                                    {/*end::Badge=*/}
                                    {/*begin::Status=*/}
                                    <td>POST /v1/invoice/in_1760_9624/invalid</td>
                                    {/*end::Status=*/}
                                    {/*begin::Timestamp=*/}
                                    <td className="pe-0 text-end min-w-200px">24 Jun 2023, 5:30 pm</td>
                                    {/*end::Timestamp=*/}
                                  </tr>
                                  {/*end::Table row*/}
                                  {/*begin::Table row*/}
                                  <tr>
                                    {/*begin::Badge=*/}
                                    <td className="min-w-70px">
                                      <div className="badge badge-light-warning">404 WRN</div>
                                    </td>
                                    {/*end::Badge=*/}
                                    {/*begin::Status=*/}
                                    <td>POST /v1/customer/c_63d0d9f497def/not_found</td>
                                    {/*end::Status=*/}
                                    {/*begin::Timestamp=*/}
                                    <td className="pe-0 text-end min-w-200px">25 Jul 2023, 6:05 pm</td>
                                    {/*end::Timestamp=*/}
                                  </tr>
                                  {/*end::Table row*/}
                                  {/*begin::Table row*/}
                                  <tr>
                                    {/*begin::Badge=*/}
                                    <td className="min-w-70px">
                                      <div className="badge badge-light-success">200 OK</div>
                                    </td>
                                    {/*end::Badge=*/}
                                    {/*begin::Status=*/}
                                    <td>POST /v1/invoices/in_7693_5201/payment</td>
                                    {/*end::Status=*/}
                                    {/*begin::Timestamp=*/}
                                    <td className="pe-0 text-end min-w-200px">24 Jun 2023, 11:05 am</td>
                                    {/*end::Timestamp=*/}
                                  </tr>
                                  {/*end::Table row*/}
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table wrapper*/}
                          </div>
                          {/*end::Card body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card pt-4 mb-6 mb-xl-9">
                          {/*begin::Card header*/}
                          <div className="card-header border-0">
                            {/*begin::Card title*/}
                            <div className="card-title">
                              <h2>Events</h2>
                            </div>
                            {/*end::Card title*/}
                            {/*begin::Card toolbar*/}
                            <div className="card-toolbar">
                              {/*begin::Button*/}
                              <button type="button" className="btn btn-sm btn-light-primary">
                                {/*begin::Svg Icon | path: icons/duotune/files/fil021.svg*/}
                                <span className="svg-icon svg-icon-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M19 15C20.7 15 22 13.7 22 12C22 10.3 20.7 9 19 9C18.9 9 18.9 9 18.8 9C18.9 8.7 19 8.3 19 8C19 6.3 17.7 5 16 5C15.4 5 14.8 5.2 14.3 5.5C13.4 4 11.8 3 10 3C7.2 3 5 5.2 5 8C5 8.3 5 8.7 5.1 9H5C3.3 9 2 10.3 2 12C2 13.7 3.3 15 5 15H19Z" fill="currentColor" />
                                    <path d="M13 17.4V12C13 11.4 12.6 11 12 11C11.4 11 11 11.4 11 12V17.4H13Z" fill="currentColor" />
                                    <path opacity="0.3" d="M8 17.4H16L12.7 20.7C12.3 21.1 11.7 21.1 11.3 20.7L8 17.4Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}Download Report</button>
                              {/*end::Button*/}
                            </div>
                            {/*end::Card toolbar*/}
                          </div>
                          {/*end::Card header*/}
                          {/*begin::Card body*/}
                          <div className="card-body py-0">
                            {/*begin::Table*/}
                            <table className="table align-middle table-row-dashed fs-6 text-gray-600 fw-semibold gy-5" id="kt_table_customers_events">
                              {/*begin::Table body*/}
                              <tbody>
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Event=*/}
                                  <td className="min-w-400px">Invoice
                                    <a href="#" className="fw-bold text-gray-900 text-hover-primary me-1">#WER-45670</a>is
                                    <span className="badge badge-light-info">In Progress</span></td>
                                  {/*end::Event=*/}
                                  {/*begin::Timestamp=*/}
                                  <td className="pe-0 text-gray-600 text-end min-w-200px">19 Aug 2023, 11:05 am</td>
                                  {/*end::Timestamp=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Event=*/}
                                  <td className="min-w-400px">Invoice
                                    <a href="#" className="fw-bold text-gray-900 text-hover-primary me-1">#WER-45670</a>is
                                    <span className="badge badge-light-info">In Progress</span></td>
                                  {/*end::Event=*/}
                                  {/*begin::Timestamp=*/}
                                  <td className="pe-0 text-gray-600 text-end min-w-200px">20 Dec 2023, 2:40 pm</td>
                                  {/*end::Timestamp=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Event=*/}
                                  <td className="min-w-400px">
                                    <a href="#" className="text-gray-600 text-hover-primary me-1">Max Smith</a>has made payment to
                                    <a href="#" className="fw-bold text-gray-900 text-hover-primary">#SDK-45670</a></td>
                                  {/*end::Event=*/}
                                  {/*begin::Timestamp=*/}
                                  <td className="pe-0 text-gray-600 text-end min-w-200px">22 Sep 2023, 11:05 am</td>
                                  {/*end::Timestamp=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Event=*/}
                                  <td className="min-w-400px">
                                    <a href="#" className="text-gray-600 text-hover-primary me-1">Melody Macy</a>has made payment to
                                    <a href="#" className="fw-bold text-gray-900 text-hover-primary">#XRS-45670</a></td>
                                  {/*end::Event=*/}
                                  {/*begin::Timestamp=*/}
                                  <td className="pe-0 text-gray-600 text-end min-w-200px">22 Sep 2023, 5:30 pm</td>
                                  {/*end::Timestamp=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Event=*/}
                                  <td className="min-w-400px">Invoice
                                    <a href="#" className="fw-bold text-gray-900 text-hover-primary me-1">#KIO-45656</a>status has changed from
                                    <span className="badge badge-light-succees me-1">In Transit</span>to
                                    <span className="badge badge-light-success">Approved</span></td>
                                  {/*end::Event=*/}
                                  {/*begin::Timestamp=*/}
                                  <td className="pe-0 text-gray-600 text-end min-w-200px">10 Nov 2023, 10:30 am</td>
                                  {/*end::Timestamp=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Event=*/}
                                  <td className="min-w-400px">Invoice
                                    <a href="#" className="fw-bold text-gray-900 text-hover-primary me-1">#DER-45645</a>status has changed from
                                    <span className="badge badge-light-info me-1">In Progress</span>to
                                    <span className="badge badge-light-primary">In Transit</span></td>
                                  {/*end::Event=*/}
                                  {/*begin::Timestamp=*/}
                                  <td className="pe-0 text-gray-600 text-end min-w-200px">21 Feb 2023, 11:05 am</td>
                                  {/*end::Timestamp=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Event=*/}
                                  <td className="min-w-400px">
                                    <a href="#" className="text-gray-600 text-hover-primary me-1">Max Smith</a>has made payment to
                                    <a href="#" className="fw-bold text-gray-900 text-hover-primary">#SDK-45670</a></td>
                                  {/*end::Event=*/}
                                  {/*begin::Timestamp=*/}
                                  <td className="pe-0 text-gray-600 text-end min-w-200px">10 Mar 2023, 6:05 pm</td>
                                  {/*end::Timestamp=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Event=*/}
                                  <td className="min-w-400px">
                                    <a href="#" className="text-gray-600 text-hover-primary me-1">Emma Smith</a>has made payment to
                                    <a href="#" className="fw-bold text-gray-900 text-hover-primary">#XRS-45670</a></td>
                                  {/*end::Event=*/}
                                  {/*begin::Timestamp=*/}
                                  <td className="pe-0 text-gray-600 text-end min-w-200px">25 Oct 2023, 2:40 pm</td>
                                  {/*end::Timestamp=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Event=*/}
                                  <td className="min-w-400px">Invoice
                                    <a href="#" className="fw-bold text-gray-900 text-hover-primary me-1">#LOP-45640</a>has been
                                    <span className="badge badge-light-danger">Declined</span></td>
                                  {/*end::Event=*/}
                                  {/*begin::Timestamp=*/}
                                  <td className="pe-0 text-gray-600 text-end min-w-200px">20 Dec 2023, 11:05 am</td>
                                  {/*end::Timestamp=*/}
                                </tr>
                                {/*end::Table row*/}
                                {/*begin::Table row*/}
                                <tr>
                                  {/*begin::Event=*/}
                                  <td className="min-w-400px">Invoice
                                    <a href="#" className="fw-bold text-gray-900 text-hover-primary me-1">#WER-45670</a>is
                                    <span className="badge badge-light-info">In Progress</span></td>
                                  {/*end::Event=*/}
                                  {/*begin::Timestamp=*/}
                                  <td className="pe-0 text-gray-600 text-end min-w-200px">22 Sep 2023, 10:10 pm</td>
                                  {/*end::Timestamp=*/}
                                </tr>
                                {/*end::Table row*/}
                              </tbody>
                              {/*end::Table body*/}
                            </table>
                            {/*end::Table*/}
                          </div>
                          {/*end::Card body*/}
                        </div>
                        {/*end::Card*/}
                      </div>
                      {/*end:::Tab pane*/}
                      {/*begin:::Tab pane*/}
                      <div className="tab-pane fade" id="kt_customer_view_overview_statements" role="tabpanel">
                        {/*begin::Earnings*/}
                        <div className="card mb-6 mb-xl-9">
                          {/*begin::Header*/}
                          <div className="card-header border-0">
                            <div className="card-title">
                              <h2>Earnings</h2>
                            </div>
                          </div>
                          {/*end::Header*/}
                          {/*begin::Body*/}
                          <div className="card-body py-0">
                            <div className="fs-5 fw-semibold text-gray-500 mb-4">Last 30 day earnings calculated. Apart from arranging the order of topics.</div>
                            {/*begin::Left Section*/}
                            <div className="d-flex flex-wrap flex-stack mb-5">
                              {/*begin::Row*/}
                              <div className="d-flex flex-wrap">
                                {/*begin::Col*/}
                                <div className="border border-dashed border-gray-300 w-150px rounded my-3 p-4 me-6">
                                  <span className="fs-1 fw-bold text-gray-800 lh-1">
                                    <span data-kt-countup="true" data-kt-countup-value="6,840" data-kt-countup-prefix="$">0</span>
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                    <span className="svg-icon svg-icon-1 svg-icon-success">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </span>
                                  <span className="fs-6 fw-semibold text-muted d-block lh-1 pt-2">Net Earnings</span>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="border border-dashed border-gray-300 w-125px rounded my-3 p-4 me-6">
                                  <span className="fs-1 fw-bold text-gray-800 lh-1">
                                    <span className data-kt-countup="true" data-kt-countup-value={16}>0</span>%
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                    <span className="svg-icon svg-icon-1 svg-icon-danger">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x={11} y={18} width={13} height={2} rx={1} transform="rotate(-90 11 18)" fill="currentColor" />
                                        <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}</span>
                                  <span className="fs-6 fw-semibold text-muted d-block lh-1 pt-2">Change</span>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="border border-dashed border-gray-300 w-150px rounded my-3 p-4 me-6">
                                  <span className="fs-1 fw-bold text-gray-800 lh-1">
                                    <span data-kt-countup="true" data-kt-countup-value="1,240" data-kt-countup-prefix="$">0</span>
                                    <span className="text-primary">--</span>
                                  </span>
                                  <span className="fs-6 fw-semibold text-muted d-block lh-1 pt-2">Fees</span>
                                </div>
                                {/*end::Col*/}
                              </div>
                              {/*end::Row*/}
                              <a href="#" className="btn btn-sm btn-light-primary flex-shrink-0">Withdraw Earnings</a>
                            </div>
                            {/*end::Left Section*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Earnings*/}
                        {/*begin::Statements*/}
                        <div className="card mb-6 mb-xl-9">
                          {/*begin::Header*/}
                          <div className="card-header">
                            {/*begin::Title*/}
                            <div className="card-title">
                              <h2>Statement</h2>
                            </div>
                            {/*end::Title*/}
                            {/*begin::Toolbar*/}
                            <div className="card-toolbar">
                              {/*begin::Tab nav*/}
                              <ul className="nav nav-stretch fs-5 fw-semibold nav-line-tabs nav-line-tabs-2x border-transparent" role="tablist">
                                <li className="nav-item" role="presentation">
                                  <a className="nav-link text-active-primary active" data-bs-toggle="tab" role="tab" href="#kt_customer_view_statement_1">This Year</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <a className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab" href="#kt_customer_view_statement_2">2020</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <a className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab" href="#kt_customer_view_statement_3">2019</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <a className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab" href="#kt_customer_view_statement_4">2018</a>
                                </li>
                              </ul>
                              {/*end::Tab nav*/}
                            </div>
                            {/*end::Toolbar*/}
                          </div>
                          {/*end::Header*/}
                          {/*begin::Card body*/}
                          <div className="card-body pb-5">
                            {/*begin::Tab Content*/}
                            <div id="kt_customer_view_statement_tab_content" className="tab-content">
                              {/*begin::Tab panel*/}
                              <div id="kt_customer_view_statement_1" className="py-0 tab-pane fade show active" role="tabpanel">
                                {/*begin::Table*/}
                                <table id="kt_customer_view_statement_table_1" className="table align-middle table-row-dashed fs-6 text-gray-600 fw-semibold gy-4">
                                  {/*begin::Table head*/}
                                  <thead className="border-bottom border-gray-200">
                                    {/*begin::Table row*/}
                                    <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                                      <th className="w-125px">Date</th>
                                      <th className="w-100px">Order ID</th>
                                      <th className="w-300px">Details</th>
                                      <th className="w-100px">Amount</th>
                                      <th className="w-100px text-end pe-7">Invoice</th>
                                    </tr>
                                    {/*end::Table row*/}
                                  </thead>
                                  {/*end::Table head*/}
                                  {/*begin::Table body*/}
                                  <tbody>
                                    <tr>
                                      <td>Nov 01, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                      </td>
                                      <td>Darknight transparency 36 Icons Pack</td>
                                      <td className="text-success">$38.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 24, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-2.60</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 08, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td>Cartoon Mobile Emoji Phone Pack</td>
                                      <td className="text-success">$76.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Sep 15, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td>Iphone 12 Pro Mockup Mega Bundle</td>
                                      <td className="text-success">$5.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>May 30, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">523445943</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-1.30</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Apr 22, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">231445943</a>
                                      </td>
                                      <td>Parcel Shipping / Delivery Service App</td>
                                      <td className="text-success">$204.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Feb 09, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">426445943</a>
                                      </td>
                                      <td>Visual Design Illustration</td>
                                      <td className="text-success">$31.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Nov 01, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">984445943</a>
                                      </td>
                                      <td>Abstract Vusial Pack</td>
                                      <td className="text-success">$52.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Jan 04, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">324442313</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-0.80</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Nov 01, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                      </td>
                                      <td>Darknight transparency 36 Icons Pack</td>
                                      <td className="text-success">$38.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 24, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-2.60</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 08, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td>Cartoon Mobile Emoji Phone Pack</td>
                                      <td className="text-success">$76.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Sep 15, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td>Iphone 12 Pro Mockup Mega Bundle</td>
                                      <td className="text-success">$5.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>May 30, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">523445943</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-1.30</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Apr 22, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">231445943</a>
                                      </td>
                                      <td>Parcel Shipping / Delivery Service App</td>
                                      <td className="text-success">$204.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Feb 09, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">426445943</a>
                                      </td>
                                      <td>Visual Design Illustration</td>
                                      <td className="text-success">$31.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Nov 01, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">984445943</a>
                                      </td>
                                      <td>Abstract Vusial Pack</td>
                                      <td className="text-success">$52.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Jan 04, 2021</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">324442313</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-0.80</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                  </tbody>
                                  {/*end::Table body*/}
                                </table>
                                {/*end::Table*/}
                              </div>
                              {/*end::Tab panel*/}
                              {/*begin::Tab panel*/}
                              <div id="kt_customer_view_statement_2" className="py-0 tab-pane fade" role="tabpanel">
                                {/*begin::Table*/}
                                <table id="kt_customer_view_statement_table_2" className="table align-middle table-row-dashed fs-6 text-gray-600 fw-semibold gy-4">
                                  {/*begin::Table head*/}
                                  <thead className="border-bottom border-gray-200">
                                    {/*begin::Table row*/}
                                    <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                                      <th className="w-125px">Date</th>
                                      <th className="w-100px">Order ID</th>
                                      <th className="w-300px">Details</th>
                                      <th className="w-100px">Amount</th>
                                      <th className="w-100px text-end pe-7">Invoice</th>
                                    </tr>
                                    {/*end::Table row*/}
                                  </thead>
                                  {/*end::Table head*/}
                                  {/*begin::Table body*/}
                                  <tbody>
                                    <tr>
                                      <td>May 30, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">523445943</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-1.30</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Apr 22, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">231445943</a>
                                      </td>
                                      <td>Parcel Shipping / Delivery Service App</td>
                                      <td className="text-success">$204.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Feb 09, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">426445943</a>
                                      </td>
                                      <td>Visual Design Illustration</td>
                                      <td className="text-success">$31.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Nov 01, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">984445943</a>
                                      </td>
                                      <td>Abstract Vusial Pack</td>
                                      <td className="text-success">$52.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Jan 04, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">324442313</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-0.80</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Nov 01, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                      </td>
                                      <td>Darknight transparency 36 Icons Pack</td>
                                      <td className="text-success">$38.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 24, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-2.60</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 08, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td>Cartoon Mobile Emoji Phone Pack</td>
                                      <td className="text-success">$76.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Sep 15, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td>Iphone 12 Pro Mockup Mega Bundle</td>
                                      <td className="text-success">$5.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>May 30, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">523445943</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-1.30</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Apr 22, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">231445943</a>
                                      </td>
                                      <td>Parcel Shipping / Delivery Service App</td>
                                      <td className="text-success">$204.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Feb 09, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">426445943</a>
                                      </td>
                                      <td>Visual Design Illustration</td>
                                      <td className="text-success">$31.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Nov 01, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">984445943</a>
                                      </td>
                                      <td>Abstract Vusial Pack</td>
                                      <td className="text-success">$52.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Jan 04, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">324442313</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-0.80</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Nov 01, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                      </td>
                                      <td>Darknight transparency 36 Icons Pack</td>
                                      <td className="text-success">$38.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 24, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-2.60</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 08, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td>Cartoon Mobile Emoji Phone Pack</td>
                                      <td className="text-success">$76.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Sep 15, 2020</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td>Iphone 12 Pro Mockup Mega Bundle</td>
                                      <td className="text-success">$5.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                  </tbody>
                                  {/*end::Table body*/}
                                </table>
                                {/*end::Table*/}
                              </div>
                              {/*end::Tab panel*/}
                              {/*begin::Tab panel*/}
                              <div id="kt_customer_view_statement_3" className="py-0 tab-pane fade" role="tabpanel">
                                {/*begin::Table*/}
                                <table id="kt_customer_view_statement_table_3" className="table align-middle table-row-dashed fs-6 text-gray-600 fw-semibold gy-4">
                                  {/*begin::Table head*/}
                                  <thead className="border-bottom border-gray-200">
                                    {/*begin::Table row*/}
                                    <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                                      <th className="w-125px">Date</th>
                                      <th className="w-100px">Order ID</th>
                                      <th className="w-300px">Details</th>
                                      <th className="w-100px">Amount</th>
                                      <th className="w-100px text-end pe-7">Invoice</th>
                                    </tr>
                                    {/*end::Table row*/}
                                  </thead>
                                  {/*end::Table head*/}
                                  {/*begin::Table body*/}
                                  <tbody>
                                    <tr>
                                      <td>Feb 09, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">426445943</a>
                                      </td>
                                      <td>Visual Design Illustration</td>
                                      <td className="text-success">$31.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Nov 01, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">984445943</a>
                                      </td>
                                      <td>Abstract Vusial Pack</td>
                                      <td className="text-success">$52.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Jan 04, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">324442313</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-0.80</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Sep 15, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td>Iphone 12 Pro Mockup Mega Bundle</td>
                                      <td className="text-success">$5.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Nov 01, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                      </td>
                                      <td>Darknight transparency 36 Icons Pack</td>
                                      <td className="text-success">$38.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 24, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-2.60</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 08, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td>Cartoon Mobile Emoji Phone Pack</td>
                                      <td className="text-success">$76.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>May 30, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">523445943</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-1.30</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Apr 22, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">231445943</a>
                                      </td>
                                      <td>Parcel Shipping / Delivery Service App</td>
                                      <td className="text-success">$204.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Feb 09, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">426445943</a>
                                      </td>
                                      <td>Visual Design Illustration</td>
                                      <td className="text-success">$31.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Nov 01, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">984445943</a>
                                      </td>
                                      <td>Abstract Vusial Pack</td>
                                      <td className="text-success">$52.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Jan 04, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">324442313</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-0.80</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Sep 15, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td>Iphone 12 Pro Mockup Mega Bundle</td>
                                      <td className="text-success">$5.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Nov 01, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                      </td>
                                      <td>Darknight transparency 36 Icons Pack</td>
                                      <td className="text-success">$38.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 24, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-2.60</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 08, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td>Cartoon Mobile Emoji Phone Pack</td>
                                      <td className="text-success">$76.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>May 30, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">523445943</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-1.30</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Apr 22, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">231445943</a>
                                      </td>
                                      <td>Parcel Shipping / Delivery Service App</td>
                                      <td className="text-success">$204.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                  </tbody>
                                  {/*end::Table body*/}
                                </table>
                                {/*end::Table*/}
                              </div>
                              {/*end::Tab panel*/}
                              {/*begin::Tab panel*/}
                              <div id="kt_customer_view_statement_4" className="py-0 tab-pane fade" role="tabpanel">
                                {/*begin::Table*/}
                                <table id="kt_customer_view_statement_table_4" className="table align-middle table-row-dashed fs-6 text-gray-600 fw-semibold gy-4">
                                  {/*begin::Table head*/}
                                  <thead className="border-bottom border-gray-200">
                                    {/*begin::Table row*/}
                                    <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                                      <th className="w-125px">Date</th>
                                      <th className="w-100px">Order ID</th>
                                      <th className="w-300px">Details</th>
                                      <th className="w-100px">Amount</th>
                                      <th className="w-100px text-end pe-7">Invoice</th>
                                    </tr>
                                    {/*end::Table row*/}
                                  </thead>
                                  {/*end::Table head*/}
                                  {/*begin::Table body*/}
                                  <tbody>
                                    <tr>
                                      <td>Nov 01, 2018</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                      </td>
                                      <td>Darknight transparency 36 Icons Pack</td>
                                      <td className="text-success">$38.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 24, 2018</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-2.60</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Nov 01, 2018</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                      </td>
                                      <td>Darknight transparency 36 Icons Pack</td>
                                      <td className="text-success">$38.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 24, 2018</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-2.60</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Feb 09, 2018</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">426445943</a>
                                      </td>
                                      <td>Visual Design Illustration</td>
                                      <td className="text-success">$31.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Nov 01, 2018</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">984445943</a>
                                      </td>
                                      <td>Abstract Vusial Pack</td>
                                      <td className="text-success">$52.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Jan 04, 2018</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">324442313</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-0.80</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 08, 2018</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td>Cartoon Mobile Emoji Phone Pack</td>
                                      <td className="text-success">$76.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 08, 2018</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td>Cartoon Mobile Emoji Phone Pack</td>
                                      <td className="text-success">$76.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Feb 09, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">426445943</a>
                                      </td>
                                      <td>Visual Design Illustration</td>
                                      <td className="text-success">$31.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Nov 01, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">984445943</a>
                                      </td>
                                      <td>Abstract Vusial Pack</td>
                                      <td className="text-success">$52.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Jan 04, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">324442313</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-0.80</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Sep 15, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td>Iphone 12 Pro Mockup Mega Bundle</td>
                                      <td className="text-success">$5.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Nov 01, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                      </td>
                                      <td>Darknight transparency 36 Icons Pack</td>
                                      <td className="text-success">$38.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 24, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-2.60</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Oct 08, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                      </td>
                                      <td>Cartoon Mobile Emoji Phone Pack</td>
                                      <td className="text-success">$76.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>May 30, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">523445943</a>
                                      </td>
                                      <td>Seller Fee</td>
                                      <td className="text-danger">$-1.30</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Apr 22, 2019</td>
                                      <td>
                                        <a href="#" className="text-gray-600 text-hover-primary">231445943</a>
                                      </td>
                                      <td>Parcel Shipping / Delivery Service App</td>
                                      <td className="text-success">$204.00</td>
                                      <td className="text-end">
                                        <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                      </td>
                                    </tr>
                                  </tbody>
                                  {/*end::Table body*/}
                                </table>
                                {/*end::Table*/}
                              </div>
                              {/*end::Tab panel*/}
                            </div>
                            {/*end::Tab Content*/}
                          </div>
                          {/*end::Card body*/}
                        </div>
                        {/*end::Statements*/}
                      </div>
                      {/*end:::Tab pane*/}
                    </div>
                    {/*end:::Tab content*/}
                  </div>
                  {/*end::Content*/}
                </div>
                {/*end::Layout*/}
                {/*begin::Modals*/}
                {/*begin::Modal - Add Payment*/}
                <div className="modal fade" id="kt_modal_add_payment" tabIndex={-1} aria-hidden="true">
                  {/*begin::Modal dialog*/}
                  <div className="modal-dialog mw-650px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                      {/*begin::Modal header*/}
                      <div className="modal-header">
                        {/*begin::Modal title*/}
                        <h2 className="fw-bold">Add a Payment Record</h2>
                        {/*end::Modal title*/}
                        {/*begin::Close*/}
                        <div id="kt_modal_add_payment_close" className="btn btn-icon btn-sm btn-active-icon-primary">
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
                      {/*end::Modal header*/}
                      {/*begin::Modal body*/}
                      <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                        {/*begin::Form*/}
                        <form id="kt_modal_add_payment_form" className="form" action="#">
                          {/*begin::Input group*/}
                          <div className="fv-row mb-7">
                            {/*begin::Label*/}
                            <label className="fs-6 fw-semibold form-label mb-2">
                              <span className="required">Invoice Number</span>
                              <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="The invoice number must be unique." />
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <input type="text" className="form-control form-control-solid" name="invoice" defaultValue />
                            {/*end::Input*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="fv-row mb-7">
                            {/*begin::Label*/}
                            <label className="required fs-6 fw-semibold form-label mb-2">Status</label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <select className="form-select form-select-solid fw-bold" name="status" data-control="select2" data-placeholder="Select an option" data-hide-search="true">
                              <option />
                              <option value={0}>Approved</option>
                              <option value={1}>Pending</option>
                              <option value={2}>Rejected</option>
                              <option value={3}>In progress</option>
                              <option value={4}>Completed</option>
                            </select>
                            {/*end::Input*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="fv-row mb-7">
                            {/*begin::Label*/}
                            <label className="required fs-6 fw-semibold form-label mb-2">Invoice Amount</label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <input type="text" className="form-control form-control-solid" name="amount" defaultValue />
                            {/*end::Input*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="fv-row mb-15">
                            {/*begin::Label*/}
                            <label className="fs-6 fw-semibold form-label mb-2">
                              <span className="required">Additional Information</span>
                              <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Information such as description of invoice or product purchased." />
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <textarea className="form-control form-control-solid rounded-3" name="additional_info" defaultValue={""} />
                            {/*end::Input*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Actions*/}
                          <div className="text-center">
                            <button type="reset" id="kt_modal_add_payment_cancel" className="btn btn-light me-3">Discard</button>
                            <button type="submit" id="kt_modal_add_payment_submit" className="btn btn-primary">
                              <span className="indicator-label">Submit</span>
                              <span className="indicator-progress">Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                            </button>
                          </div>
                          {/*end::Actions*/}
                        </form>
                        {/*end::Form*/}
                      </div>
                      {/*end::Modal body*/}
                    </div>
                    {/*end::Modal content*/}
                  </div>
                  {/*end::Modal dialog*/}
                </div>
                {/*end::Modal - New Card*/}
                {/*begin::Modal - Adjust Balance*/}
                <div className="modal fade" id="kt_modal_adjust_balance" tabIndex={-1} aria-hidden="true">
                  {/*begin::Modal dialog*/}
                  <div className="modal-dialog modal-dialog-centered mw-650px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                      {/*begin::Modal header*/}
                      <div className="modal-header">
                        {/*begin::Modal title*/}
                        <h2 className="fw-bold">Adjust Balance</h2>
                        {/*end::Modal title*/}
                        {/*begin::Close*/}
                        <div id="kt_modal_adjust_balance_close" className="btn btn-icon btn-sm btn-active-icon-primary">
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
                      {/*end::Modal header*/}
                      {/*begin::Modal body*/}
                      <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                        {/*begin::Balance preview*/}
                        <div className="d-flex text-center mb-9">
                          <div className="w-50 border border-dashed border-gray-300 rounded mx-2 p-4">
                            <div className="fs-6 fw-semibold mb-2 text-muted">Current Balance</div>
                            <div className="fs-2 fw-bold" kt-modal-adjust-balance="current_balance">US$ 32,487.57</div>
                          </div>
                          <div className="w-50 border border-dashed border-gray-300 rounded mx-2 p-4">
                            <div className="fs-6 fw-semibold mb-2 text-muted">New Balance
                              <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Enter an amount to preview the new balance." /></div>
                            <div className="fs-2 fw-bold" kt-modal-adjust-balance="new_balance">--</div>
                          </div>
                        </div>
                        {/*end::Balance preview*/}
                        {/*begin::Form*/}
                        <form id="kt_modal_adjust_balance_form" className="form" action="#">
                          {/*begin::Input group*/}
                          <div className="fv-row mb-7">
                            {/*begin::Label*/}
                            <label className="required fs-6 fw-semibold form-label mb-2">Adjustment type</label>
                            {/*end::Label*/}
                            {/*begin::Dropdown*/}
                            <select className="form-select form-select-solid fw-bold" name="adjustment" aria-label="Select an option" data-control="select2" data-dropdown-parent="#kt_modal_adjust_balance" data-placeholder="Select an option" data-hide-search="true">
                              <option />
                              <option value={1}>Credit</option>
                              <option value={2}>Debit</option>
                            </select>
                            {/*end::Dropdown*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="fv-row mb-7">
                            {/*begin::Label*/}
                            <label className="required fs-6 fw-semibold form-label mb-2">Amount</label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <input id="kt_modal_inputmask" type="text" className="form-control form-control-solid" name="amount" defaultValue />
                            {/*end::Input*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="fv-row mb-7">
                            {/*begin::Label*/}
                            <label className="fs-6 fw-semibold form-label mb-2">Add adjustment note</label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <textarea className="form-control form-control-solid rounded-3 mb-5" defaultValue={""} />
                            {/*end::Input*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Disclaimer*/}
                          <div className="fs-7 text-muted mb-15">Please be aware that all manual balance changes will be audited by the financial team every fortnight. Please maintain your invoices and receipts until then. Thank you.</div>
                          {/*end::Disclaimer*/}
                          {/*begin::Actions*/}
                          <div className="text-center">
                            <button type="reset" id="kt_modal_adjust_balance_cancel" className="btn btn-light me-3">Discard</button>
                            <button type="submit" id="kt_modal_adjust_balance_submit" className="btn btn-primary">
                              <span className="indicator-label">Submit</span>
                              <span className="indicator-progress">Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                            </button>
                          </div>
                          {/*end::Actions*/}
                        </form>
                        {/*end::Form*/}
                      </div>
                      {/*end::Modal body*/}
                    </div>
                    {/*end::Modal content*/}
                  </div>
                  {/*end::Modal dialog*/}
                </div>
                {/*end::Modal - New Card*/}
                {/*begin::Modal - New Address*/}
                <div className="modal fade" id="kt_modal_update_customer" tabIndex={-1} aria-hidden="true">
                  {/*begin::Modal dialog*/}
                  <div className="modal-dialog modal-dialog-centered mw-650px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                      {/*begin::Form*/}
                      <form className="form" action="#" id="kt_modal_update_customer_form">
                        {/*begin::Modal header*/}
                        <div className="modal-header" id="kt_modal_update_customer_header">
                          {/*begin::Modal title*/}
                          <h2 className="fw-bold">Update Customer</h2>
                          {/*end::Modal title*/}
                          {/*begin::Close*/}
                          <div id="kt_modal_update_customer_close" className="btn btn-icon btn-sm btn-active-icon-primary">
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
                        {/*end::Modal header*/}
                        {/*begin::Modal body*/}
                        <div className="modal-body py-10 px-lg-17">
                          {/*begin::Scroll*/}
                          <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_update_customer_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_update_customer_header" data-kt-scroll-wrappers="#kt_modal_update_customer_scroll" data-kt-scroll-offset="300px">
                            {/*begin::Notice*/}
                            {/*begin::Notice*/}
                            <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
                              {/*begin::Icon*/}
                              {/*begin::Svg Icon | path: icons/duotune/general/gen044.svg*/}
                              <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                                  <rect x={11} y={14} width={7} height={2} rx={1} transform="rotate(-90 11 14)" fill="currentColor" />
                                  <rect x={11} y={17} width={2} height={2} rx={1} transform="rotate(-90 11 17)" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                              {/*end::Icon*/}
                              {/*begin::Wrapper*/}
                              <div className="d-flex flex-stack flex-grow-1">
                                {/*begin::Content*/}
                                <div className="fw-semibold">
                                  <div className="fs-6 text-gray-700">Updating customer details will receive a privacy audit. For more info, please read our
                                    <a href="#">Privacy Policy</a></div>
                                </div>
                                {/*end::Content*/}
                              </div>
                              {/*end::Wrapper*/}
                            </div>
                            {/*end::Notice*/}
                            {/*end::Notice*/}
                            {/*begin::User toggle*/}
                            <div className="fw-bold fs-3 rotate collapsible mb-7" data-bs-toggle="collapse" href="#kt_modal_update_customer_user_info" role="button" aria-expanded="false" aria-controls="kt_modal_update_customer_user_info">User Information
                              <span className="ms-2 rotate-180">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                <span className="svg-icon svg-icon-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span></div>
                            {/*end::User toggle*/}
                            {/*begin::User form*/}
                            <div id="kt_modal_update_customer_user_info" className="collapse show">
                              {/*begin::Input group*/}
                              <div className="mb-7">
                                {/*begin::Label*/}
                                <label className="fs-6 fw-semibold mb-2">
                                  <span>Update Avatar</span>
                                  <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Allowed file types: png, jpg, jpeg." />
                                </label>
                                {/*end::Label*/}
                                {/*begin::Image input wrapper*/}
                                <div className="mt-1">
                                  {/*begin::Image input*/}
                                  <div className="image-input image-input-outline" data-kt-image-input="true" style={{backgroundImage: 'url("assets/media/svg/avatars/blank.svg")'}}>
                                    {/*begin::Preview existing avatar*/}
                                    <div className="image-input-wrapper w-125px h-125px" style={{backgroundImage: 'url(assets/media/avatars/300-1.jpg)'}} />
                                    {/*end::Preview existing avatar*/}
                                    {/*begin::Edit*/}
                                    <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                      <i className="bi bi-pencil-fill fs-7" />
                                      {/*begin::Inputs*/}
                                      <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                      <input type="hidden" name="avatar_remove" />
                                      {/*end::Inputs*/}
                                    </label>
                                    {/*end::Edit*/}
                                    {/*begin::Cancel*/}
                                    <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                      <i className="bi bi-x fs-2" />
                                    </span>
                                    {/*end::Cancel*/}
                                    {/*begin::Remove*/}
                                    <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                      <i className="bi bi-x fs-2" />
                                    </span>
                                    {/*end::Remove*/}
                                  </div>
                                  {/*end::Image input*/}
                                </div>
                                {/*end::Image input wrapper*/}
                              </div>
                              {/*end::Input group*/}
                              {/*begin::Input group*/}
                              <div className="fv-row mb-7">
                                {/*begin::Label*/}
                                <label className="fs-6 fw-semibold mb-2">Name</label>
                                {/*end::Label*/}
                                {/*begin::Input*/}
                                <input type="text" className="form-control form-control-solid" placeholder name="name" defaultValue="Sean Bean" />
                                {/*end::Input*/}
                              </div>
                              {/*end::Input group*/}
                              {/*begin::Input group*/}
                              <div className="fv-row mb-7">
                                {/*begin::Label*/}
                                <label className="fs-6 fw-semibold mb-2">
                                  <span>Email</span>
                                  <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Email address must be active" />
                                </label>
                                {/*end::Label*/}
                                {/*begin::Input*/}
                                <input type="email" className="form-control form-control-solid" placeholder name="email" defaultValue="sean@dellito.com" />
                                {/*end::Input*/}
                              </div>
                              {/*end::Input group*/}
                              {/*begin::Input group*/}
                              <div className="fv-row mb-15">
                                {/*begin::Label*/}
                                <label className="fs-6 fw-semibold mb-2">Description</label>
                                {/*end::Label*/}
                                {/*begin::Input*/}
                                <input type="text" className="form-control form-control-solid" placeholder name="description" />
                                {/*end::Input*/}
                              </div>
                              {/*end::Input group*/}
                            </div>
                            {/*end::User form*/}
                            {/*begin::Billing toggle*/}
                            <div className="fw-bold fs-3 rotate collapsible collapsed mb-7" data-bs-toggle="collapse" href="#kt_modal_update_customer_billing_info" role="button" aria-expanded="false" aria-controls="kt_modal_update_customer_billing_info">Shipping Information
                              <span className="ms-2 rotate-180">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                <span className="svg-icon svg-icon-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span></div>
                            {/*end::Billing toggle*/}
                            {/*begin::Billing form*/}
                            <div id="kt_modal_update_customer_billing_info" className="collapse">
                              {/*begin::Input group*/}
                              <div className="d-flex flex-column mb-7 fv-row">
                                {/*begin::Label*/}
                                <label className="fs-6 fw-semibold mb-2">Address Line 1</label>
                                {/*end::Label*/}
                                {/*begin::Input*/}
                                <input className="form-control form-control-solid" placeholder name="address1" defaultValue="101, Collins Street" />
                                {/*end::Input*/}
                              </div>
                              {/*end::Input group*/}
                              {/*begin::Input group*/}
                              <div className="d-flex flex-column mb-7 fv-row">
                                {/*begin::Label*/}
                                <label className="fs-6 fw-semibold mb-2">Address Line 2</label>
                                {/*end::Label*/}
                                {/*begin::Input*/}
                                <input className="form-control form-control-solid" placeholder name="address2" />
                                {/*end::Input*/}
                              </div>
                              {/*end::Input group*/}
                              {/*begin::Input group*/}
                              <div className="d-flex flex-column mb-7 fv-row">
                                {/*begin::Label*/}
                                <label className="fs-6 fw-semibold mb-2">Town</label>
                                {/*end::Label*/}
                                {/*begin::Input*/}
                                <input className="form-control form-control-solid" placeholder name="city" defaultValue="Melbourne" />
                                {/*end::Input*/}
                              </div>
                              {/*end::Input group*/}
                              {/*begin::Input group*/}
                              <div className="row g-9 mb-7">
                                {/*begin::Col*/}
                                <div className="col-md-6 fv-row">
                                  {/*begin::Label*/}
                                  <label className="fs-6 fw-semibold mb-2">State / Province</label>
                                  {/*end::Label*/}
                                  {/*begin::Input*/}
                                  <input className="form-control form-control-solid" placeholder name="state" defaultValue="Victoria" />
                                  {/*end::Input*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-md-6 fv-row">
                                  {/*begin::Label*/}
                                  <label className="fs-6 fw-semibold mb-2">Post Code</label>
                                  {/*end::Label*/}
                                  {/*begin::Input*/}
                                  <input className="form-control form-control-solid" placeholder name="postcode" defaultValue={3000} />
                                  {/*end::Input*/}
                                </div>
                                {/*end::Col*/}
                              </div>
                              {/*end::Input group*/}
                              {/*begin::Input group*/}
                              <div className="d-flex flex-column mb-7 fv-row">
                                {/*begin::Label*/}
                                <label className="fs-6 fw-semibold mb-2">
                                  <span>Country</span>
                                  <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Country of origination" />
                                </label>
                                {/*end::Label*/}
                                {/*begin::Input*/}
                                <select name="country" aria-label="Select a Country" data-control="select2" data-placeholder="Select a Country..." data-dropdown-parent="#kt_modal_update_customer" className="form-select form-select-solid fw-bold">
                                  <option value>Select a Country...</option>
                                  <option value="AF">Afghanistan</option>
                                  <option value="AX">Aland Islands</option>
                                  <option value="AL">Albania</option>
                                  <option value="DZ">Algeria</option>
                                  <option value="AS">American Samoa</option>
                                  <option value="AD">Andorra</option>
                                  <option value="AO">Angola</option>
                                  <option value="AI">Anguilla</option>
                                  <option value="AG">Antigua and Barbuda</option>
                                  <option value="AR">Argentina</option>
                                  <option value="AM">Armenia</option>
                                  <option value="AW">Aruba</option>
                                  <option value="AU">Australia</option>
                                  <option value="AT">Austria</option>
                                  <option value="AZ">Azerbaijan</option>
                                  <option value="BS">Bahamas</option>
                                  <option value="BH">Bahrain</option>
                                  <option value="BD">Bangladesh</option>
                                  <option value="BB">Barbados</option>
                                  <option value="BY">Belarus</option>
                                  <option value="BE">Belgium</option>
                                  <option value="BZ">Belize</option>
                                  <option value="BJ">Benin</option>
                                  <option value="BM">Bermuda</option>
                                  <option value="BT">Bhutan</option>
                                  <option value="BO">Bolivia, Plurinational State of</option>
                                  <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                  <option value="BA">Bosnia and Herzegovina</option>
                                  <option value="BW">Botswana</option>
                                  <option value="BR">Brazil</option>
                                  <option value="IO">British Indian Ocean Territory</option>
                                  <option value="BN">Brunei Darussalam</option>
                                  <option value="BG">Bulgaria</option>
                                  <option value="BF">Burkina Faso</option>
                                  <option value="BI">Burundi</option>
                                  <option value="KH">Cambodia</option>
                                  <option value="CM">Cameroon</option>
                                  <option value="CA">Canada</option>
                                  <option value="CV">Cape Verde</option>
                                  <option value="KY">Cayman Islands</option>
                                  <option value="CF">Central African Republic</option>
                                  <option value="TD">Chad</option>
                                  <option value="CL">Chile</option>
                                  <option value="CN">China</option>
                                  <option value="CX">Christmas Island</option>
                                  <option value="CC">Cocos (Keeling) Islands</option>
                                  <option value="CO">Colombia</option>
                                  <option value="KM">Comoros</option>
                                  <option value="CK">Cook Islands</option>
                                  <option value="CR">Costa Rica</option>
                                  <option value="CI">Côte d'Ivoire</option>
                                  <option value="HR">Croatia</option>
                                  <option value="CU">Cuba</option>
                                  <option value="CW">Curaçao</option>
                                  <option value="CZ">Czech Republic</option>
                                  <option value="DK">Denmark</option>
                                  <option value="DJ">Djibouti</option>
                                  <option value="DM">Dominica</option>
                                  <option value="DO">Dominican Republic</option>
                                  <option value="EC">Ecuador</option>
                                  <option value="EG">Egypt</option>
                                  <option value="SV">El Salvador</option>
                                  <option value="GQ">Equatorial Guinea</option>
                                  <option value="ER">Eritrea</option>
                                  <option value="EE">Estonia</option>
                                  <option value="ET">Ethiopia</option>
                                  <option value="FK">Falkland Islands (Malvinas)</option>
                                  <option value="FJ">Fiji</option>
                                  <option value="FI">Finland</option>
                                  <option value="FR">France</option>
                                  <option value="PF">French Polynesia</option>
                                  <option value="GA">Gabon</option>
                                  <option value="GM">Gambia</option>
                                  <option value="GE">Georgia</option>
                                  <option value="DE">Germany</option>
                                  <option value="GH">Ghana</option>
                                  <option value="GI">Gibraltar</option>
                                  <option value="GR">Greece</option>
                                  <option value="GL">Greenland</option>
                                  <option value="GD">Grenada</option>
                                  <option value="GU">Guam</option>
                                  <option value="GT">Guatemala</option>
                                  <option value="GG">Guernsey</option>
                                  <option value="GN">Guinea</option>
                                  <option value="GW">Guinea-Bissau</option>
                                  <option value="HT">Haiti</option>
                                  <option value="VA">Holy See (Vatican City State)</option>
                                  <option value="HN">Honduras</option>
                                  <option value="HK">Hong Kong</option>
                                  <option value="HU">Hungary</option>
                                  <option value="IS">Iceland</option>
                                  <option value="IN">India</option>
                                  <option value="ID">Indonesia</option>
                                  <option value="IR">Iran, Islamic Republic of</option>
                                  <option value="IQ">Iraq</option>
                                  <option value="IE">Ireland</option>
                                  <option value="IM">Isle of Man</option>
                                  <option value="IL">Israel</option>
                                  <option value="IT">Italy</option>
                                  <option value="JM">Jamaica</option>
                                  <option value="JP">Japan</option>
                                  <option value="JE">Jersey</option>
                                  <option value="JO">Jordan</option>
                                  <option value="KZ">Kazakhstan</option>
                                  <option value="KE">Kenya</option>
                                  <option value="KI">Kiribati</option>
                                  <option value="KP">Korea, Democratic People's Republic of</option>
                                  <option value="KW">Kuwait</option>
                                  <option value="KG">Kyrgyzstan</option>
                                  <option value="LA">Lao People's Democratic Republic</option>
                                  <option value="LV">Latvia</option>
                                  <option value="LB">Lebanon</option>
                                  <option value="LS">Lesotho</option>
                                  <option value="LR">Liberia</option>
                                  <option value="LY">Libya</option>
                                  <option value="LI">Liechtenstein</option>
                                  <option value="LT">Lithuania</option>
                                  <option value="LU">Luxembourg</option>
                                  <option value="MO">Macao</option>
                                  <option value="MG">Madagascar</option>
                                  <option value="MW">Malawi</option>
                                  <option value="MY">Malaysia</option>
                                  <option value="MV">Maldives</option>
                                  <option value="ML">Mali</option>
                                  <option value="MT">Malta</option>
                                  <option value="MH">Marshall Islands</option>
                                  <option value="MQ">Martinique</option>
                                  <option value="MR">Mauritania</option>
                                  <option value="MU">Mauritius</option>
                                  <option value="MX">Mexico</option>
                                  <option value="FM">Micronesia, Federated States of</option>
                                  <option value="MD">Moldova, Republic of</option>
                                  <option value="MC">Monaco</option>
                                  <option value="MN">Mongolia</option>
                                  <option value="ME">Montenegro</option>
                                  <option value="MS">Montserrat</option>
                                  <option value="MA">Morocco</option>
                                  <option value="MZ">Mozambique</option>
                                  <option value="MM">Myanmar</option>
                                  <option value="NA">Namibia</option>
                                  <option value="NR">Nauru</option>
                                  <option value="NP">Nepal</option>
                                  <option value="NL">Netherlands</option>
                                  <option value="NZ">New Zealand</option>
                                  <option value="NI">Nicaragua</option>
                                  <option value="NE">Niger</option>
                                  <option value="NG">Nigeria</option>
                                  <option value="NU">Niue</option>
                                  <option value="NF">Norfolk Island</option>
                                  <option value="MP">Northern Mariana Islands</option>
                                  <option value="NO">Norway</option>
                                  <option value="OM">Oman</option>
                                  <option value="PK">Pakistan</option>
                                  <option value="PW">Palau</option>
                                  <option value="PS">Palestinian Territory, Occupied</option>
                                  <option value="PA">Panama</option>
                                  <option value="PG">Papua New Guinea</option>
                                  <option value="PY">Paraguay</option>
                                  <option value="PE">Peru</option>
                                  <option value="PH">Philippines</option>
                                  <option value="PL">Poland</option>
                                  <option value="PT">Portugal</option>
                                  <option value="PR">Puerto Rico</option>
                                  <option value="QA">Qatar</option>
                                  <option value="RO">Romania</option>
                                  <option value="RU">Russian Federation</option>
                                  <option value="RW">Rwanda</option>
                                  <option value="BL">Saint Barthélemy</option>
                                  <option value="KN">Saint Kitts and Nevis</option>
                                  <option value="LC">Saint Lucia</option>
                                  <option value="MF">Saint Martin (French part)</option>
                                  <option value="VC">Saint Vincent and the Grenadines</option>
                                  <option value="WS">Samoa</option>
                                  <option value="SM">San Marino</option>
                                  <option value="ST">Sao Tome and Principe</option>
                                  <option value="SA">Saudi Arabia</option>
                                  <option value="SN">Senegal</option>
                                  <option value="RS">Serbia</option>
                                  <option value="SC">Seychelles</option>
                                  <option value="SL">Sierra Leone</option>
                                  <option value="SG">Singapore</option>
                                  <option value="SX">Sint Maarten (Dutch part)</option>
                                  <option value="SK">Slovakia</option>
                                  <option value="SI">Slovenia</option>
                                  <option value="SB">Solomon Islands</option>
                                  <option value="SO">Somalia</option>
                                  <option value="ZA">South Africa</option>
                                  <option value="KR">South Korea</option>
                                  <option value="SS">South Sudan</option>
                                  <option value="ES">Spain</option>
                                  <option value="LK">Sri Lanka</option>
                                  <option value="SD">Sudan</option>
                                  <option value="SR">Suriname</option>
                                  <option value="SZ">Swaziland</option>
                                  <option value="SE">Sweden</option>
                                  <option value="CH">Switzerland</option>
                                  <option value="SY">Syrian Arab Republic</option>
                                  <option value="TW">Taiwan, Province of China</option>
                                  <option value="TJ">Tajikistan</option>
                                  <option value="TZ">Tanzania, United Republic of</option>
                                  <option value="TH">Thailand</option>
                                  <option value="TG">Togo</option>
                                  <option value="TK">Tokelau</option>
                                  <option value="TO">Tonga</option>
                                  <option value="TT">Trinidad and Tobago</option>
                                  <option value="TN">Tunisia</option>
                                  <option value="TR">Turkey</option>
                                  <option value="TM">Turkmenistan</option>
                                  <option value="TC">Turks and Caicos Islands</option>
                                  <option value="TV">Tuvalu</option>
                                  <option value="UG">Uganda</option>
                                  <option value="UA">Ukraine</option>
                                  <option value="AE">United Arab Emirates</option>
                                  <option value="GB">United Kingdom</option>
                                  <option value="US">United States</option>
                                  <option value="UY">Uruguay</option>
                                  <option value="UZ">Uzbekistan</option>
                                  <option value="VU">Vanuatu</option>
                                  <option value="VE">Venezuela, Bolivarian Republic of</option>
                                  <option value="VN">Vietnam</option>
                                  <option value="VI">Virgin Islands</option>
                                  <option value="YE">Yemen</option>
                                  <option value="ZM">Zambia</option>
                                  <option value="ZW">Zimbabwe</option>
                                </select>
                                {/*end::Input*/}
                              </div>
                              {/*end::Input group*/}
                              {/*begin::Input group*/}
                              <div className="fv-row mb-7">
                                {/*begin::Wrapper*/}
                                <div className="d-flex flex-stack">
                                  {/*begin::Label*/}
                                  <div className="me-5">
                                    {/*begin::Label*/}
                                    <label className="fs-6 fw-semibold">Use as a billing adderess?</label>
                                    {/*end::Label*/}
                                    {/*begin::Input*/}
                                    <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                                    {/*end::Input*/}
                                  </div>
                                  {/*end::Label*/}
                                  {/*begin::Switch*/}
                                  <label className="form-check form-switch form-check-custom form-check-solid">
                                    {/*begin::Input*/}
                                    <input className="form-check-input" name="billing" type="checkbox" defaultValue={1} id="kt_modal_update_customer_billing" defaultChecked="checked" />
                                    {/*end::Input*/}
                                    {/*begin::Label*/}
                                    <span className="form-check-label fw-semibold text-muted" htmlFor="kt_modal_update_customer_billing">Yes</span>
                                    {/*end::Label*/}
                                  </label>
                                  {/*end::Switch*/}
                                </div>
                                {/*begin::Wrapper*/}
                              </div>
                              {/*end::Input group*/}
                            </div>
                            {/*end::Billing form*/}
                          </div>
                          {/*end::Scroll*/}
                        </div>
                        {/*end::Modal body*/}
                        {/*begin::Modal footer*/}
                        <div className="modal-footer flex-center">
                          {/*begin::Button*/}
                          <button type="reset" id="kt_modal_update_customer_cancel" className="btn btn-light me-3">Discard</button>
                          {/*end::Button*/}
                          {/*begin::Button*/}
                          <button type="submit" id="kt_modal_update_customer_submit" className="btn btn-primary">
                            <span className="indicator-label">Submit</span>
                            <span className="indicator-progress">Please wait...
                              <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                          </button>
                          {/*end::Button*/}
                        </div>
                        {/*end::Modal footer*/}
                      </form>
                      {/*end::Form*/}
                    </div>
                  </div>
                </div>
                {/*end::Modal - New Address*/}
                {/*begin::Modal - New Card*/}
                <div className="modal fade" id="kt_modal_new_card" tabIndex={-1} aria-hidden="true">
                  {/*begin::Modal dialog*/}
                  <div className="modal-dialog modal-dialog-centered mw-650px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                      {/*begin::Modal header*/}
                      <div className="modal-header">
                        {/*begin::Modal title*/}
                        <h2>Add New Card</h2>
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
                      {/*end::Modal header*/}
                      {/*begin::Modal body*/}
                      <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                        {/*begin::Form*/}
                        <form id="kt_modal_new_card_form" className="form" action="#">
                          {/*begin::Input group*/}
                          <div className="d-flex flex-column mb-7 fv-row">
                            {/*begin::Label*/}
                            <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                              <span className="required">Name On Card</span>
                              <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name" />
                            </label>
                            {/*end::Label*/}
                            <input type="text" className="form-control form-control-solid" placeholder name="card_name" defaultValue="Max Doe" />
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="d-flex flex-column mb-7 fv-row">
                            {/*begin::Label*/}
                            <label className="required fs-6 fw-semibold form-label mb-2">Card Number</label>
                            {/*end::Label*/}
                            {/*begin::Input wrapper*/}
                            <div className="position-relative">
                              {/*begin::Input*/}
                              <input type="text" className="form-control form-control-solid" placeholder="Enter card number" name="card_number" defaultValue="4111 1111 1111 1111" />
                              {/*end::Input*/}
                              {/*begin::Card logos*/}
                              <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                                <img src="assets/media/svg/card-logos/visa.svg" alt className="h-25px" />
                                <img src="assets/media/svg/card-logos/mastercard.svg" alt className="h-25px" />
                                <img src="assets/media/svg/card-logos/american-express.svg" alt className="h-25px" />
                              </div>
                              {/*end::Card logos*/}
                            </div>
                            {/*end::Input wrapper*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="row mb-10">
                            {/*begin::Col*/}
                            <div className="col-md-8 fv-row">
                              {/*begin::Label*/}
                              <label className="required fs-6 fw-semibold form-label mb-2">Expiration Date</label>
                              {/*end::Label*/}
                              {/*begin::Row*/}
                              <div className="row fv-row">
                                {/*begin::Col*/}
                                <div className="col-6">
                                  <select name="card_expiry_month" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Month">
                                    <option />
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                    <option value={11}>11</option>
                                    <option value={12}>12</option>
                                  </select>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-6">
                                  <select name="card_expiry_year" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Year">
                                    <option />
                                    <option value={2023}>2023</option>
                                    <option value={2024}>2024</option>
                                    <option value={2025}>2025</option>
                                    <option value={2026}>2026</option>
                                    <option value={2027}>2027</option>
                                    <option value={2028}>2028</option>
                                    <option value={2029}>2029</option>
                                    <option value={2030}>2030</option>
                                    <option value={2031}>2031</option>
                                    <option value={2032}>2032</option>
                                    <option value={2033}>2033</option>
                                  </select>
                                </div>
                                {/*end::Col*/}
                              </div>
                              {/*end::Row*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4 fv-row">
                              {/*begin::Label*/}
                              <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                <span className="required">CVV</span>
                                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code" />
                              </label>
                              {/*end::Label*/}
                              {/*begin::Input wrapper*/}
                              <div className="position-relative">
                                {/*begin::Input*/}
                                <input type="text" className="form-control form-control-solid" minLength={3} maxLength={4} placeholder="CVV" name="card_cvv" />
                                {/*end::Input*/}
                                {/*begin::CVV icon*/}
                                <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                                  {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
                                  <span className="svg-icon svg-icon-2hx">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M22 7H2V11H22V7Z" fill="currentColor" />
                                      <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </div>
                                {/*end::CVV icon*/}
                              </div>
                              {/*end::Input wrapper*/}
                            </div>
                            {/*end::Col*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Label*/}
                            <div className="me-5">
                              <label className="fs-6 fw-semibold form-label">Save Card for further billing?</label>
                              <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                            </div>
                            {/*end::Label*/}
                            {/*begin::Switch*/}
                            <label className="form-check form-switch form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} defaultChecked="checked" />
                              <span className="form-check-label fw-semibold text-muted">Save Card</span>
                            </label>
                            {/*end::Switch*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Actions*/}
                          <div className="text-center pt-15">
                            <button type="reset" id="kt_modal_new_card_cancel" className="btn btn-light me-3">Discard</button>
                            <button type="submit" id="kt_modal_new_card_submit" className="btn btn-primary">
                              <span className="indicator-label">Submit</span>
                              <span className="indicator-progress">Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                            </button>
                          </div>
                          {/*end::Actions*/}
                        </form>
                        {/*end::Form*/}
                      </div>
                      {/*end::Modal body*/}
                    </div>
                    {/*end::Modal content*/}
                  </div>
                  {/*end::Modal dialog*/}
                </div>
                {/*end::Modal - New Card*/}
                {/*end::Modals*/}
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
  </div>

  )
}

export default ClientProfile