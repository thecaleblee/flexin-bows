import React from 'react'
import Layout from "../components/Layout"
import data from '../data/programs/better-body.json'

class Page extends React.Component {
  constructor(props) {
    super(props)
  
    // TODO how do I get this first activeTab by default
    this.state = {
      activeTab: 'body-building-1-3'
    }
  
    this.onWorkoutClick = this.onWorkoutClick.bind(this)
  }
  
  onChange(event) {
    event.preventDefault()
    console.log('oh hai, stop')
  }
  
  
  changeTab(id) {
    console.log('changeTab ran')
    this.setState({ activeTab: id })
  }
  
  onWorkoutClick(event) {
    event.preventDefault()
    console.log('oh hai workout click, stop it', event.target.dataset.id)
    console.log(this)
    this.setState({ activeTab: event.target.dataset.id })
  }
  
  render() {
    return (
      <Layout
        data={data}
        activeTab={this.state.activeTab}
        onChange={this.onChange}
        onWorkoutClick={this.onWorkoutClick}
      />
    )
  }
}

export default Page