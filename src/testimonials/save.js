import { Fragment } from '@wordpress/element';

export default function save( { attributes } ) {
return (
    <Fragment>
      <h1>{attributes.header}</h1>
    </Fragment>
	);
}