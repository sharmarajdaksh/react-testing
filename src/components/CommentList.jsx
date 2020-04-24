import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
	render() {
		return (
			<div>
				{this.props.comments.map((el) => (
					<li key={el}>{el}</li>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { comments: state.comments };
};

export default connect(mapStateToProps, null)(CommentList);
