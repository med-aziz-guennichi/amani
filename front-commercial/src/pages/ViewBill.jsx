import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Rest from '../components/Rest'
import Sidebar from '../components/Sidebar'

const ViewBill = () => {
  return (
<div id="kt_app_body" data-kt-app-layout="dark-sidebar" data-kt-app-header-fixed="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-hoverable="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" data-kt-app-toolbar-enabled="true" className="print-content-only app-default">
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
                  <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Invoice 1</h1>
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
                    <li className="breadcrumb-item text-muted">Invoice Manager</li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item">
                      <span className="bullet bg-gray-400 w-5px h-2px" />
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item text-muted">View Invoices</li>
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
                    <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_63d0d9fdf2203">
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
                            <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_63d0d9fdf2203" data-allow-clear="true">
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
                {/*begin::Invoice 2 main*/}
                <div className="card">
                  {/*begin::Body*/}
                  <div className="card-body p-lg-20">
                    {/*begin::Layout*/}
                    <div className="d-flex flex-column flex-xl-row">
                      {/*begin::Content*/}
                      <div className="flex-lg-row-fluid me-xl-18 mb-10 mb-xl-0">
                        {/*begin::Invoice 2 content*/}
                        <div className="mt-n1">
                          {/*begin::Top*/}
                          <div className="d-flex flex-stack pb-10">
                            {/*begin::Logo*/}
                            <a href="#">
                              <img alt="Logo" src="assets/media/svg/brand-logos/code-lab.svg" />
                            </a>
                            {/*end::Logo*/}
                            {/*begin::Action*/}
                            <a href="#" className="btn btn-sm btn-success">Pay Now</a>
                            {/*end::Action*/}
                          </div>
                          {/*end::Top*/}
                          {/*begin::Wrapper*/}
                          <div className="m-0">
                            {/*begin::Label*/}
                            <div className="fw-bold fs-3 text-gray-800 mb-8">Invoice #34782</div>
                            {/*end::Label*/}
                            {/*begin::Row*/}
                            <div className="row g-5 mb-11">
                              {/*end::Col*/}
                              <div className="col-sm-6">
                                {/*end::Label*/}
                                <div className="fw-semibold fs-7 text-gray-600 mb-1">Issue Date:</div>
                                {/*end::Label*/}
                                {/*end::Col*/}
                                <div className="fw-bold fs-6 text-gray-800">12 Apr 2021</div>
                                {/*end::Col*/}
                              </div>
                              {/*end::Col*/}
                              {/*end::Col*/}
                              <div className="col-sm-6">
                                {/*end::Label*/}
                                <div className="fw-semibold fs-7 text-gray-600 mb-1">Due Date:</div>
                                {/*end::Label*/}
                                {/*end::Info*/}
                                <div className="fw-bold fs-6 text-gray-800 d-flex align-items-center flex-wrap">
                                  <span className="pe-2">02 May 2021</span>
                                  <span className="fs-7 text-danger d-flex align-items-center">
                                    <span className="bullet bullet-dot bg-danger me-2" />Due in 7 days</span>
                                </div>
                                {/*end::Info*/}
                              </div>
                              {/*end::Col*/}
                            </div>
                            {/*end::Row*/}
                            {/*begin::Row*/}
                            <div className="row g-5 mb-12">
                              {/*end::Col*/}
                              <div className="col-sm-6">
                                {/*end::Label*/}
                                <div className="fw-semibold fs-7 text-gray-600 mb-1">Issue For:</div>
                                {/*end::Label*/}
                                {/*end::Text*/}
                                <div className="fw-bold fs-6 text-gray-800">KeenThemes Inc.</div>
                                {/*end::Text*/}
                                {/*end::Description*/}
                                <div className="fw-semibold fs-7 text-gray-600">8692 Wild Rose Drive
                                  <br />Livonia, MI 48150</div>
                                {/*end::Description*/}
                              </div>
                              {/*end::Col*/}
                              {/*end::Col*/}
                              <div className="col-sm-6">
                                {/*end::Label*/}
                                <div className="fw-semibold fs-7 text-gray-600 mb-1">Issued By:</div>
                                {/*end::Label*/}
                                {/*end::Text*/}
                                <div className="fw-bold fs-6 text-gray-800">CodeLab Inc.</div>
                                {/*end::Text*/}
                                {/*end::Description*/}
                                <div className="fw-semibold fs-7 text-gray-600">9858 South 53rd Ave.
                                  <br />Matthews, NC 28104</div>
                                {/*end::Description*/}
                              </div>
                              {/*end::Col*/}
                            </div>
                            {/*end::Row*/}
                            {/*begin::Content*/}
                            <div className="flex-grow-1">
                              {/*begin::Table*/}
                              <div className="table-responsive border-bottom mb-9">
                                <table className="table mb-3">
                                  <thead>
                                    <tr className="border-bottom fs-6 fw-bold text-muted">
                                      <th className="min-w-175px pb-2">Description</th>
                                      <th className="min-w-70px text-end pb-2">Hours</th>
                                      <th className="min-w-80px text-end pb-2">Rate</th>
                                      <th className="min-w-100px text-end pb-2">Amount</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="fw-bold text-gray-700 fs-5 text-end">
                                      <td className="d-flex align-items-center pt-6">
                                        <i className="fa fa-genderless text-danger fs-2 me-2" />Creative Design</td>
                                      <td className="pt-6">80</td>
                                      <td className="pt-6">$40.00</td>
                                      <td className="pt-6 text-dark fw-bolder">$3200.00</td>
                                    </tr>
                                    <tr className="fw-bold text-gray-700 fs-5 text-end">
                                      <td className="d-flex align-items-center">
                                        <i className="fa fa-genderless text-success fs-2 me-2" />Logo Design</td>
                                      <td>120</td>
                                      <td>$40.00</td>
                                      <td className="fs-5 text-dark fw-bolder">$4800.00</td>
                                    </tr>
                                    <tr className="fw-bold text-gray-700 fs-5 text-end">
                                      <td className="d-flex align-items-center">
                                        <i className="fa fa-genderless text-primary fs-2 me-2" />Web Development</td>
                                      <td>210</td>
                                      <td>$60.00</td>
                                      <td className="fs-5 text-dark fw-bolder">$12600.00</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/*end::Table*/}
                              {/*begin::Container*/}
                              <div className="d-flex justify-content-end">
                                {/*begin::Section*/}
                                <div className="mw-300px">
                                  {/*begin::Item*/}
                                  <div className="d-flex flex-stack mb-3">
                                    {/*begin::Accountname*/}
                                    <div className="fw-semibold pe-10 text-gray-600 fs-7">Subtotal:</div>
                                    {/*end::Accountname*/}
                                    {/*begin::Label*/}
                                    <div className="text-end fw-bold fs-6 text-gray-800">$ 20,600.00</div>
                                    {/*end::Label*/}
                                  </div>
                                  {/*end::Item*/}
                                  {/*begin::Item*/}
                                  <div className="d-flex flex-stack mb-3">
                                    {/*begin::Accountname*/}
                                    <div className="fw-semibold pe-10 text-gray-600 fs-7">VAT 0%</div>
                                    {/*end::Accountname*/}
                                    {/*begin::Label*/}
                                    <div className="text-end fw-bold fs-6 text-gray-800">0.00</div>
                                    {/*end::Label*/}
                                  </div>
                                  {/*end::Item*/}
                                  {/*begin::Item*/}
                                  <div className="d-flex flex-stack mb-3">
                                    {/*begin::Accountnumber*/}
                                    <div className="fw-semibold pe-10 text-gray-600 fs-7">Subtotal + VAT</div>
                                    {/*end::Accountnumber*/}
                                    {/*begin::Number*/}
                                    <div className="text-end fw-bold fs-6 text-gray-800">$ 20,600.00</div>
                                    {/*end::Number*/}
                                  </div>
                                  {/*end::Item*/}
                                  {/*begin::Item*/}
                                  <div className="d-flex flex-stack">
                                    {/*begin::Code*/}
                                    <div className="fw-semibold pe-10 text-gray-600 fs-7">Total</div>
                                    {/*end::Code*/}
                                    {/*begin::Label*/}
                                    <div className="text-end fw-bold fs-6 text-gray-800">$ 20,600.00</div>
                                    {/*end::Label*/}
                                  </div>
                                  {/*end::Item*/}
                                </div>
                                {/*end::Section*/}
                              </div>
                              {/*end::Container*/}
                            </div>
                            {/*end::Content*/}
                          </div>
                          {/*end::Wrapper*/}
                        </div>
                        {/*end::Invoice 2 content*/}
                      </div>
                      {/*end::Content*/}
                      {/*begin::Sidebar*/}
                      <div className="m-0">
                        {/*begin::Invoice 2 sidebar*/}
                        <div className="d-print-none border border-dashed border-gray-300 card-rounded h-lg-100 min-w-md-350px p-9 bg-lighten">
                          {/*begin::Labels*/}
                          <div className="mb-8">
                            <span className="badge badge-light-success me-2">Approved</span>
                            <span className="badge badge-light-warning">Pending Payment</span>
                          </div>
                          {/*end::Labels*/}
                          {/*begin::Title*/}
                          <h6 className="mb-8 fw-bolder text-gray-600 text-hover-primary">PAYMENT DETAILS</h6>
                          {/*end::Title*/}
                          {/*begin::Item*/}
                          <div className="mb-6">
                            <div className="fw-semibold text-gray-600 fs-7">Paypal:</div>
                            <div className="fw-bold text-gray-800 fs-6">codelabpay@codelab.co</div>
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="mb-6">
                            <div className="fw-semibold text-gray-600 fs-7">Account:</div>
                            <div className="fw-bold text-gray-800 fs-6">Nl24IBAN34553477847370033
                              <br />AMB NLANBZTC</div>
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="mb-15">
                            <div className="fw-semibold text-gray-600 fs-7">Payment Term:</div>
                            <div className="fw-bold fs-6 text-gray-800 d-flex align-items-center">14 days
                              <span className="fs-7 text-danger d-flex align-items-center">
                                <span className="bullet bullet-dot bg-danger mx-2" />Due in 7 days</span></div>
                          </div>
                          {/*end::Item*/}
                          {/*begin::Title*/}
                          <h6 className="mb-8 fw-bolder text-gray-600 text-hover-primary">PROJECT OVERVIEW</h6>
                          {/*end::Title*/}
                          {/*begin::Item*/}
                          <div className="mb-6">
                            <div className="fw-semibold text-gray-600 fs-7">Project Name</div>
                            <div className="fw-bold fs-6 text-gray-800">SaaS App Quickstarter
                              <a href="#" className="link-primary ps-1">View Project</a></div>
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="mb-6">
                            <div className="fw-semibold text-gray-600 fs-7">Completed By:</div>
                            <div className="fw-bold text-gray-800 fs-6">Mr. Dewonte Paul</div>
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="m-0">
                            <div className="fw-semibold text-gray-600 fs-7">Time Spent:</div>
                            <div className="fw-bold fs-6 text-gray-800 d-flex align-items-center">230 Hours
                              <span className="fs-7 text-success d-flex align-items-center">
                                <span className="bullet bullet-dot bg-success mx-2" />35$/h Rate</span></div>
                          </div>
                          {/*end::Item*/}
                        </div>
                        {/*end::Invoice 2 sidebar*/}
                      </div>
                      {/*end::Sidebar*/}
                    </div>
                    {/*end::Layout*/}
                  </div>
                  {/*end::Body*/}
                </div>
                {/*end::Invoice 2 main*/}
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
  <Rest/>
  {/*end::App*/}
  <Helmet>
    		<script src="assets/js/widgets.bundle.js"></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/widgets.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/apps/chat/chat.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/upgrade-plan.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/create-app.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/users-search.js"}></script>
  </Helmet>
  </div>


  )
}

export default ViewBill