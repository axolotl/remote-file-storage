import moment from 'moment'

function formatDate(date) {
  return moment(date).format('MMM Do')
}

export default formatDate
