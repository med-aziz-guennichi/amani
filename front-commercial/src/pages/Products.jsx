import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Rest from '../components/Rest'
const Products = () => {
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
        {/*begin::Sidebar*/}
<Sidebar/>
        {/*end::Sidebar*/}
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
                  <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Products</h1>
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
                    <li className="breadcrumb-item text-muted">Our Products</li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item">
                      <span className="bullet bg-gray-400 w-5px h-2px" />
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                   {/* <li className="breadcrumb-item text-muted">.</li>*/}
                    {/*end::Item*/}
                  </ul>
                  {/*end::Breadcrumb*/}
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
                {/*begin::Products*/}
                <div className="card card-flush">
                  {/*begin::Card header*/}
                  <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                    {/*begin::Card title*/}
                    <div className="card-title">
                      {/*begin::Search*/}
                      <div className="d-flex align-items-center position-relative my-1">
                        {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                        <span className="svg-icon svg-icon-1 position-absolute ms-4">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height={2} rx={1} transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                            <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <input type="text" data-kt-ecommerce-product-filter="search" className="form-control form-control-solid w-250px ps-14" placeholder="Search Product" />
                      </div>
                      {/*end::Search*/}
                    </div>
                    {/*end::Card title*/}
                    {/*begin::Card toolbar*/}
                    <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
                      <div className="w-100 mw-150px">
                        {/*begin::Select2*/}
                        <select className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Status" data-kt-ecommerce-product-filter="status">
                          <option />
                          <option value="all">All</option>
                          <option value="published">Published</option>
                          <option value="inactive">Archived</option>
                        </select>
                        {/*end::Select2*/}
                      </div>
                      {/*begin::Add product*/}
                      <a href="../../demo1/dist/apps/ecommerce/catalog/add-product.html" className="btn btn-primary">Add Product</a>
                      {/*end::Add product*/}
                    </div>
                    {/*end::Card toolbar*/}
                  </div>
                  {/*end::Card header*/}
                  {/*begin::Card body*/}
                  <div className="card-body pt-0">
                    {/*begin::Table*/}
                    <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_products_table">
                      {/*begin::Table head*/}
                      <thead>
                        {/*begin::Table row*/}
                        <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                          <th className="w-10px pe-2">
                            <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                              <input className="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_ecommerce_products_table .form-check-input" defaultValue={1} />
                            </div>
                          </th>
                          <th className="min-w-200px">Title</th>
                          <th className="text-end min-w-100px">description</th>
                          <th className="text-end min-w-70px">Type</th>
                          <th className="text-end min-w-100px">Price</th>
                          <th className="text-end min-w-100px">Creation Date</th>
                          <th className="text-end min-w-100px">Status</th>
                          <th className="text-end min-w-70px">Actions</th>
                        </tr>
                        {/*end::Table row*/}
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody className="fw-semibold text-gray-600">
                        {/*begin::Table row*/}
                        <tr>
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/1.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 1</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">03965008</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={34}>
                            <span className="fw-bold ms-3">34</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">76</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-3">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Scheduled">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-primary">Scheduled</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Archive</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/2.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 2</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">02373005</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={42}>
                            <span className="fw-bold ms-3">42</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">182</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/3.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 3</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">03343003</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={31}>
                            <span className="fw-bold ms-3">31</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">165</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Published">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-success">Published</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/4.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 4</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">02116003</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={13}>
                            <span className="fw-bold ms-3">13</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">228</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Scheduled">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-primary">Scheduled</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/5.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 5</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">03303009</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={16}>
                            <span className="fw-bold ms-3">16</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">231</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Published">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-success">Published</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/6.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 6</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">01149006</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={17}>
                            <span className="fw-bold ms-3">17</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">43</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Published">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-success">Published</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/7.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 7</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">04836007</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={22}>
                            <span className="fw-bold ms-3">22</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">180</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Published">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-success">Published</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/8.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 8</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">03857007</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={33}>
                            <span className="fw-bold ms-3">33</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">107</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/9.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 9</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">03416008</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={32}>
                            <span className="fw-bold ms-3">32</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">29</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/10.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 10</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">04867006</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={31}>
                            <span className="fw-bold ms-3">31</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">270</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/11.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 11</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">01847005</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={17}>
                            <span className="fw-bold ms-3">17</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">20</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/12.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 12</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">02667004</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={7}>
                            <span className="badge badge-light-warning">Low stock</span>
                            <span className="fw-bold text-warning ms-3">7</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">130</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Scheduled">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-primary">Scheduled</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/13.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 13</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">04446003</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={43}>
                            <span className="fw-bold ms-3">43</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">66</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Published">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-success">Published</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/14.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 14</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">03579001</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={34}>
                            <span className="fw-bold ms-3">34</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">153</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Scheduled">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-primary">Scheduled</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/15.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 15</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">02204001</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={3}>
                            <span className="badge badge-light-warning">Low stock</span>
                            <span className="fw-bold text-warning ms-3">3</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">125</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-3">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Scheduled">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-primary">Scheduled</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/16.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 16</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">03673001</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={20}>
                            <span className="fw-bold ms-3">20</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">69</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-3">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Scheduled">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-primary">Scheduled</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/17.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 17</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">04717002</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={41}>
                            <span className="fw-bold ms-3">41</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">72</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/18.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 18</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">01880003</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={36}>
                            <span className="fw-bold ms-3">36</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">32</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-3">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Scheduled">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-primary">Scheduled</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/19.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 19</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">04409008</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={22}>
                            <span className="fw-bold ms-3">22</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">267</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Published">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-success">Published</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/20.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 20</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">02565004</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={49}>
                            <span className="fw-bold ms-3">49</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">107</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/21.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 21</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">04278009</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={39}>
                            <span className="fw-bold ms-3">39</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">267</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Scheduled">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-primary">Scheduled</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/22.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 22</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">01549008</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={9}>
                            <span className="badge badge-light-warning">Low stock</span>
                            <span className="fw-bold text-warning ms-3">9</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">84</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-3">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/23.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 23</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">02382003</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={0}>
                            <span className="badge badge-light-danger">Sold out</span>
                            <span className="fw-bold text-danger ms-3">0</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">240</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/24.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 24</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">04359007</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={42}>
                            <span className="fw-bold ms-3">42</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">142</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Published">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-success">Published</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/25.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 25</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">03199005</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={9}>
                            <span className="badge badge-light-warning">Low stock</span>
                            <span className="fw-bold text-warning ms-3">9</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">139</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Scheduled">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-primary">Scheduled</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/26.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 26</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">03792009</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={39}>
                            <span className="fw-bold ms-3">39</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">192</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-3">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Published">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-success">Published</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/27.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 27</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">01541009</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={41}>
                            <span className="fw-bold ms-3">41</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">26</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-3">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Scheduled">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-primary">Scheduled</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/28.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 28</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">02988003</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={17}>
                            <span className="fw-bold ms-3">17</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">191</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/29.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 29</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">01241009</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={50}>
                            <span className="fw-bold ms-3">50</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">43</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Published">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-success">Published</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/30.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 30</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">01756007</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={5}>
                            <span className="badge badge-light-warning">Low stock</span>
                            <span className="fw-bold text-warning ms-3">5</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">111</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-3">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/31.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 31</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">01343009</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={44}>
                            <span className="fw-bold ms-3">44</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">87</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-3">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Scheduled">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-primary">Scheduled</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/32.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 32</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">04591003</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={13}>
                            <span className="fw-bold ms-3">13</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">85</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Published">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-success">Published</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/33.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 33</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">01253009</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={29}>
                            <span className="fw-bold ms-3">29</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">60</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/34.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 34</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">04797007</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={45}>
                            <span className="fw-bold ms-3">45</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">299</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-3">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/35.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 35</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">04244007</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={35}>
                            <span className="fw-bold ms-3">35</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">299</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Scheduled">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-primary">Scheduled</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/36.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 36</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">03446006</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={47}>
                            <span className="fw-bold ms-3">47</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">167</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Published">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-success">Published</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/37.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 37</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">01318006</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={8}>
                            <span className="badge badge-light-warning">Low stock</span>
                            <span className="fw-bold text-warning ms-3">8</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">152</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/38.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 38</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">01286008</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={46}>
                            <span className="fw-bold ms-3">46</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">85</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/39.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 39</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">04927003</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={14}>
                            <span className="fw-bold ms-3">14</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">107</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-3">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/40.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 40</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">03891008</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={5}>
                            <span className="badge badge-light-warning">Low stock</span>
                            <span className="fw-bold text-warning ms-3">5</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">226</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/41.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 41</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">01635001</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={20}>
                            <span className="fw-bold ms-3">20</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">171</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/42.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 42</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">02852002</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={30}>
                            <span className="fw-bold ms-3">30</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">190</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Published">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-success">Published</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/43.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 43</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">01591008</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={49}>
                            <span className="fw-bold ms-3">49</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">40</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Scheduled">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-primary">Scheduled</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/44.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 44</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">01975005</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={37}>
                            <span className="fw-bold ms-3">37</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">145</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Published">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-success">Published</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/45.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 45</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">02394001</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={2}>
                            <span className="badge badge-light-warning">Low stock</span>
                            <span className="fw-bold text-warning ms-3">2</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">211</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Scheduled">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-primary">Scheduled</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/46.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 46</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">04552009</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={42}>
                            <span className="fw-bold ms-3">42</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">131</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/47.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 47</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">02236003</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={29}>
                            <span className="fw-bold ms-3">29</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">189</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Scheduled">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-primary">Scheduled</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/48.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 48</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">03206007</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={28}>
                            <span className="fw-bold ms-3">28</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">111</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/49.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 49</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">02634002</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={18}>
                            <span className="fw-bold ms-3">18</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">101</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-4">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Published">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-success">Published</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::Category=*/}
                          <td>
                            <div className="d-flex align-items-center">
                              {/*begin::Thumbnail*/}
                              <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                <span className="symbol-label" style={{backgroundImage: 'url(assets/media//stock/ecommerce/50.gif)'}} />
                              </a>
                              {/*end::Thumbnail*/}
                              <div className="ms-5">
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 50</a>
                                {/*end::Title*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Category=*/}
                          {/*begin::SKU=*/}
                          <td className="text-end pe-0">
                            <span className="fw-bold">01881004</span>
                          </td>
                          {/*end::SKU=*/}
                          {/*begin::Qty=*/}
                          <td className="text-end pe-0" data-order={45}>
                            <span className="fw-bold ms-3">45</span>
                          </td>
                          {/*end::Qty=*/}
                          {/*begin::Price=*/}
                          <td className="text-end pe-0">291</td>
                          {/*end::Price=*/}
                          {/*begin::Rating*/}
                          <td className="text-end pe-0" data-order="rating-5">
                            <div className="rating justify-content-end">
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              <div className="rating-label checked">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                            </div>
                          </td>
                          {/*end::Rating*/}
                          {/*begin::Status=*/}
                          <td className="text-end pe-0" data-order="Inactive">
                            {/*begin::Badges*/}
                            <div className="badge badge-light-danger">Inactive</div>
                            {/*end::Badges*/}
                          </td>
                          {/*end::Status=*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
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
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                {/*end::Products*/}
              </div>
              {/*end::Content container*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Content wrapper*/}
          {/*begin::Footer*/}
<Footer/>
          {/*end::Footer*/}
        </div>
        {/*end:::Main*/}
      </div>
      {/*end::Wrapper*/}
    </div>
    {/*end::Page*/}
    <Rest/>
    <Helmet>
    <script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/apps/ecommerce/catalog/products.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/widgets.bundle.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/widgets.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/apps/chat/chat.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/upgrade-plan.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/create-app.js"}></script>
		<script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/users-search.js"}></script>
    </Helmet>
  </div></div>

  )
}

export default Products