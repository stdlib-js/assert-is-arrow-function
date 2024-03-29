/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isFunction = require( '@stdlib/assert-is-function' );
var function2string = require( '@stdlib/function-to-string' );


// VARIABLES //

var RE_ARROW_FUNCTION = /^(?:\([^)]*\) *|[^=]*)=>/;


// MAIN //

/**
* Tests whether a value is an arrow function.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether a value is an arrow function
*
* @example
* var arrow = () => {};
* var bool = isArrowFunction( arrow );
* // returns true
*
* @example
* function beep() {
*     return 'beep';
* }
*
* var bool = isArrowFunction( beep );
* // returns false
*/
function isArrowFunction( value ) {
	var str;
	if ( !isFunction( value ) ) {
		return false;
	}
	str = function2string( value );
	return RE_ARROW_FUNCTION.test( str );
}


// EXPORTS //

module.exports = isArrowFunction;
