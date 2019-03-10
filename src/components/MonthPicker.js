import React, { Component } from 'react'
import { padLeft, range } from '../utility'
import PropTypes from 'prop-types'

const highLight = (chooseNumber, inputNumber) => {
	return (chooseNumber === inputNumber) ? "dropdown-item active" : "dropdown-item"
}

class MonthPicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			selectedYear: this.props.year,
			selectedMonth: this.props.month
		}
	}

	toggleDropdown = (event) => {
		event.preventDefault()
		this.setState(
			{
				isOpen: !this.state.isOpen
			}
		)
	}

	changeYear = (event, selectedNumber) => {
		event.preventDefault()
		this.setState(
			{
				selectedYear: selectedNumber
			}
		)
	}

	changeMonth = (event, selectedNumber) => {
		event.preventDefault()
		this.setState(
			{
				isOpen: false
			})
		this.props.onChange(this.state.selectedYear, selectedNumber)
	}

	render() {
		const { year, month } = this.props
		const { isOpen, selectedYear, selectedMonth } = this.state
		const monthRange = range(12, 1)
		const yearRange = range(9, -4).map(number => number + year)
		return (
			<div className="dropdown month-picker__component">
				<h4>选择月份</h4>
				<button
					className="btn btn-lg btn-secondary dropdown-toggle"
					onClick={this.toggleDropdown}
				>
					{`${year}年 ${padLeft(month)}月`}
				</button>
				{isOpen &&
					<div className="dropDown-menu">
						<div className="container">
							<div className="row">
								<div className="col-sm border-right border-success">
									{yearRange.map((yearNumber, index) =>
										<a key={index}
											onClick={(event) => {
												this.changeYear(event, yearNumber)
											}}
											href="#"
											className={highLight(yearNumber, selectedYear)}>
											{yearNumber} 年
										</a>
									)
									}
								</div>
								<div className="col-sm">
									{monthRange.map((monthNumber, index) =>
										<a key={index}
											onClick={(event) => { this.changeMonth(event, monthNumber) }}
											href="#"
											className={highLight(monthNumber, selectedMonth)}>
											{padLeft(monthNumber)} 月
										</a>
									)}
								</div>
							</div>
						</div>
					</div>}
			</div>
		)
	}
}

MonthPicker.propTypes = {
	year: PropTypes.number.isRequired,
	month: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
}

export default MonthPicker