import React from 'react'
import CurrencyConverterItem from '../CurrencyConverterItem/CurrencyConverterItem'
import DownloadItem from '../DownloadItem/DownloadItem'
import HomeLoan from '../HomeLoan/HomeLoan'
import UnitConverterItem from '../UnitConverterItem/UnitConverterItem'
import EmiItem from '../EmiItem/EmiItem'

import './AllTools.css'

const AllTools = ({toolsCategory}) => {
  return (
    <div className='container'style={{marginTop:'50px'}}>
      {toolsCategory === "Currency Converter" && <CurrencyConverterItem />}
      {toolsCategory === "Download" && <DownloadItem />}
      {toolsCategory === "EMI" && <EmiItem />}
      {toolsCategory === "Unit Converter" && <UnitConverterItem />}
      {toolsCategory === "Home Loan" && <HomeLoan />}
    </div>
  )
}

export default AllTools