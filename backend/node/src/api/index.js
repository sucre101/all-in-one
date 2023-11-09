import { Router } from 'express';
import facets from './facets';

export default ({ config, db }) => {
	const router = Router();

	// mount the facets resource
	router.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	router.get('/', (req, res) => {
		res.json({ some: 'shit' });
	});

	return router;
}
