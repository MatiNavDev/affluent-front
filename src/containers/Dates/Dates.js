import React, { Component } from "react";
import { getDates }  from '../../api'
import './Dates.css';

class Dates extends Component {
  constructor () {
    super()
    this.state = {
      dates: []
    }
  }

  async componentDidMount () {
    try {
      const dates = await getDates()
      this.setState({dates})
    } catch (error) {
      console.log(error)
      this.setState({errors: true})
    }
  }

  render () {
    const { dates } = this.state
    let divs

    if (dates.length)
      divs = dates.map((d, i) => (
        <div className="dates-rows" key={i}>
          <span className="dates-col">{d.date}</span>
          <span className="dates-col">{d.comission}</span>
          <span className="dates-col">{d.sales}</span>
          <span className="dates-col">{d.leads}</span>
          <span className="dates-col">{d.clicks}</span>
          <span className="dates-col">{d.epc}</span>
          <span className="dates-col">{d.impressions}</span>
          <span className="dates-col">{d.cr}</span>
        </div>
      ))
    return (
    <div>
      <div className="dates-rows">
          <span className="dates-col">Dates</span>
          <span className="dates-col">Commissions</span>
          <span className="dates-col">Sales</span>
          <span className="dates-col">Leads</span>
          <span className="dates-col">Clicks</span>
          <span className="dates-col">EPC</span>
          <span className="dates-col">Impressions</span>
          <span className="dates-col">CR</span>
      </div>
      {divs}
    </div>)
  }
}

export default Dates