<?php
/**
 * Plugin Name:       Loeblocks
 * Description:       Lightweight Gutenberg Blocks
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Lorelei M.
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       loeblocks
 *
 * @package           create-block
 */


function initializeLoeBlocks() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'initializeLoeBlocks' );