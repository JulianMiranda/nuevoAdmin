import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const AvatarField = ({record}) => {
	console.log(record);
	return record && record.images ? (
		<Avatar
			src={record.images[0].url}
			style={{
				width: parseInt(25, 15),
				height: parseInt(25, 15),
				marginRight: -30
			}}
		/>
	) : null;
};

export default AvatarField;
