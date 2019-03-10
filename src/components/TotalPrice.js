import React from 'react'
import PropTypes from 'prop-types'

const TotalPrice = ({ account }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					收入： {account.income}
				</div>
				<div className="col">
					支出： {account.outcome}
				</div>
			</div>
		</div>
	)
}

export default TotalPrice