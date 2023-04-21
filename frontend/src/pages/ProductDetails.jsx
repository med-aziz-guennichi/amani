import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import Rest from "../components/Rest";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);

  const params = useParams();

  const { id } = params;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:8080/product/one_product/${id}`
      );
      setProduct(result.data);
      console.log(result.data);
    };
    fetchData();
  }, [id]);

  const [title, setTitle] = useState(product?.title);
  const [type, setType] = useState(product?.type);
  const [prix, setPrix] = useState(product?.prix);
  const [description, setDescription] = useState(product?.description);
  const [image, setImage] = useState(product?.image);

  console.log(typeof product.prix);
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
      .post(`http://localhost:8080/product/update_prod/${id}`, newForm, config)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                        Product Settings
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
                        <li className="breadcrumb-item text-muted">Product</li>
                        {/*end::Item*/}
                      </ul>
                      {/*end::Breadcrumb*/}
                    </div>
                    {/*end::Page title*/}
                    {/*begin::Actions*/}

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
                    {/*begin::Navbar*/}
                    <div className="card mb-5 mb-xl-10">
                      <div className="card-body pt-9 pb-0">
                        {/*begin::Details*/}
                        <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
                          {/*begin: Pic*/}
                          <div className="me-7 mb-4">
                            <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                              <img
                                src={`http://localhost:8080/${product.image}`}
                                alt="image"
                              />
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
                                  <a
                                    href="#"
                                    className="text-gray-900 text-hover-primary fs-2 fw-bold me-1"
                                  >
                                    {product.title}
                                  </a>
                                </div>
                                {/*end::Name*/}
                                {/*begin::Info*/}
                                <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                  <a
                                    href="#"
                                    className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                    <span className="svg-icon svg-icon-4 me-1">
                                      <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z"
                                          fill="currentColor"
                                        />
                                        <path
                                          d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z"
                                          fill="currentColor"
                                        />
                                        <rect
                                          x={7}
                                          y={6}
                                          width={4}
                                          height={4}
                                          rx={2}
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                    {product.type}
                                  </a>
                                  <a
                                    href="#"
                                    className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                    <span className="svg-icon svg-icon-4 me-1">
                                      <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                                          fill="currentColor"
                                        />
                                        <path
                                          d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                    {product.description}
                                  </a>
                                  <a
                                    href="#"
                                    className="d-flex align-items-center text-gray-400 text-hover-primary mb-2"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotune/communication/com011.svg*/}
                                    <span className="svg-icon svg-icon-4 me-1">
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
                                    {/* {admin?.user?.email} */}
                                  </a>
                                </div>
                                {/*end::Info*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Actions*/}

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

                                  {/*end::Stat*/}
                                  {/*begin::Stat*/}

                                  {/*end::Stat*/}
                                  {/*begin::Stat*/}

                                  {/*end::Stat*/}
                                </div>
                                {/*end::Stats*/}
                              </div>
                              {/*end::Wrapper*/}
                              {/*begin::Progress*/}

                              {/*end::Progress*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::Info*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Navs*/}

                        {/*begin::Navs*/}
                      </div>
                    </div>
                    {/*end::Navbar*/}
                    {/*begin::Basic info*/}
                    <div className="card mb-5 mb-xl-10">
                      {/*begin::Card header*/}
                      <div
                        className="card-header border-0 cursor-pointer"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#kt_account_profile_details"
                        aria-expanded="true"
                        aria-controls="kt_account_profile_details"
                      >
                        {/*begin::Card title*/}
                        <div className="card-title m-0">
                          <h3 className="fw-bold m-0">Product Details</h3>
                        </div>
                        {/*end::Card title*/}
                      </div>
                      {/*begin::Card header*/}
                      {/*begin::Content*/}
                      <div
                        id="kt_account_settings_profile_details"
                        className="collapse show"
                      >
                        {/*begin::Form*/}
                        <form
                          id="kt_account_profile_details_form"
                          className="form"
                        >
                          {/*begin::Card body*/}
                          <div className="card-body border-top p-9">
                            {/*begin::Input group*/}
                            <div className="row mb-6">
                              {/*begin::Label*/}
                              <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                Avatar
                              </label>
                              {/*end::Label*/}
                              {/*begin::Col*/}
                              <div className="col-lg-8">
                                {/*begin::Image input*/}
                                <div
                                  className="image-input image-input-outline"
                                  data-kt-image-input="true"
                                  style={{
                                    backgroundImage:
                                      'url("assets/media/svg/avatars/blank.svg")',
                                  }}
                                >
                                  {/*begin::Preview existing avatar*/}
                                  <div
                                    className="image-input-wrapper w-125px h-125px"
                                    style={{
                                      backgroundImage:
                                        "url(assets/media/avatars/300-1.jpg)",
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
                                      name="avatar"
                                      accept=".png, .jpg, .jpeg"
                                      defaultValue={product.image}
                                      onChange={handleFileInputChange}
                                    />
                                    <input type="hidden" name="avatar_remove" />
                                    {/*end::Inputs*/}
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
                              {/*end::Col*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="row mb-6">
                              {/*begin::Label*/}
                              <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                                Title
                              </label>
                              {/*end::Label*/}
                              {/*begin::Col*/}
                              <div className="col-lg-8">
                                {/*begin::Row*/}
                                <div className="row">
                                  {/*begin::Col*/}
                                  <div className="col-lg-6 fv-row">
                                    <input
                                      type="text"
                                      name="fname"
                                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                      placeholder="First name"
                                      defaultValue={product.title}
                                      onChange={(e) => setTitle(e.target.value)}
                                    />
                                  </div>
                                  {/*end::Col*/}
                                  {/*begin::Col*/}

                                  {/*end::Col*/}
                                </div>
                                {/*end::Row*/}
                              </div>
                              {/*end::Col*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}

                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="row mb-6">
                              {/*begin::Label*/}
                              <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                <span className="required">Type</span>
                                <i
                                  className="fas fa-exclamation-circle ms-1 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Phone number must be active"
                                />
                              </label>
                              {/*end::Label*/}
                              {/*begin::Col*/}
                              <div className="col-lg-8 fv-row">
                                <input
                                  type="email"
                                  name="phone"
                                  className="form-control form-control-lg form-control-solid"
                                  placeholder="Phone number"
                                  defaultValue={product.type}
                                  onChange={(e) => setType(e.target.value)}
                                />
                              </div>
                              {/*end::Col*/}
                            </div>
                            <div className="row mb-6">
                              {/*begin::Label*/}
                              <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                <span className="required">Prix</span>
                                <i
                                  className="fas fa-exclamation-circle ms-1 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Phone number must be active"
                                />
                              </label>
                              {/*end::Label*/}
                              {/*begin::Col*/}
                              <div className="col-lg-8 fv-row">
                                <input
                                  type="number"
                                  name="prix"
                                  className="form-control form-control-lg form-control-solid"
                                  placeholder="Price"
                                  defaultValue={product.prix}
                                  onChange={(e) => setPrix(e.target.value)}
                                />
                              </div>
                              {/*end::Col*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="row mb-6">
                              {/*begin::Label*/}
                              <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                Description
                              </label>
                              {/*end::Label*/}
                              {/*begin::Col*/}
                              <div className="col-lg-8 fv-row">
                                <input
                                  type="text"
                                  name="website"
                                  className="form-control form-control-lg form-control-solid"
                                  placeholder="Company website"
                                  defaultValue={product.description}
                                  onChange={(e) =>
                                    setDescription(e.target.value)
                                  }
                                />
                              </div>
                              {/*end::Col*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}

                            {/*end::Input group*/}
                            {/*begin::Input group*/}

                            {/*end::Input group*/}
                            {/*begin::Input group*/}

                            {/*end::Input group*/}
                          </div>
                          {/*end::Card body*/}
                          {/*begin::Actions*/}
                          <div className="card-footer d-flex justify-content-end py-6 px-9">
                            <button
                              type="reset"
                              className="btn btn-light btn-active-light-primary me-2"
                            >
                              Discard
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              id="kt_account_profile_details_submit"
                              onClick={onSubmitHandler}
                            >
                              Save Changes
                            </button>
                          </div>
                          {/*end::Actions*/}
                        </form>
                        {/*end::Form*/}
                      </div>
                      {/*end::Content*/}
                    </div>
                    {/*end::Basic info*/}
                    {/*begin::Sign-in Method*/}
                    <div className="card mb-5 mb-xl-10">
                      {/*begin::Card header*/}

                      {/*end::Footer*/}
                    </div>
                    {/*end:::Main*/}
                  </div>
                  {/*end::Wrapper*/}
                  <Footer />
                </div>
                {/*end::Page*/}
              </div>
              {/*end::App*/}
              <Rest />
              <Helmet>
                <script
                  src={
                    process.env.PUBLIC_URL +
                    "/dist/assets/js/custom/account/settings/signin-methods.js"
                  }
                ></script>
                <script
                  src={
                    process.env.PUBLIC_URL +
                    "/dist/assets/js/custom/account/settings/profile-details.js"
                  }
                ></script>
                <script
                  src={
                    process.env.PUBLIC_URL +
                    "/dist/assets/js/custom/account/settings/deactivate-account.js"
                  }
                ></script>
                <script
                  src={
                    process.env.PUBLIC_URL +
                    "/dist/assets/js/custom/pages/user-profile/general.js"
                  }
                ></script>
                <script
                  src={
                    process.env.PUBLIC_URL + "/dist/assets/js/widgets.bundle.js"
                  }
                ></script>
                <script
                  src={
                    process.env.PUBLIC_URL + "/dist/assets/js/custom/widgets.js"
                  }
                ></script>
                <script
                  src={
                    process.env.PUBLIC_URL +
                    "/dist/assets/js/custom/apps/chat/chat.js"
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
                    "/dist/assets/js/custom/utilities/modals/two-factor-authentication.js"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
