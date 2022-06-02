import express from 'express';
import msIdExpress from 'microsoft-identity-express'

const appSettings = {
    appCredentials: {
        clientId:  process.env.CLIENT_ID,
    	tenantId:  process.env.TENANT_ID,
    	clientSecret:  process.env.CLIENT_SECRET
	},
	authRoutes: {
        redirect: "examplesite.me/redirect", //note: you can explicitly make this "localhost:3000/redirect" or "examplesite.me/redirect"
    	error: "/error", // the wrapper will redirect to this route in case of any error.
    	unauthorized: "/unauthorized" // the wrapper will redirect to this route in case of unauthorized access attempt.
	}
};
var router = express.Router();
// Setup web authentication
const msid = new msIdExpress.WebAppAuthClientBuilder(appSettings).build();
router.use(msid.initialize());


router.get('/signin',
    msid.signIn({postLoginRedirect: '/'})
)

router.get('/signout',
    msid.signOut({postLogoutRedirect: '/'})
)

/* GET unauthorized. */
router.get('/unauthorized', function (req, res, next) {
    res.send("Unauthorized");
});

/* GET error. */
router.get('/error', function (req, res, next) {
    res.send("Server error");
});

export default router;