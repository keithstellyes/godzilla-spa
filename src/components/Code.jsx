import React from 'react'

export default (props) => {
	return (<>
		<h2>{props.title}</h2>
		<pre style={{'background-color':'#D3D3D3'}}>{props.text}</pre>
	</>);
}