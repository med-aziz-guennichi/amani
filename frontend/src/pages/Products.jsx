import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Rest from "../components/Rest";
import Footer from "../components/Footer";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useState, useEffect } from "react";
import EmployeService from "../service/EmployeService";
import axios from "axios";
import DeleteProduct from "../components/DeleteProduct";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
const Products = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState();
  const [image, setImage] = useState(null);
  const [products, setProducts] = useState([]);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const newForm = new FormData();

    newForm.append("title", title);
    newForm.append("type", type);
    newForm.append("description", description);
    newForm.append("prix", prix);
    newForm.append("file", image);

    await axios
      .post("http://localhost:8080/product/create_product", newForm, config)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllProducts = async () => {
    const products = await axios.get(
      "http://localhost:8080/product/get_products"
    );
    console.log(products);
    setProducts(products.data);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [employe, setUsers] = useState([]);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const GetAll = () => {
    EmployeService.getAll()
      .then((res) => {
        console.log(res);
        setUsers(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetAll();
    getAllProducts();
  }, []);
  const onDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        EmployeService.remove(id).then((res) => {
          GetAll();
        });
        Swal.fire("Deleted!", "Your employee has been deleted.", "success");
      }
    });
  };
  const [data, setData] = useState({});
  const [files, setfiles] = useState([]);

  const onChangehandle = (e) => {
    setData({
      // ... bich nbadlou e data
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const id = products.map((index) => {
    return index._id;
  });

  // const onSubmitHandle = (e) => {
  //   e.preventDefault();
  //   // setFormErrors(validate(data));
  //   // setIsSubmit(true);
  //   const formdata = new FormData();
  //   for (let i = 0; i < files.length; i++) {
  //     formdata.append("file", files[i]);
  //   }
  //   formdata.append("nom", data.nom);
  //   formdata.append("prenom", data.prenom);
  //   formdata.append("email", data.email);
  //   formdata.append("password", data.password);
  //   formdata.append("adresse", data.adresse);
  //   formdata.append("situ_fam", data.situ_fam);
  //   formdata.append("tel", data.tel);
  //   // if (Object.keys(formErrors).length === 0 && isSubmit) {
  //   Swal.fire({
  //     title: "Do you want to save the changes?",
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: "Save",
  //     denyButtonText: `Don't save`,
  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       EmployeService.create(formdata)
  //         .then((res) => {
  //           setData(res.data.data);
  //           console.log(res);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //       Swal.fire("Saved!", "", "success");
  //       window.location.reload(false);
  //     } else if (result.isDenied) {
  //       Swal.fire("Changes are not saved", "", "info");
  //     }
  //   });
  //   // }
  // };
  // const onHandlefile = (e) => {
  //   console.log(e);
  //   setfiles(e.target.files);
  // };

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
    <div
      id="kt_app_body"
      data-kt-app-layout="dark-sidebar"
      data-kt-app-header-fixed="true"
      data-kt-app-sidebar-enabled="true"
      data-kt-app-sidebar-fixed="true"
      data-kt-app-sidebar-hoverable="true"
      data-kt-app-sidebar-push-header="true"
      data-kt-app-sidebar-push-toolbar="true"
      data-kt-app-sidebar-push-footer="true"
      data-kt-app-toolbar-enabled="true"
      className="app-default"
    >
      {/*begin::App*/}
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        {/*begin::Page*/}
        <div
          className="app-page flex-column flex-column-fluid"
          id="kt_app_page"
        >
          <Header />
          {/*begin::Wrapper*/}
          <div
            className="app-wrapper flex-column flex-row-fluid"
            id="kt_app_wrapper"
          >
            <Sidebar />
            {/*begin::Main*/}
            <div
              className="app-main flex-column flex-row-fluid"
              id="kt_app_main"
            >
              {/*begin::Content wrapper*/}
              <div className="d-flex flex-column flex-column-fluid">
                {/*begin::Toolbar*/}
                <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                  {/*begin::Toolbar container*/}
                  <div
                    id="kt_app_toolbar_container"
                    className="app-container container-xxl d-flex flex-stack"
                  >
                    {/*begin::Page title*/}
                    <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                      {/*begin::Title*/}
                      <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                        Products
                      </h1>
                      {/*end::Title*/}
                      {/*begin::Breadcrumb*/}
                      <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                        {/*begin::Item*/}
                        <li className="breadcrumb-item text-muted">
                          <a
                            href="../../demo1/dist/index.html"
                            className="text-muted text-hover-primary"
                          >
                            Home
                          </a>
                        </li>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <li className="breadcrumb-item">
                          <span className="bullet bg-gray-400 w-5px h-2px" />
                        </li>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <li className="breadcrumb-item text-muted">
                          Our Products
                        </li>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <li className="breadcrumb-item">
                          <span className="bullet bg-gray-400 w-5px h-2px" />
                        </li>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <li className="breadcrumb-item text-muted">Products</li>
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

                        {/*end::Menu toggle*/}
                        {/*begin::Menu 1*/}
                        <div
                          className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                          data-kt-menu="true"
                          id="kt_menu_63d0d9df336a7"
                        >
                          {/*begin::Header*/}
                          <div className="px-7 py-5">
                            <div className="fs-5 text-dark fw-bold">
                              Options
                            </div>
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
                              <label className="form-label fw-semibold">
                                Status:
                              </label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <div>
                                <select
                                  className="form-select form-select-solid"
                                  data-kt-select2="true"
                                  data-placeholder="Select option"
                                  data-dropdown-parent="#kt_menu_63d0d9df336a7"
                                  data-allow-clear="true"
                                >
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
                              <label className="form-label fw-semibold">
                                Member Type:
                              </label>
                              {/*end::Label*/}
                              {/*begin::Options*/}
                              <div className="d-flex">
                                {/*begin::Options*/}
                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue={1}
                                  />
                                  <span className="form-check-label">
                                    Author
                                  </span>
                                </label>
                                {/*end::Options*/}
                                {/*begin::Options*/}
                                <label className="form-check form-check-sm form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue={2}
                                    defaultChecked="checked"
                                  />
                                  <span className="form-check-label">
                                    Customer
                                  </span>
                                </label>
                                {/*end::Options*/}
                              </div>
                              {/*end::Options*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="mb-10">
                              {/*begin::Label*/}
                              <label className="form-label fw-semibold">
                                Notifications:
                              </label>
                              {/*end::Label*/}
                              {/*begin::Switch*/}
                              <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                  name="notifications"
                                  defaultChecked="checked"
                                />
                                <label className="form-check-label">
                                  Enabled
                                </label>
                              </div>
                              {/*end::Switch*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Actions*/}
                            <div className="d-flex justify-content-end">
                              <button
                                type="reset"
                                className="btn btn-sm btn-light btn-active-light-primary me-2"
                                data-kt-menu-dismiss="true"
                              >
                                Reset
                              </button>
                              <button
                                type="submit"
                                className="btn btn-sm btn-primary"
                                data-kt-menu-dismiss="true"
                              >
                                Apply
                              </button>
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

                      {/*end::Primary button*/}
                    </div>
                    {/*end::Actions*/}
                  </div>
                  {/*end::Toolbar container*/}
                </div>
                {/*end::Toolbar*/}
                {/*begin::Content*/}
                <div
                  id="kt_app_content"
                  className="app-content flex-column-fluid"
                >
                  {/*begin::Content container*/}
                  <div
                    id="kt_app_content_container"
                    className="app-container container-xxl"
                  >
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
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  opacity="0.5"
                                  x="17.0365"
                                  y="15.1223"
                                  width="8.15546"
                                  height={2}
                                  rx={1}
                                  transform="rotate(45 17.0365 15.1223)"
                                  fill="currentColor"
                                />
                                <path
                                  d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                            <input
                              type="text"
                              data-kt-user-table-filter="search"
                              className="form-control form-control-solid w-250px ps-14"
                              placeholder="Search Product"
                              onChange={(event) => {
                                setSearchTerm(event.target.value);
                              }}
                            />
                          </div>
                          {/*end::Search*/}
                        </div>
                        {/*begin::Card title*/}
                        {/*begin::Card toolbar*/}
                        <div className="card-toolbar">
                          {/*begin::Toolbar*/}
                          <div
                            className="d-flex justify-content-end"
                            data-kt-user-table-toolbar="base"
                          >
                            {/*begin::Filter*/}

                            <div
                              className="menu menu-sub menu-sub-dropdown w-300px w-md-325px"
                              data-kt-menu="true"
                            >
                              {/*begin::Header*/}
                            </div>
                            {/*end::Menu 1*/}
                            {/*end::Filter*/}
                            {/*begin::Export*/}

                            {/*end::Export*/}
                            {/*begin::Add user*/}
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#kt_modal_add_user"
                            >
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.5"
                                    x="11.364"
                                    y="20.364"
                                    width={16}
                                    height={2}
                                    rx={1}
                                    transform="rotate(-90 11.364 20.364)"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="4.36396"
                                    y="11.364"
                                    width={16}
                                    height={2}
                                    rx={1}
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}Add Product
                            </button>
                            {/*end::Add user*/}
                          </div>
                          {/*end::Toolbar*/}
                          {/*begin::Group actions*/}
                          <div
                            className="d-flex justify-content-end align-items-center d-none"
                            data-kt-user-table-toolbar="selected"
                          >
                            <div className="fw-bold me-5">
                              <span
                                className="me-2"
                                data-kt-user-table-select="selected_count"
                              />
                              Selected
                            </div>
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-kt-user-table-select="delete_selected"
                            >
                              Delete Selected
                            </button>
                          </div>
                          {/*end::Group actions*/}
                          {/*begin::Modal - Adjust Balance*/}
                          <div
                            className="modal fade"
                            id="kt_modal_export_users"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
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
                                  <div
                                    className="btn btn-icon btn-sm btn-active-icon-primary"
                                    data-kt-users-modal-action="close"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                    <span className="svg-icon svg-icon-1">
                                      <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          opacity="0.5"
                                          x={6}
                                          y="17.3137"
                                          width={16}
                                          height={2}
                                          rx={1}
                                          transform="rotate(-45 6 17.3137)"
                                          fill="currentColor"
                                        />
                                        <rect
                                          x="7.41422"
                                          y={6}
                                          width={16}
                                          height={2}
                                          rx={1}
                                          transform="rotate(45 7.41422 6)"
                                          fill="currentColor"
                                        />
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
                          <div
                            className="modal fade"
                            id="kt_modal_add_user"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            {/*begin::Modal dialog*/}
                            <div className="modal-dialog modal-dialog-centered mw-650px">
                              {/*begin::Modal content*/}
                              <div className="modal-content">
                                {/*begin::Modal header*/}
                                <div
                                  className="modal-header"
                                  id="kt_modal_add_user_header"
                                >
                                  {/*begin::Modal title*/}
                                  <h2 className="fw-bold">Add Product</h2>
                                  {/*end::Modal title*/}
                                  {/*begin::Close*/}
                                  <div
                                    className="btn btn-icon btn-sm btn-active-icon-primary"
                                    data-kt-users-modal-action="close"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                    <span className="svg-icon svg-icon-1">
                                      <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          opacity="0.5"
                                          x={6}
                                          y="17.3137"
                                          width={16}
                                          height={2}
                                          rx={1}
                                          transform="rotate(-45 6 17.3137)"
                                          fill="currentColor"
                                        />
                                        <rect
                                          x="7.41422"
                                          y={6}
                                          width={16}
                                          height={2}
                                          rx={1}
                                          transform="rotate(45 7.41422 6)"
                                          fill="currentColor"
                                        />
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
                                  <form
                                    id="kt_modal_add_user_form"
                                    className="form"
                                  >
                                    {/*begin::Scroll*/}
                                    <div
                                      className="d-flex flex-column scroll-y me-n7 pe-7"
                                      id="kt_modal_add_user_scroll"
                                      data-kt-scroll="true"
                                      data-kt-scroll-activate="{default: false, lg: true}"
                                      data-kt-scroll-max-height="auto"
                                      data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                      data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
                                      data-kt-scroll-offset="300px"
                                    >
                                      {/*begin::Input group*/}
                                      <div className="fv-row mb-7">
                                        {/*begin::Label*/}
                                        <label className="d-block fw-semibold fs-6 mb-5">
                                          Image
                                        </label>
                                        {/*end::Label*/}
                                        {/*begin::Image placeholder*/}
                                        <style
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".image-input-placeholder { background-image: url('assets/media/svg/files/blank-image.svg'); } [data-bs-theme=\"dark\"] .image-input-placeholder { background-image: url('assets/media/svg/files/blank-image-dark.svg'); }",
                                          }}
                                        />
                                        {/*end::Image placeholder*/}
                                        {/*begin::Image input*/}
                                        <div
                                          className="image-input image-input-outline image-input-placeholder"
                                          data-kt-image-input="true"
                                        >
                                          {/*begin::Preview existing avatar*/}
                                          <div
                                            className="image-input-wrapper w-125px h-125px"
                                            style={{
                                              backgroundImage: `url(${"process.env.PUBLIC_URL/dist/assets/media/avatars/300-6.jpg"})`,
                                            }}
                                          />
                                          {/*end::Preview existing avatar*/}
                                          {/*begin::Label*/}
                                          <label
                                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                            data-kt-image-input-action="change"
                                            data-bs-toggle="tooltip"
                                            title="Change avatar"
                                          >
                                            <i className="bi bi-pencil-fill fs-7" />
                                            {/*begin::Inputs*/}
                                            <input
                                              type="file"
                                              accept=".png, .jpg, .jpeg"
                                              name="image"
                                              onChange={handleFileInputChange}
                                            />
                                            <input
                                              type="hidden"
                                              name="avatar_remove"
                                            />
                                          </label>
                                          {/*end::Label*/}
                                          {/*begin::Cancel*/}
                                          <span
                                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                            data-kt-image-input-action="cancel"
                                            data-bs-toggle="tooltip"
                                            title="Cancel avatar"
                                          >
                                            <i className="bi bi-x fs-2" />
                                          </span>
                                          {/*end::Cancel*/}
                                          {/*begin::Remove*/}
                                          <span
                                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                            data-kt-image-input-action="remove"
                                            data-bs-toggle="tooltip"
                                            title="Remove avatar"
                                          >
                                            <i className="bi bi-x fs-2" />
                                          </span>
                                          {/*end::Remove*/}
                                        </div>
                                        {/*end::Image input*/}
                                        {/*begin::Hint*/}
                                        <div className="form-text">
                                          Allowed file types: png, jpg, jpeg.
                                        </div>
                                        {/*end::Hint*/}
                                      </div>
                                      {/*end::Input group*/}
                                      {/*begin::Input group*/}
                                      <div className="fv-row mb-7">
                                        {/*begin::Label*/}
                                        <label className="required fw-semibold fs-6 mb-2">
                                          Title
                                        </label>
                                        {/*end::Label*/}
                                        {/*begin::Input*/}
                                        <input
                                          type="text"
                                          className="form-control form-control-solid mb-3 mb-lg-0"
                                          placeholder="Title"
                                          onChange={(e) =>
                                            setTitle(e.target.value)
                                          }
                                        />
                                        {/*end::Input*/}
                                      </div>
                                      {/*end::Input group*/}
                                      {/*begin::Input group*/}
                                      <div className="fv-row mb-7">
                                        {/*begin::Label*/}
                                        <label className="required fw-semibold fs-6 mb-2">
                                          Type
                                        </label>
                                        {/*end::Label*/}
                                        {/*begin::Input*/}
                                        <input
                                          type="text"
                                          className="form-control form-control-solid mb-3 mb-lg-0"
                                          placeholder="Type"
                                          onChange={(e) =>
                                            setType(e.target.value)
                                          }
                                        />
                                        {/*end::Input*/}
                                      </div>
                                      <div className="fv-row mb-7">
                                        {/*begin::Label*/}
                                        <label className="required fw-semibold fs-6 mb-2">
                                          Description
                                        </label>
                                        {/*end::Label*/}
                                        {/*begin::Input*/}
                                        <input
                                          type="text"
                                          className="form-control form-control-solid mb-3 mb-lg-0"
                                          placeholder="Description"
                                          onChange={(e) =>
                                            setDescription(e.target.value)
                                          }
                                        />
                                        {/*end::Input*/}
                                      </div>
                                      <div className="fv-row mb-7">
                                        {/*begin::Label*/}
                                        <label className="required fw-semibold fs-6 mb-2">
                                          Price
                                        </label>
                                        {/*end::Label*/}
                                        {/*begin::Input*/}
                                        <input
                                          type="number"
                                          className="form-control form-control-solid mb-3 mb-lg-0"
                                          placeholder="Prix"
                                          onChange={(e) =>
                                            setPrix(e.target.value)
                                          }
                                        />
                                        {/*end::Input*/}
                                      </div>
                                      {/*end::Input group*/}
                                    </div>
                                    {/*end::Scroll*/}
                                    {/*begin::Actions*/}
                                    <div className="text-center pt-15">
                                      <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        data-kt-users-modal-action="cancel"
                                      >
                                        Discard
                                      </button>
                                      <button
                                        onClick={onSubmitHandler}
                                        className="btn btn-primary"
                                        data-kt-users-modal-action="submit"
                                      >
                                        <span className="indicator-label">
                                          Submit
                                        </span>
                                        <span className="indicator-progress">
                                          Please wait...
                                          <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                        </span>
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
                        <table
                          className="table align-middle table-row-dashed fs-6 gy-5"
                          id="kt_table_users"
                        >
                          {/*begin::Table head*/}
                          <thead>
                            {/*begin::Table row*/}
                            <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                              <th className="w-10px pe-2">
                                <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    data-kt-check="true"
                                    data-kt-check-target="#kt_table_users .form-check-input"
                                    defaultValue={1}
                                  />
                                </div>
                              </th>
                              <th className="min-w-125px">title</th>
                              <th className="min-w-125px">description</th>
                              <th className="min-w-125px">type</th>
                              <th className="min-w-125px">prix</th>
                            </tr>
                            {/*end::Table row*/}
                          </thead>
                          {/*end::Table head*/}
                          {/*begin::Table body*/}
                          <tbody className="text-gray-600 fw-semibold">
                            {products
                              .filter((item) => {
                                if (searchTerm == "") {
                                  return item;
                                } else if (
                                  item.nom
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                                ) {
                                  return item;
                                } else if (
                                  item.prenom
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                                ) {
                                  return item;
                                } else if (
                                  item.adresse
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                                ) {
                                  return item;
                                } else if (item.email.includes(searchTerm)) {
                                  return item;
                                } else if (
                                  item.tel
                                    .toString()
                                    .includes(searchTerm.toString())
                                ) {
                                  return item;
                                } else if (
                                  item.situ_fam
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                                ) {
                                  return item;
                                }
                              })
                              .map((item, index) => {
                                return (
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
                                      {/*begin:: Avatar */}
                                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                        <div className="symbol-label">
                                          {item.image && (
                                            <img
                                              class="direct-chat-img"
                                              src={`http://localhost:8080/${item.image}`}
                                              alt=""
                                              className="w-100"
                                            />
                                          )}
                                        </div>
                                      </div>
                                      {/*end::Avatar*/}
                                      {/*begin::User details*/}
                                      <div className="d-flex flex-column">
                                        <Link
                                          to={`/product/${item._id}`}
                                          className="text-gray-800 text-hover-primary mb-1"
                                        >
                                          {item.title}
                                        </Link>
                                      </div>
                                      {/*begin::User details*/}
                                    </td>
                                    {/*end::User=*/}
                                    {/*begin::Role=*/}
                                    <td>{item.description}</td>
                                    {/*end::Role=*/}
                                    {/*begin::Last login=*/}
                                    <td>
                                      <div className="badge badge-light fw-bold">
                                        <span>{item.type}</span>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="badge badge-light fw-bold">
                                        <span>{item.prix}</span>
                                      </div>
                                    </td>
                                    {/*end::Last login=*/}
                                    {/*begin::Two step=*/}
                                    <td />
                                    {/*end::Two step=*/}
                                    {/*begin::Joined*/}
                                    <td>{item.createdAt}</td>
                                    {/*begin::Joined*/}
                                    {/*begin::Action=*/}
                                    <td className="text-end">
                                      <div className="d-flex justify-content-end flex-shrink-0">
                                        <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                          {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                          <span className="svg-icon svg-icon-3">
                                            <svg
                                              width={24}
                                              height={24}
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                                fill="currentColor"
                                              />
                                              <path
                                                opacity="0.3"
                                                d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                                fill="currentColor"
                                              />
                                            </svg>
                                          </span>
                                          {/*end::Svg Icon*/}
                                        </a>
                                        <a
                                          href="#"
                                          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                                        >
                                          {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                          <span className="svg-icon svg-icon-3">
                                            <svg
                                              width={24}
                                              height={24}
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                opacity="0.3"
                                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                                fill="currentColor"
                                              />
                                              <path
                                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                                fill="currentColor"
                                              />
                                            </svg>
                                          </span>
                                          {/*end::Svg Icon*/}
                                        </a>
                                        <a
                                          href="#"
                                          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                                          onClick={() => onDelete(item._id)}
                                        >
                                          {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                          <DeleteProduct
                                            item={item}
                                            key={item._id}
                                          />
                                          {/*end::Svg Icon*/}
                                        </a>
                                      </div>
                                    </td>
                                    {/*end::Action=*/}
                                  </tr>
                                );
                              })}
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
              <Footer />
            </div>
            {/*end:::Main*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Page*/}
      </div>
      {/*end::App*/}
      <Rest />
      <Helmet>
        <script
          src={
            process.env.PUBLIC_URL +
            "/dist/assets/plugins/custom/datatables/datatables.bundle.js"
          }
        ></script>
        <script
          src={
            process.env.PUBLIC_URL +
            "/dist/assets/js/custom/pages/user-profile/general.js"
          }
        ></script>
        <script
          src={process.env.PUBLIC_URL + "/dist/assets/js/widgets.bundle.js"}
        ></script>
        <script
          src={process.env.PUBLIC_URL + "/dist/assets/js/custom/widgets.js"}
        ></script>
        <script
          src={
            process.env.PUBLIC_URL + "/dist/assets/js/custom/apps/chat/chat.js"
          }
        ></script>
        <script
          src={
            process.env.PUBLIC_URL +
            "/dist/assets/js/custom/utilities/modals/upgrade-plan.js"
          }
        ></script>
        <script
          src={
            process.env.PUBLIC_URL +
            "/dist/assets/js/custom/utilities/modals/create-app.js"
          }
        ></script>
        <script
          src={
            process.env.PUBLIC_URL +
            "/dist/assets/js/custom/utilities/modals/offer-a-deal/type.js"
          }
        ></script>
        <script
          src={
            process.env.PUBLIC_URL +
            "/dist/assets/js/custom/utilities/modals/offer-a-deal/details.js"
          }
        ></script>
        <script
          src={
            process.env.PUBLIC_URL +
            "/dist/assets/js/custom/utilities/modals/offer-a-deal/finance.js"
          }
        ></script>
        <script
          src={
            process.env.PUBLIC_URL +
            "/dist/assets/js/custom/utilities/modals/offer-a-deal/complete.js"
          }
        ></script>
        <script
          src={
            process.env.PUBLIC_URL +
            "/dist/assets/js/custom/utilities/modals/offer-a-deal/main.js"
          }
        ></script>
        <script
          src={
            process.env.PUBLIC_URL +
            "/dist/assets/js/custom/utilities/modals/users-search.js"
          }
        ></script>
      </Helmet>
    </div>
  );
};

export default Products;
