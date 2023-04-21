import React from 'react'
import { Helmet } from 'react-helmet'
const Login = () => {
  return (
    <div id="kt_body" class="app-blank">
      {/*end::Theme mode setup on page load*/}
      {/*begin::Root*/}
      <div className="d-flex flex-column flex-root" id="kt_app_root">
        {/*begin::Authentication - Sign-in */}
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          {/*begin::Body*/}
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            {/*begin::Form*/}
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              {/*begin::Wrapper*/}
              <div className="w-lg-500px p-10">
                {/*begin::Form*/}
                <form
                  className="form w-100"
                  noValidate="novalidate"
                  id="kt_sign_in_form"
                  data-kt-redirect-url="/"
                  action="#"
                >
                  {/*begin::Heading*/}
                  <a className="mb-12" href="/FrontEnd/react/AxiaComm/"></a>

                  <img
                    alt="Logo"
                    src={
                      process.env.PUBLIC_URL +
                      "dist/assets/media/logos/logo axia.png"
                    }
                    className="h-65px"
                  />

                  <div className="text-center mb-11">
                    {/*begin::Title*/}
                    <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                    {/*end::Title*/}
                    {/*begin::Subtitle*/}
                    <div className="text-gray-500 fw-semibold fs-6">
                      To AXIA-COMM
                    </div>
                    {/*end::Subtitle=*/}
                  </div>
                  <div class="text-info">
                    Use account <strong>admin@demo.com</strong> and password{" "}
                    <strong>demo</strong> to continue.
                  </div>
                  {/*begin::Heading*/}
                  {/*begin::Login options*/}
                  <div className="row g-3 mb-9">
                    {/*begin::Col*/}
                    <div className="col-md-6"></div>
                    {/*end::Col*/}
                    {/*begin::Col*/}
                    <div className="col-md-6"></div>
                    {/*end::Col*/}
                  </div>
                  {/*end::Login options*/}
                  {/*begin::Separator*/}

                  {/*end::Separator*/}
                  {/*begin::Input group=*/}
                  <label class="form-label fs-6 fw-bolder text-dark">
                    Email
                  </label>
                  <div className="fv-row mb-8">
                    {/*begin::Email*/}
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      autoComplete="off"
                      className="form-control bg-transparent"
                    />
                    {/*end::Email*/}
                  </div>
                  {/*end::Input group=*/}
                  <label class="form-label fw-bolder text-dark fs-6 mb-0" >
                    Password
                  </label>
                  <div className="fv-row mb-3">
                    {/*begin::Password*/}
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      autoComplete="off"
                      className="form-control bg-transparent"
                    />
                    {/*end::Password*/}
                  </div>
                  {/*end::Input group=*/}
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                    <div />
                    {/*begin::Link*/}
                    <a
                      href="../../demo1/dist/authentication/layouts/corporate/reset-password.html"
                      className="link-primary"
                    >
                      Forgot Password ?
                    </a>
                    {/*end::Link*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Submit button*/}
                  <div className="d-grid mb-10">
                    <button
                      type="submit"
                      id="kt_sign_in_submit"
                      className="btn btn-primary"
                    >
                      {/*begin::Indicator label*/}
                      <span className="indicator-label">Sign In</span>
                      {/*end::Indicator label*/}
                      {/*begin::Indicator progress*/}
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                      {/*end::Indicator progress*/}
                    </button>
                  </div>
                  {/*end::Submit button*/}
                  {/*begin::Sign up*/}
                  <div className="text-gray-500 text-center fw-semibold fs-6">
                    Not a Member yet?
                    <a
                      href="../../demo1/dist/authentication/layouts/corporate/sign-up.html"
                      className="link-primary"
                    >
                      Sign up
                    </a>
                  </div>
                  {/*end::Sign up*/}
                </form>
                {/*end::Form*/}
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::Form*/}
            {/*begin::Footer*/}

            {/*end::Footer*/}
          </div>
          {/*end::Body*/}
          <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style={{ backgroundImage: `url("process.env.PUBLIC_URL/dist/assets/media/misc/auth-bg.png"})`}}>
      {/*begin::Content*/}
      <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
        {/*begin::Image*/}
        <img className="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20" src={process.env.PUBLIC_URL+"/dist/assets/media/misc/01.png"} alt />
        {/*end::Image*/}
        {/*begin::Title*/}
        <h1 className="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7">WELCOME TO AXIACOMM</h1>
        {/*end::Title*/}
      </div>
      {/*end::Content*/}
    </div>
    {/*end::Aside*/}
        </div>
        {/*end::Authentication - Sign-in*/}
      </div>

      <Helmet>
        <script
          src={
            process.env.PUBLIC_URL +
            "/dist/assets/plugins/global/plugins.bundle.js"
          }
        ></script>
        <script
          src={process.env.PUBLIC_URL + "/dist/assets/js/scripts.bundle.js"}
        ></script>
        <script
          src={
            process.env.PUBLIC_URL +
            "/assets/plugins/custom/fullcalendar/fullcalendar.bundle.js"
          }
        ></script>
        <script
          src={
            process.env.PUBLIC_URL +
            "/dist/assets/js/custom/authentication/sign-in/general.js"
          }
        ></script>
      </Helmet>
    </div>
  );
}

export default Login