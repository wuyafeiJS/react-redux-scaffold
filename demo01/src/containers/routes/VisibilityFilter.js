import { connect } from 'react-redux'
import {VisibilityFilter} from 'actions'
import Link from '../../components/Link'


const mapStateToProps = (state,ownProps) => {
  return {
    active: state.VisibilityFilter === ownProps.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    vFilter: () => {
      console.log('dfsdf')
      dispatch(VisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Link)
export default FilterLink