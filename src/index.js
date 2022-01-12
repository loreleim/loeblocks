import { registerBlockType } from '@wordpress/blocks';

import * as carouselBlock from "./carousel";
import * as testimonialBlock from "./testimonials";

const pullMetadata = ( block ) => {

	let { category } = block;

	const { name, settings } = block;

	registerBlockType( name, {
		category,
		...settings,
	} );
};

export const registerBlocks = () => {
	[
    carouselBlock,
    testimonialBlock
	].forEach( pullMetadata );
};

registerBlocks();