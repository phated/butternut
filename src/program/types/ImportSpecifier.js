import Node from '../Node.js';

export default class ImportSpecifier extends Node {
	initialise ( scope ) {
		this.local.declaration = this;

		scope.addDeclaration( this.local, 'import' );
		super.initialise( scope );
	}
}
