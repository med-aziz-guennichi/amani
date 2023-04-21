import React from 'react'

const Footer = () => {
  return (
    <div>      {/*begin::Footer*/}
    <div id="kt_app_footer" className="app-footer">
      {/*begin::Footer container*/}
      <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
        {/*begin::Copyright*/}
        <div className="text-dark order-2 order-md-1">
          <span className="text-muted fw-semibold me-1">2023©</span>
          <a href="https://www.axiasolution.com/" target="_blank" className="text-gray-800 text-hover-primary">AxiaSolutions</a>
        </div>
        {/*end::Copyright*/}
        {/*begin::Menu*/}
        <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
          <li className="menu-item">
            <a href="https://keenthemes.com" target="_blank" className="menu-link px-2"></a>
          </li>
          <li className="menu-item">
            <a href="https://devs.keenthemes.com" target="_blank" className="menu-link px-2"></a>
          </li>
          <li className="menu-item">
            <a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2"></a>
          </li>
        </ul>
        {/*end::Menu*/}
      </div>
      {/*end::Footer container*/}
    </div>
    {/*end::Footer*/}</div>
  )
}

export default Footer