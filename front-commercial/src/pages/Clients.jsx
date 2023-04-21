import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Rest from '../components/Rest'
import Footer from '../components/Footer'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { useState,useEffect } from 'react'
import EmployeService from '../service/EmployeService'
const Clients = () => {
    const [searchTerm,setSearchTerm]=useState("")
const [employe,setUsers]=useState([])
// const [formErrors, setFormErrors] = useState({});
// const [isSubmit, setIsSubmit] = useState(false);

  const GetAll=()=>{
    EmployeService.getAll().then(res=>{
      console.log(res)
      setUsers(res.data.data)
    }).catch(error=>{
      console.log(error)
    })

  
  }
  

  useEffect(() => {
   
    GetAll()
  
  }, [])
  const onDelete=(id)=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        EmployeService.remove(id).then(res=>{
          GetAll()
          
        })
        Swal.fire(
          'Deleted!',
          'Your employee has been deleted.',
          'success'
        )
      }
    })
  
  }
  const [data,setData]=useState({})
  const [files,setfiles]=useState([])

  const onChangehandle=(e)=>{
    setData({
      // ... bich nbadlou e data
      ...data,
      [e.target.name]:e.target.value
    })
  }


  const onSubmitHandle=(e)=>{
    e.preventDefault()
    // setFormErrors(validate(data));
    // setIsSubmit(true);
    const formdata = new FormData()
    for (let i = 0; i < files.length; i++) {
      formdata.append("file",files[i])
    }
    formdata.append("nom",data.nom)
    formdata.append("prenom",data.prenom)
    formdata.append("email",data.email)
    formdata.append("password",data.password)
    formdata.append("adresse",data.adresse)
    formdata.append("situ_fam",data.situ_fam)
    formdata.append("tel",data.tel)
    // if (Object.keys(formErrors).length === 0 && isSubmit) {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
  
          EmployeService.create(formdata).then(res=>{
            setData(res.data.data)
            console.log(res)
          }).catch(err=>{
            console.log(err)
          })
          Swal.fire('Saved!', '', 'success')
          window.location.reload(false);
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    // }
    
  }
  const onHandlefile=e=>{
    console.log(e)
    setfiles(e.target.files)
  
  }

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.nom) {
  //     errors.nom = "Firstname is required!";
  //   }
  //   if (!values.prenom) {
  //     errors.prenom = "Lastname is required!";
  //   }
  //   if (!values.situ_fam) {
  //     errors.situ_fam = "Situ Fam is required!";
  //   }
  //   if (!values.adresse) {
  //     errors.adresse = "Adress is required!";
  //   }
  //   if (!values.tel) {
  //     errors.tel = "Telephone is required!";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 6) {
  //     errors.password = "Password must be more than 6 characters";
  //   } else if (values.password.length > 12) {
  //     errors.password = "Password cannot exceed more than 12 characters";
  //   }
  //   return errors;
  // };
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
                  <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Clients List</h1>
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
                    <li className="breadcrumb-item text-muted">User Management</li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item">
                      <span className="bullet bg-gray-400 w-5px h-2px" />
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item text-muted">Users</li>
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
                    <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_63d0d9df336a7">
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
                            <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_63d0d9df336a7" data-allow-clear="true">
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
                {/*begin::Card*/}
                <div className="card">
                  {/*begin::Card header*/}
                  <div className="card-header border-0 pt-6">
                    {/*begin::Card title*/}
                    <div className="card-title">
                      {/*begin::Search*/}
                      <div className="d-flex align-items-center position-relative my-1">
                        {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                        <span className="svg-icon svg-icon-1 position-absolute ms-6">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height={2} rx={1} transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                            <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <input type="text" data-kt-user-table-filter="search" className="form-control form-control-solid w-250px ps-14" placeholder="Search user" onChange={(event)=>{setSearchTerm(event.target.value);
                  }}/>
                      </div>
                      {/*end::Search*/}
                    </div>
                    {/*begin::Card title*/}
                    {/*begin::Card toolbar*/}
                    <div className="card-toolbar">
                      {/*begin::Toolbar*/}
                      <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                        {/*begin::Filter*/}
                        <button type="button" className="btn btn-light-primary me-3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                          {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}Filter</button>
                        {/*begin::Menu 1*/}
                        <div className="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true">
                          {/*begin::Header*/}
                          <div className="px-7 py-5">
                            <div className="fs-5 text-dark fw-bold">Filter Options</div>
                          </div>
                          {/*end::Header*/}
                          {/*begin::Separator*/}
                          <div className="separator border-gray-200" />
                          {/*end::Separator*/}
                          {/*begin::Content*/}
                          <div className="px-7 py-5" data-kt-user-table-filter="form">
                            {/*begin::Input group*/}
                            <div className="mb-10">
                              <label className="form-label fs-6 fw-semibold">Role:</label>
                              <select className="form-select form-select-solid fw-bold" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-user-table-filter="role" data-hide-search="true">
                                <option />
                                <option value="Administrator">Administrator</option>
                                <option value="Analyst">Analyst</option>
                                <option value="Developer">Developer</option>
                                <option value="Support">Support</option>
                                <option value="Trial">Trial</option>
                              </select>
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="mb-10">
                              <label className="form-label fs-6 fw-semibold">Two Step Verification:</label>
                              <select className="form-select form-select-solid fw-bold" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-user-table-filter="two-step" data-hide-search="true">
                                <option />
                                <option value="Enabled">Enabled</option>
                              </select>
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Actions*/}
                            <div className="d-flex justify-content-end">
                              <button type="reset" className="btn btn-light btn-active-light-primary fw-semibold me-2 px-6" data-kt-menu-dismiss="true" data-kt-user-table-filter="reset">Reset</button>
                              <button type="submit" className="btn btn-primary fw-semibold px-6" data-kt-menu-dismiss="true" data-kt-user-table-filter="filter">Apply</button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Content*/}
                        </div>
                        {/*end::Menu 1*/}
                        {/*end::Filter*/}
                        {/*begin::Export*/}
                        <button type="button" className="btn btn-light-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_export_users">
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr078.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.3" x="12.75" y="4.25" width={12} height={2} rx={1} transform="rotate(90 12.75 4.25)" fill="currentColor" />
                              <path d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z" fill="currentColor" />
                              <path opacity="0.3" d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}Export</button>
                        {/*end::Export*/}
                        {/*begin::Add user*/}
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_user">
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.5" x="11.364" y="20.364" width={16} height={2} rx={1} transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                              <rect x="4.36396" y="11.364" width={16} height={2} rx={1} fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}Add User</button>
                        {/*end::Add user*/}
                      </div>
                      {/*end::Toolbar*/}
                      {/*begin::Group actions*/}
                      <div className="d-flex justify-content-end align-items-center d-none" data-kt-user-table-toolbar="selected">
                        <div className="fw-bold me-5">
                          <span className="me-2" data-kt-user-table-select="selected_count" />Selected</div>
                        <button type="button" className="btn btn-danger" data-kt-user-table-select="delete_selected">Delete Selected</button>
                      </div>
                      {/*end::Group actions*/}
                      {/*begin::Modal - Adjust Balance*/}
                      <div className="modal fade" id="kt_modal_export_users" tabIndex={-1} aria-hidden="true">
                        {/*begin::Modal dialog*/}
                        <div className="modal-dialog modal-dialog-centered mw-650px">
                          {/*begin::Modal content*/}
                          <div className="modal-content">
                            {/*begin::Modal header*/}
                            <div className="modal-header">
                              {/*begin::Modal title*/}
                              <h2 className="fw-bold">Export Users</h2>
                              {/*end::Modal title*/}
                              {/*begin::Close*/}
                              <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">
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
                          </div>
                          {/*end::Modal content*/}
                        </div>
                        {/*end::Modal dialog*/}
                      </div>
                      {/*end::Modal - New Card*/}
                      {/*begin::Modal - Add task*/}
                      <div className="modal fade" id="kt_modal_add_user" tabIndex={-1} aria-hidden="true">
                        {/*begin::Modal dialog*/}
                        <div className="modal-dialog modal-dialog-centered mw-650px">
                          {/*begin::Modal content*/}
                          <div className="modal-content">
                            {/*begin::Modal header*/}
                            <div className="modal-header" id="kt_modal_add_user_header">
                              {/*begin::Modal title*/}
                              <h2 className="fw-bold">Add User</h2>
                              {/*end::Modal title*/}
                              {/*begin::Close*/}
                              <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">
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
                              <form id="kt_modal_add_user_form" className="form" onSubmit={onSubmitHandle}>
                                {/*begin::Scroll*/}
                                <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_user_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_user_header" data-kt-scroll-wrappers="#kt_modal_add_user_scroll" data-kt-scroll-offset="300px">
                                  {/*begin::Input group*/}
                                  <div className="fv-row mb-7">
                                    {/*begin::Label*/}
                                    <label className="d-block fw-semibold fs-6 mb-5">Avatar</label>
                                    {/*end::Label*/}
                                    {/*begin::Image placeholder*/}
                                    <style dangerouslySetInnerHTML={{__html: ".image-input-placeholder { background-image: url('assets/media/svg/files/blank-image.svg'); } [data-bs-theme=\"dark\"] .image-input-placeholder { background-image: url('assets/media/svg/files/blank-image-dark.svg'); }" }} />
                                    {/*end::Image placeholder*/}
                                    {/*begin::Image input*/}
                                    <div className="image-input image-input-outline image-input-placeholder" data-kt-image-input="true">
                                      {/*begin::Preview existing avatar*/}
                                      <div className="image-input-wrapper w-125px h-125px" style={{ backgroundImage: `url(${"process.env.PUBLIC_URL/dist/assets/media/avatars/300-6.jpg"})`}} />
                                      {/*end::Preview existing avatar*/}
                                      {/*begin::Label*/}
                                      <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                        <i className="bi bi-pencil-fill fs-7" />
                                        {/*begin::Inputs*/}
                                        <input type="file"  accept=".png, .jpg, .jpeg" value={data.file} name="file" onChange={onHandlefile}/>
                                        <input type="hidden" name="avatar_remove" />
                                        {/*end::Inputs*/}
                                      </label>
                                      {/*end::Label*/}
                                      {/*begin::Cancel*/}
                                      <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                        <i className="bi bi-x fs-2" />
                                      </span>
                                      {/*end::Cancel*/}
                                      {/*begin::Remove*/}
                                      <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                        <i className="bi bi-x fs-2"  />
                                      </span>
                                      {/*end::Remove*/}
                                    </div>
                                    {/*end::Image input*/}
                                    {/*begin::Hint*/}
                                    <div className="form-text">Allowed file types: png, jpg, jpeg.</div>
                                    {/*end::Hint*/}
                                  </div>
                                  {/*end::Input group*/}
                                  {/*begin::Input group*/}
                                  <div className="fv-row mb-7">
                                    {/*begin::Label*/}
                                    <label className="required fw-semibold fs-6 mb-2">Full Name</label>
                                    {/*end::Label*/}
                                    {/*begin::Input*/}
                                    <input type="text"  className="form-control form-control-solid mb-3 mb-lg-0" placeholder="Full name" defaultValue="Emma Smith" name='nom' onChange={onChangehandle}/>
                                    {/*end::Input*/}
                                  </div>
                                  {/*end::Input group*/}
                                  {/*begin::Input group*/}
                                  <div className="fv-row mb-7">
                                    {/*begin::Label*/}
                                    <label className="required fw-semibold fs-6 mb-2">Email</label>
                                    {/*end::Label*/}
                                    {/*begin::Input*/}
                                    <input type="email" className="form-control form-control-solid mb-3 mb-lg-0" placeholder="example@domain.com" defaultValue="smith@kpmg.com" name='email' onChange={onChangehandle}/>
                                    {/*end::Input*/}
                                  </div>
                                  {/*end::Input group*/}
                                </div>
                                {/*end::Scroll*/}
                                {/*begin::Actions*/}
                                <div className="text-center pt-15">
                                  <button type="reset" className="btn btn-light me-3" data-kt-users-modal-action="cancel">Discard</button>
                                  <button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
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
                      {/*end::Modal - Add task*/}
                    </div>
                    {/*end::Card toolbar*/}
                  </div>
                  {/*end::Card header*/}
                  {/*begin::Card body*/}
                  <div className="card-body py-4">
                    {/*begin::Table*/}
                    <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                      {/*begin::Table head*/}
                      <thead>
                        {/*begin::Table row*/}
                        <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                          <th className="w-10px pe-2">
                            <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                              <input className="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_table_users .form-check-input" defaultValue={1} />
                            </div>
                          </th>
                          <th className="min-w-125px">User</th>
                          <th className="min-w-125px">Role</th>
                          <th className="min-w-125px">Last login</th>
                          <th className="min-w-125px">Two-step</th>
                          <th className="min-w-125px">Joined Date</th>
                          <th className="text-end min-w-100px">Actions</th>
                        </tr>
                        {/*end::Table row*/}
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody className="text-gray-600 fw-semibold">
                      {employe.filter((item)=>{
                  if (searchTerm == "") {
                    return item
                  } else if (item.nom.toLowerCase().includes(searchTerm.toLowerCase()))  {
                    return item
                  } else if (item.prenom.toLowerCase().includes(searchTerm.toLowerCase()))  {
                    return item
                  } else if (item.adresse.toLowerCase().includes(searchTerm.toLowerCase()))  {
                    return item
                  } else if (item.email.includes(searchTerm))  {
                    return item
                  } else if (item.tel.toString().includes(searchTerm.toString()))  {
                    return item
                  } else if (item.situ_fam.toLowerCase().includes(searchTerm.toLowerCase()))  {
                    return item
                  }
                }).map((item,index)=>{
                    return(
                        <tr>
                          {/*begin::Checkbox*/}
                          <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                            {index}
                            </div>
                          </td>
                          {/*end::Checkbox*/}
                          {/*begin::User=*/}
                          <td className="d-flex align-items-center">
                            {/*begin::User details*/}
                            <div className="d-flex flex-column">
                              <a href="/profile" className="text-gray-800 text-hover-primary mb-1">{item.nom} {item.prenom}</a>
                              <span>{item.email}</span>
                            </div>
                            {/*begin::User details*/}
                          </td>
                          {/*end::User=*/}
                          {/*begin::Role=*/}
                          <td>{item.situ_fam}</td>
                          {/*end::Role=*/}
                          {/*begin::Last login=*/}
                          <td>
                            <div className="badge badge-light fw-bold">Yesterday</div>
                          </td>
                          {/*end::Last login=*/}
                          {/*begin::Two step=*/}
                          <td />
                          {/*end::Two step=*/}
                          {/*begin::Joined*/}
                          <td>19 Aug 2023, 6:43 am</td>
                          {/*begin::Joined*/}
                          {/*begin::Action=*/}
                          <td className="text-end">
              <div className="d-flex justify-content-end flex-shrink-0">
                <a  className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1" >
                  {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                  <span className="svg-icon svg-icon-3">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                      <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </a>
                <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                  {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                  <span className="svg-icon svg-icon-3">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                      <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </a>
                <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm" onClick={()=>onDelete(item._id)}>
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
              </div>
            </td>
                          {/*end::Action=*/}
                        </tr>
                                          )})}
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

export default Clients