import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Rest from '../components/Rest'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <div
        class="app-wrapper flex-column flex-row-fluid"
        id="kt_app_wrapper"
      ></div>{" "}
      {/*begin::Body*/}
      {/*begin::Theme mode setup on page load*/}
      {/*end::Theme mode setup on page load*/}
      {/*begin::App*/}
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        {/*begin::Page*/}
        <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
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
                <div
                  id="kt_app_toolbar"
                  className="app-toolbar py-3 py-lg-6"
                ></div>
                {/*end::Toolbar*/}
                {/*begin::Content*/}
                <div
                  id="kt_app_content"
                  className="app-content flex-column-fluid"
                >
                  {/*begin::Content container*/}
                  <div
                    id="kt_app_content_container"
                    className="app-container container-fluid"
                  >
                    {/*begin::Row*/}
                    <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                      {/*begin::Col*/}
                      <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                        {/*begin::Card widget 20*/}
                        <div
                          className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-md-50 mb-5 mb-xl-10"
                          style={{
                            backgroundColor: "#F1416C",
                            backgroundImage:
                              'url("assets/media/patterns/vector-1.png")',
                          }}
                        >
                          {/*begin::Header*/}
                          <div className="card-header pt-5">
                            {/*begin::Title*/}
                            <div className="card-title d-flex flex-column">
                              {/*begin::Amount*/}
                              <span className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">
                                40
                              </span>
                              {/*end::Amount*/}
                              {/*begin::Subtitle*/}
                              <span className="text-white opacity-75 pt-1 fw-semibold fs-6">
                                Total clients
                              </span>
                              {/*end::Subtitle*/}
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Header*/}
                          {/*begin::Card body*/}
                          <div className="card-body d-flex align-items-end pt-0">
                            {/*begin::Progress*/}
                            <div className="d-flex align-items-center flex-column mt-3 w-100">
                              <div className="d-flex justify-content-between fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2">
                                <span>43 Pending</span>
                                <span>72%</span>
                              </div>
                              <div className="h-8px mx-3 w-100 bg-white bg-opacity-50 rounded">
                                <div
                                  className="bg-white rounded h-8px"
                                  role="progressbar"
                                  style={{ width: "72%" }}
                                  aria-valuenow={50}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Card body*/}
                        </div>
                        {/*end::Card widget 20*/}
                        {/*begin::Card widget 7*/}
                        <div className="card card-flush h-md-50 mb-5 mb-xl-10">
                          {/*begin::Header*/}
                          <div className="card-header pt-5">
                            {/*begin::Title*/}
                            <div className="card-title d-flex flex-column">
                              {/*begin::Amount*/}
                              <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">
                                10
                              </span>
                              {/*end::Amount*/}
                              {/*begin::Subtitle*/}
                              <span className="text-gray-400 pt-1 fw-semibold fs-6">
                                Commercials
                              </span>
                              {/*end::Subtitle*/}
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Header*/}
                          {/*begin::Card body*/}
                          <div className="card-body d-flex flex-column justify-content-end pe-0">
                            {/*begin::Title*/}
                            <span className="fs-6 fw-bolder text-gray-800 d-block mb-2">
                              Our Commercials
                            </span>
                            {/*end::Title*/}
                            {/*begin::Users group*/}
                            <div className="symbol-group symbol-hover flex-nowrap">
                              <div
                                className="symbol symbol-35px symbol-circle"
                                data-bs-toggle="tooltip"
                                title="Alan Warden"
                              >
                                <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                                  A
                                </span>
                              </div>
                              <div
                                className="symbol symbol-35px symbol-circle"
                                data-bs-toggle="tooltip"
                                title="Michael Eberon"
                              >
                                <img
                                  alt="Pic"
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/dist/assets/media/avatars/300-11.jpg"
                                  }
                                />
                              </div>
                              <div
                                className="symbol symbol-35px symbol-circle"
                                data-bs-toggle="tooltip"
                                title="Susan Redwood"
                              >
                                <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                                  S
                                </span>
                              </div>
                              <div
                                className="symbol symbol-35px symbol-circle"
                                data-bs-toggle="tooltip"
                                title="Melody Macy"
                              >
                                <img
                                  alt="Pic"
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/dist/assets/media/avatars/300-2.jpg"
                                  }
                                />
                              </div>
                              <div
                                className="symbol symbol-35px symbol-circle"
                                data-bs-toggle="tooltip"
                                title="Perry Matthew"
                              >
                                <span className="symbol-label bg-danger text-inverse-danger fw-bold">
                                  P
                                </span>
                              </div>
                              <div
                                className="symbol symbol-35px symbol-circle"
                                data-bs-toggle="tooltip"
                                title="Barry Walter"
                              >
                                <img
                                  alt="Pic"
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/dist/assets/media/avatars/300-12.jpg"
                                  }
                                />
                              </div>
                              <a
                                href="#"
                                className="symbol symbol-35px symbol-circle"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_view_users"
                              >
                                <span className="symbol-label bg-dark text-gray-300 fs-8 fw-bold">
                                  +42
                                </span>
                              </a>
                            </div>
                            {/*end::Users group*/}
                          </div>
                          {/*end::Card body*/}
                        </div>
                        {/*end::Card widget 7*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                        {/*begin::Card widget 17*/}
                        <div className="card card-flush h-md-90 mb-5 mb-xl-10">
                          {/*begin::Header*/}
                          <div className="card-header pt-5">
                            {/*begin::Title*/}
                            <div className="card-title d-flex flex-column">
                              {/*begin::Info*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Currency*/}
                                <span className="fs-4 fw-semibold text-gray-400 me-1 align-self-start"></span>
                                {/*end::Currency*/}
                                {/*begin::Amount*/}
                                <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">
                                  300
                                </span>
                                {/*end::Amount*/}
                                {/*begin::Badge*/}
                                <span className="badge badge-light-success fs-base">
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                  <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x={13}
                                        y={6}
                                        width={13}
                                        height={2}
                                        rx={1}
                                        transform="rotate(90 13 6)"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}2.2%
                                </span>
                                {/*end::Badge*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Subtitle*/}
                              <span className="text-gray-400 pt-1 fw-semibold fs-6">
                                Total Leads
                              </span>
                              {/*end::Subtitle*/}
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Header*/}
                          {/*begin::Card body*/}
                          <div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
                            {/*begin::Chart*/}
                            <div className="d-flex flex-center me-5 pt-2">
                              <div
                                id="kt_card_widget_17_chart"
                                style={{ minWidth: 70, minHeight: 70 }}
                                data-kt-size={70}
                                data-kt-line={11}
                              />
                            </div>
                            {/*end::Chart*/}
                            {/*begin::Labels*/}
                            <div className="d-flex flex-column content-justify-center flex-row-fluid">
                              {/*begin::Label*/}
                              <div className="d-flex fw-semibold align-items-center">
                                {/*begin::Bullet*/}
                                <div className="bullet w-8px h-3px rounded-2 bg-success me-3" />
                                {/*end::Bullet*/}
                                {/*begin::Label*/}
                                <div className="text-gray-500 flex-grow-1 me-4">
                                  Qualified Leads
                                </div>
                                {/*end::Label*/}
                                {/*begin::Stats*/}

                                {/*end::Stats*/}
                              </div>
                              {/*end::Label*/}
                              {/*begin::Label*/}
                              <div className="d-flex fw-semibold align-items-center my-3">
                                {/*begin::Bullet*/}
                                <div className="bullet w-8px h-3px rounded-2 bg-primary me-3" />
                                {/*end::Bullet*/}
                                {/*begin::Label*/}
                                <div className="text-gray-500 flex-grow-1 me-4">
                                  Leads To Contact
                                </div>
                              </div>
                              {/*end::Label*/}
                              {/*begin::Label*/}
                              <div className="d-flex fw-semibold align-items-center">
                                {/*begin::Bullet*/}
                                <div
                                  className="bullet w-8px h-3px rounded-2 me-3"
                                  style={{ backgroundColor: "#E4E6EF" }}
                                />
                                {/*end::Bullet*/}
                                {/*begin::Label*/}
                                <div className="text-gray-500 flex-grow-1 me-4">
                                  Rejected Leads
                                </div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Label*/}
                            </div>
                            {/*end::Labels*/}
                          </div>
                          {/*end::Card body*/}
                        </div>
                        {/*end::Card widget 17*/}
                        {/*begin::List widget 26*/}
                        {/*end::LIst widget 26*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-xxl-6">
                        {/*begin::Engage widget 10*/}
                        {/*begin::List Widget 3*/}
                        <div className="card card-xl-stretch mb-5 mb-xl-8">
                          {/*begin::Header*/}
                          <div className="card-header border-0">
                            <h3 className="card-title fw-bold text-dark">
                              Todo
                            </h3>
                            <div className="card-toolbar">
                              {/*begin::Menu*/}
                              <button
                                type="button"
                                className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                                data-kt-menu-trigger="click"
                                data-kt-menu-placement="bottom-end"
                              >
                                {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={5}
                                        y={5}
                                        width={5}
                                        height={5}
                                        rx={1}
                                        fill="currentColor"
                                      />
                                      <rect
                                        x={14}
                                        y={5}
                                        width={5}
                                        height={5}
                                        rx={1}
                                        fill="currentColor"
                                        opacity="0.3"
                                      />
                                      <rect
                                        x={5}
                                        y={14}
                                        width={5}
                                        height={5}
                                        rx={1}
                                        fill="currentColor"
                                        opacity="0.3"
                                      />
                                      <rect
                                        x={14}
                                        y={14}
                                        width={5}
                                        height={5}
                                        rx={1}
                                        fill="currentColor"
                                        opacity="0.3"
                                      />
                                    </g>
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </button>
                              {/*begin::Menu 3*/}
                              <div
                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                                data-kt-menu="true"
                              >
                                {/*begin::Heading*/}
                                <div className="menu-item px-3">
                                  <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                    Payments
                                  </div>
                                </div>
                                {/*end::Heading*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Create Invoice
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a
                                    href="#"
                                    className="menu-link flex-stack px-3"
                                  >
                                    Create Payment
                                    <i
                                      className="fas fa-exclamation-circle ms-2 fs-7"
                                      data-bs-toggle="tooltip"
                                      title="Specify a target name for future usage and reference"
                                    />
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Generate Bill
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div
                                  className="menu-item px-3"
                                  data-kt-menu-trigger="hover"
                                  data-kt-menu-placement="right-end"
                                >
                                  <a href="#" className="menu-link px-3">
                                    <span className="menu-title">
                                      Subscription
                                    </span>
                                    <span className="menu-arrow" />
                                  </a>
                                  {/*begin::Menu sub*/}
                                  <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Plans
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Billing
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Statements
                                      </a>
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
                                          <input
                                            className="form-check-input w-30px h-20px"
                                            type="checkbox"
                                            defaultValue={1}
                                            defaultChecked="checked"
                                            name="notifications"
                                          />
                                          {/*end::Input*/}
                                          {/*end::Label*/}
                                          <span className="form-check-label text-muted fs-6">
                                            Recuring
                                          </span>
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
                                  <a href="#" className="menu-link px-3">
                                    Settings
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                              </div>
                              {/*end::Menu 3*/}
                              {/*end::Menu*/}
                            </div>
                          </div>
                          {/*end::Header*/}
                          {/*begin::Body*/}
                          <div className="card-body pt-2">
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-8">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-vertical h-40px bg-success" />
                              {/*end::Bullet*/}
                              {/*begin::Checkbox*/}
                              <div className="form-check form-check-custom form-check-solid mx-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                />
                              </div>
                              {/*end::Checkbox*/}
                              {/*begin::Description*/}
                              <div className="flex-grow-1">
                                <a
                                  href="#"
                                  className="text-gray-800 text-hover-primary fw-bold fs-6"
                                >
                                  Meeting with Client X
                                </a>
                                <span className="text-muted fw-semibold d-block">
                                  Due in 2 Days
                                </span>
                              </div>
                              {/*end::Description*/}
                              <span className="badge badge-light-success fs-8 fw-bold">
                                New
                              </span>
                            </div>
                            {/*end:Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-8">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-vertical h-40px bg-primary" />
                              {/*end::Bullet*/}
                              {/*begin::Checkbox*/}
                              <div className="form-check form-check-custom form-check-solid mx-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                />
                              </div>
                              {/*end::Checkbox*/}
                              {/*begin::Description*/}
                              <div className="flex-grow-1">
                                <a
                                  href="#"
                                  className="text-gray-800 text-hover-primary fw-bold fs-6"
                                >
                                  Contact Lead Y
                                </a>
                                <span className="text-muted fw-semibold d-block">
                                  Due in 3 Days
                                </span>
                              </div>
                              {/*end::Description*/}
                              <span className="badge badge-light-primary fs-8 fw-bold">
                                New
                              </span>
                            </div>
                            {/*end:Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-8">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-vertical h-40px bg-warning" />
                              {/*end::Bullet*/}
                              {/*begin::Checkbox*/}
                              <div className="form-check form-check-custom form-check-solid mx-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                />
                              </div>
                              {/*end::Checkbox*/}
                              {/*begin::Description*/}
                              <div className="flex-grow-1">
                                <a
                                  href="#"
                                  className="text-gray-800 text-hover-primary fw-bold fs-6"
                                >
                                  Scoping & Estimations
                                </a>
                                <span className="text-muted fw-semibold d-block">
                                  Due in 5 Days
                                </span>
                              </div>
                              {/*end::Description*/}
                              <span className="badge badge-light-warning fs-8 fw-bold">
                                New
                              </span>
                            </div>
                            {/*end:Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-8">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-vertical h-40px bg-primary" />
                              {/*end::Bullet*/}
                              {/*begin::Checkbox*/}
                              <div className="form-check form-check-custom form-check-solid mx-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                />
                              </div>
                              {/*end::Checkbox*/}
                              {/*begin::Description*/}
                              <div className="flex-grow-1">
                                <a
                                  href="#"
                                  className="text-gray-800 text-hover-primary fw-bold fs-6"
                                >
                                  KPI App Showcase
                                </a>
                                <span className="text-muted fw-semibold d-block">
                                  Due in 2 Days
                                </span>
                              </div>
                              {/*end::Description*/}
                              <span className="badge badge-light-primary fs-8 fw-bold">
                                New
                              </span>
                            </div>
                            {/*end:Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-8">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-vertical h-40px bg-danger" />
                              {/*end::Bullet*/}
                              {/*begin::Checkbox*/}
                              <div className="form-check form-check-custom form-check-solid mx-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                />
                              </div>
                              {/*end::Checkbox*/}
                              {/*begin::Description*/}
                              <div className="flex-grow-1">
                                <a
                                  href="#"
                                  className="text-gray-800 text-hover-primary fw-bold fs-6"
                                >
                                  Project Meeting
                                </a>
                                <span className="text-muted fw-semibold d-block">
                                  Due in 12 Days
                                </span>
                              </div>
                              {/*end::Description*/}
                              <span className="badge badge-light-danger fs-8 fw-bold">
                                New
                              </span>
                            </div>
                            {/*end:Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-vertical h-40px bg-success" />
                              {/*end::Bullet*/}
                              {/*begin::Checkbox*/}
                              <div className="form-check form-check-custom form-check-solid mx-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                />
                              </div>
                              {/*end::Checkbox*/}
                              {/*begin::Description*/}
                              <div className="flex-grow-1">
                                <a
                                  href="#"
                                  className="text-gray-800 text-hover-primary fw-bold fs-6"
                                >
                                  Customers Update
                                </a>
                                <span className="text-muted fw-semibold d-block">
                                  Due in 1 week
                                </span>
                              </div>
                              {/*end::Description*/}
                              <span className="badge badge-light-success fs-8 fw-bold">
                                New
                              </span>
                            </div>
                            {/*end:Item*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end:List Widget 3*/}

                        {/*end::Engage widget 10*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Row*/}
                    {/*begin::Row*/}
                    <div className="row gx-5 gx-xl-10">
                      {/*begin::Col*/}
                      <div className="col-xxl-8 mb-5 mb-xl-10">
                        {/*begin::Tables Widget 9*/}
                        <div className="card mb-5 mb-xl-8">
                          {/*begin::Header*/}
                          <div className="card-header border-0 pt-5">
                            <h3 className="card-title align-items-start flex-column">
                              <span className="card-label fw-bold fs-3 mb-1">
                                Members Statistics
                              </span>
                              <span className="text-muted mt-1 fw-semibold fs-7">
                                Over 500 members
                              </span>
                            </h3>
                            <div
                              className="card-toolbar"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-trigger="hover"
                              title="Click to add a user"
                            >
                              <a
                                href="#"
                                className="btn btn-sm btn-light btn-active-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_invite_friends"
                              >
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                <span className="svg-icon svg-icon-3">
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
                                {/*end::Svg Icon*/}New Member
                              </a>
                            </div>
                          </div>
                          {/*end::Header*/}
                          {/*begin::Body*/}
                          <div className="card-body py-3">
                            {/*begin::Table container*/}
                            <div className="table-responsive">
                              {/*begin::Table*/}
                              <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr className="fw-bold text-muted">
                                    <th className="w-25px">
                                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          defaultValue={1}
                                          data-kt-check="true"
                                          data-kt-check-target=".widget-9-check"
                                        />
                                      </div>
                                    </th>
                                    <th className="min-w-200px">Authors</th>

                                    <th className="min-w-150px">Progress</th>
                                    <th className="min-w-100px text-end">
                                      Actions
                                    </th>
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                                        <input
                                          className="form-check-input widget-9-check"
                                          type="checkbox"
                                          defaultValue={1}
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-45px me-5">
                                          <img
                                            src={
                                              process.env.PUBLIC_URL +
                                              "/dist/assets/media/avatars/300-14.jpg"
                                            }
                                            alt
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="#"
                                            className="text-dark fw-bold text-hover-primary fs-6"
                                          >
                                            Ana Simmons
                                          </a>
                                          <span className="text-muted fw-semibold text-muted d-block fs-7"></span>
                                        </div>
                                      </div>
                                    </td>

                                    <td className="text-end">
                                      <div className="d-flex flex-column w-100 me-2">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-muted me-2 fs-7 fw-bold">
                                            50%
                                          </span>
                                        </div>
                                        <div className="progress h-6px w-100">
                                          <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: "50%" }}
                                            aria-valuenow={50}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        className="card-toolbar"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-trigger="hover"
                                        title="Click to view more"
                                      >
                                        <a
                                          href="#"
                                          className="btn btn-sm btn-light btn-active-primary"
                                          data-bs-toggle="modal"
                                          data-bs-target="#kt_modal_invite_friends"
                                        >
                                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                          <span className="svg-icon svg-icon-3"></span>
                                          {/*end::Svg Icon*/}view more
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                                        <input
                                          className="form-check-input widget-9-check"
                                          type="checkbox"
                                          defaultValue={1}
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-45px me-5">
                                          <img
                                            src={
                                              process.env.PUBLIC_URL +
                                              "/dist/assets/media/avatars/300-2.jpg"
                                            }
                                            alt
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="#"
                                            className="text-dark fw-bold text-hover-primary fs-6"
                                          >
                                            Jessie Clarcson
                                          </a>
                                          <span className="text-muted fw-semibold text-muted d-block fs-7"></span>
                                        </div>
                                      </div>
                                    </td>

                                    <td className="text-end">
                                      <div className="d-flex flex-column w-100 me-2">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-muted me-2 fs-7 fw-bold">
                                            70%
                                          </span>
                                        </div>
                                        <div className="progress h-6px w-100">
                                          <div
                                            className="progress-bar bg-danger"
                                            role="progressbar"
                                            style={{ width: "70%" }}
                                            aria-valuenow={70}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        className="card-toolbar"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-trigger="hover"
                                        title="Click to view more"
                                      >
                                        <a
                                          href="#"
                                          className="btn btn-sm btn-light btn-active-primary"
                                          data-bs-toggle="modal"
                                          data-bs-target="#kt_modal_invite_friends"
                                        >
                                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                          <span className="svg-icon svg-icon-3"></span>
                                          {/*end::Svg Icon*/}view more
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                                        <input
                                          className="form-check-input widget-9-check"
                                          type="checkbox"
                                          defaultValue={1}
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-45px me-5">
                                          <img
                                            src={
                                              process.env.PUBLIC_URL +
                                              "/dist/assets/media/avatars/300-5.jpg"
                                            }
                                            alt
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="#"
                                            className="text-dark fw-bold text-hover-primary fs-6"
                                          >
                                            Lebron Wayde
                                          </a>
                                          <span className="text-muted fw-semibold text-muted d-block fs-7"></span>
                                        </div>
                                      </div>
                                    </td>

                                    <td className="text-end">
                                      <div className="d-flex flex-column w-100 me-2">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-muted me-2 fs-7 fw-bold">
                                            60%
                                          </span>
                                        </div>
                                        <div className="progress h-6px w-100">
                                          <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            style={{ width: "60%" }}
                                            aria-valuenow={60}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        className="card-toolbar"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-trigger="hover"
                                        title="Click to view more"
                                      >
                                        <a
                                          href="#"
                                          className="btn btn-sm btn-light btn-active-primary"
                                          data-bs-toggle="modal"
                                          data-bs-target="#kt_modal_invite_friends"
                                        >
                                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                          <span className="svg-icon svg-icon-3"></span>
                                          {/*end::Svg Icon*/}view more
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                                        <input
                                          className="form-check-input widget-9-check"
                                          type="checkbox"
                                          defaultValue={1}
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-45px me-5">
                                          <img
                                            src={
                                              process.env.PUBLIC_URL +
                                              "/dist/assets/media/avatars/300-20.jpg"
                                            }
                                            alt
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="#"
                                            className="text-dark fw-bold text-hover-primary fs-6"
                                          >
                                            Natali Goodwin
                                          </a>
                                          <span className="text-muted fw-semibold text-muted d-block fs-7"></span>
                                        </div>
                                      </div>
                                    </td>

                                    <td className="text-end">
                                      <div className="d-flex flex-column w-100 me-2">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-muted me-2 fs-7 fw-bold">
                                            50%
                                          </span>
                                        </div>
                                        <div className="progress h-6px w-100">
                                          <div
                                            className="progress-bar bg-warning"
                                            role="progressbar"
                                            style={{ width: "50%" }}
                                            aria-valuenow={50}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        className="card-toolbar"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-trigger="hover"
                                        title="Click to view more"
                                      >
                                        <a
                                          href="#"
                                          className="btn btn-sm btn-light btn-active-primary"
                                          data-bs-toggle="modal"
                                          data-bs-target="#kt_modal_invite_friends"
                                        >
                                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                          <span className="svg-icon svg-icon-3"></span>
                                          {/*end::Svg Icon*/}view more
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                                        <input
                                          className="form-check-input widget-9-check"
                                          type="checkbox"
                                          defaultValue={1}
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-45px me-5">
                                          <img
                                            src={
                                              process.env.PUBLIC_URL +
                                              "/dist/assets/media/avatars/300-23.jpg"
                                            }
                                            alt
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="#"
                                            className="text-dark fw-bold text-hover-primary fs-6"
                                          >
                                            Kevin Leonard
                                          </a>
                                          <span className="text-muted fw-semibold text-muted d-block fs-7"></span>
                                        </div>
                                      </div>
                                    </td>

                                    <td className="text-end">
                                      <div className="d-flex flex-column w-100 me-2">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-muted me-2 fs-7 fw-bold">
                                            90%
                                          </span>
                                        </div>
                                        <div className="progress h-6px w-100">
                                          <div
                                            className="progress-bar bg-info"
                                            role="progressbar"
                                            style={{ width: "90%" }}
                                            aria-valuenow={90}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        className="card-toolbar"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-trigger="hover"
                                        title="Click to view more"
                                      >
                                        <a
                                          href="#"
                                          className="btn btn-sm btn-light btn-active-primary"
                                          data-bs-toggle="modal"
                                          data-bs-target="#kt_modal_invite_friends"
                                        >
                                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                          <span className="svg-icon svg-icon-3"></span>
                                          {/*end::Svg Icon*/}view more
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*begin::Body*/}
                        </div>
                        {/*end::Tables Widget 9*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-xl-4">
                        {/*begin::List Widget 6*/}
                        <div className="card card-xl-stretch mb-5 mb-xl-8">
                          {/*begin::Header*/}
                          <div className="card-header border-0">
                            <h3 className="card-title fw-bold text-dark">
                              Notifications
                            </h3>
                            <div className="card-toolbar">
                              {/*begin::Menu*/}
                              <button
                                type="button"
                                className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                                data-kt-menu-trigger="click"
                                data-kt-menu-placement="bottom-end"
                              >
                                {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={5}
                                        y={5}
                                        width={5}
                                        height={5}
                                        rx={1}
                                        fill="currentColor"
                                      />
                                      <rect
                                        x={14}
                                        y={5}
                                        width={5}
                                        height={5}
                                        rx={1}
                                        fill="currentColor"
                                        opacity="0.3"
                                      />
                                      <rect
                                        x={5}
                                        y={14}
                                        width={5}
                                        height={5}
                                        rx={1}
                                        fill="currentColor"
                                        opacity="0.3"
                                      />
                                      <rect
                                        x={14}
                                        y={14}
                                        width={5}
                                        height={5}
                                        rx={1}
                                        fill="currentColor"
                                        opacity="0.3"
                                      />
                                    </g>
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </button>
                              {/*begin::Menu 3*/}
                              <div
                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                                data-kt-menu="true"
                              >
                                {/*begin::Heading*/}
                                <div className="menu-item px-3">
                                  <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                    Payments
                                  </div>
                                </div>
                                {/*end::Heading*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Create Invoice
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a
                                    href="#"
                                    className="menu-link flex-stack px-3"
                                  >
                                    Create Payment
                                    <i
                                      className="fas fa-exclamation-circle ms-2 fs-7"
                                      data-bs-toggle="tooltip"
                                      title="Specify a target name for future usage and reference"
                                    />
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Generate Bill
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div
                                  className="menu-item px-3"
                                  data-kt-menu-trigger="hover"
                                  data-kt-menu-placement="right-end"
                                >
                                  <a href="#" className="menu-link px-3">
                                    <span className="menu-title">
                                      Subscription
                                    </span>
                                    <span className="menu-arrow" />
                                  </a>
                                  {/*begin::Menu sub*/}
                                  <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Plans
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Billing
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Statements
                                      </a>
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
                                          <input
                                            className="form-check-input w-30px h-20px"
                                            type="checkbox"
                                            defaultValue={1}
                                            defaultChecked="checked"
                                            name="notifications"
                                          />
                                          {/*end::Input*/}
                                          {/*end::Label*/}
                                          <span className="form-check-label text-muted fs-6">
                                            Recuring
                                          </span>
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
                                  <a href="#" className="menu-link px-3">
                                    Settings
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                              </div>
                              {/*end::Menu 3*/}
                              {/*end::Menu*/}
                            </div>
                          </div>
                          {/*end::Header*/}
                          {/*begin::Body*/}
                          <div className="card-body pt-0">
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center bg-light-warning rounded p-5 mb-7">
                              {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                              <span className="svg-icon svg-icon-warning svg-icon-1 me-5">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.3"
                                    d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                              {/*begin::Title*/}
                              <div className="flex-grow-1 me-2">
                                <a
                                  href="#"
                                  className="fw-bold text-gray-800 text-hover-primary fs-6"
                                >
                                  Group lunch celebration
                                </a>
                                <span className="text-muted fw-semibold d-block">
                                  Due in 2 Days
                                </span>
                              </div>
                              {/*end::Title*/}
                              {/*begin::Lable*/}
                              <span className="fw-bold text-warning py-1">
                                +28%
                              </span>
                              {/*end::Lable*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center bg-light-success rounded p-5 mb-7">
                              {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                              <span className="svg-icon svg-icon-success svg-icon-1 me-5">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.3"
                                    d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                              {/*begin::Title*/}
                              <div className="flex-grow-1 me-2">
                                <a
                                  href="#"
                                  className="fw-bold text-gray-800 text-hover-primary fs-6"
                                >
                                  Navigation optimization
                                </a>
                                <span className="text-muted fw-semibold d-block">
                                  Due in 2 Days
                                </span>
                              </div>
                              {/*end::Title*/}
                              {/*begin::Lable*/}
                              <span className="fw-bold text-success py-1">
                                +50%
                              </span>
                              {/*end::Lable*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center bg-light-danger rounded p-5 mb-7">
                              {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                              <span className="svg-icon svg-icon-danger svg-icon-1 me-5">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.3"
                                    d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                              {/*begin::Title*/}
                              <div className="flex-grow-1 me-2">
                                <a
                                  href="#"
                                  className="fw-bold text-gray-800 text-hover-primary fs-6"
                                >
                                  Rebrand strategy planning
                                </a>
                                <span className="text-muted fw-semibold d-block">
                                  Due in 5 Days
                                </span>
                              </div>
                              {/*end::Title*/}
                              {/*begin::Lable*/}
                              <span className="fw-bold text-danger py-1">
                                -27%
                              </span>
                              {/*end::Lable*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center bg-light-info rounded p-5">
                              {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                              <span className="svg-icon svg-icon-info svg-icon-1 me-5">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.3"
                                    d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                              {/*begin::Title*/}
                              <div className="flex-grow-1 me-2">
                                <a
                                  href="#"
                                  className="fw-bold text-gray-800 text-hover-primary fs-6"
                                >
                                  Product goals strategy
                                </a>
                                <span className="text-muted fw-semibold d-block">
                                  Due in 7 Days
                                </span>
                              </div>
                              {/*end::Title*/}
                              {/*begin::Lable*/}
                              <span className="fw-bold text-info py-1">
                                +8%
                              </span>
                              {/*end::Lable*/}
                            </div>
                            {/*end::Item*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::List Widget 6*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Row*/}
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
      {/*begin::Javascript*/}
      {/*begin::Global Javascript Bundle(mandatory for all pages)*/}
      {/*end::Global Javascript Bundle*/}
      {/*begin::Vendors Javascript(used for this page only)*/}
      {/*end::Vendors Javascript*/}
      {/*begin::Custom Javascript(used for this page only)*/}
      {/*end::Custom Javascript*/}
      {/*end::Javascript*/}
      {/*end::Body*/}
      <div />
    </div>
  );
}

export default Home