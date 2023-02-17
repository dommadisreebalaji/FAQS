// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="faq-container">
          <h1 className="heading">FAQs</h1>
          <div className="faq-list-items-container">
            <ul className="faq-list">
              {faqsList.map(eachItem => (
                <FaqItem faqDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Faqs
