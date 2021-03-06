import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class ExpenseListFilters extends React.Component {
    handleChangeStart = (startDate) => {
        this.props.dispatch(setStartDate(startDate))
    }
    handleChangeEnd = (endDate) => {
        this.props.dispatch(setEndDate(endDate))
    }
    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate())
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount())
                        }
                    }}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DatePicker
                    selected={this.props.filters.startDate}
                    selectsStart
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onChange={this.handleChangeStart}
                    isClearable={true}
                    placeholderText="Start Date"
                />
                <DatePicker
                    selected={this.props.filters.endDate}
                    selectsEnd
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onChange={this.handleChangeEnd}
                    isClearable={true}
                    placeholderText="End Date"
                />
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)