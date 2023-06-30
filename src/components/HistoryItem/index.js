import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onRemoveHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-item-container1">
      <div className="history-item-container2">
        <p className="history-time">{timeAccessed}</p>

        <div className="history-item-container3">
          <img
            src={logoUrl}
            alt="domain logo"
            className="history-domain-logo"
          />

          <div className="history-item-container4">
            <p className="history-title">{title}</p>

            <p className="history-domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>

      <button
        className="history-delete-btn"
        type="button"
        onClick={onRemoveHistory}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="history-delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
