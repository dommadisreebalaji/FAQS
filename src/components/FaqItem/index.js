// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  toggleButton = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const buttonImgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const buttonAlt = isActive ? 'minus' : 'plus'
    return (
      <li className="faq-item">
        <div className="faq-item-container">
          <h1 className="question-text">{questionText}</h1>
          {isActive && <p className="answer-text">{answerText}</p>}
        </div>
        <div className="button-container">
          <button className="button" type="button" onClick={this.toggleButton}>
            <img src={buttonImgUrl} alt={buttonAlt} className="image" />
          </button>
        </div>
      </li>
    )
  }
}

export default FaqItem
