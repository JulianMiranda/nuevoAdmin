import React from 'react';
import {Link} from 'react-admin';

import FullNameField from './FullNameField';

const UserLinkField = (props) =>
	props.record ? (
		<Link to={`/users/${props.record.id}`}>
			<FullNameField {...props} />
		</Link>
	) : null;

UserLinkField.defaultProps = {
	source: 'name',
	addLabel: true,
};

export default UserLinkField;
