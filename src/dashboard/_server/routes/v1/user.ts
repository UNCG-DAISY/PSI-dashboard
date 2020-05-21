/*
    User related Api calls
*/

import express from 'express'

import {
    //getUserRoles,
    findUser,
    //checkUserRoles,
    createNewUser,
    allowedPages,
    getAssignedImage,
} from '../../controllers/v1/user'

import {
    ensureAuthenticated
} from '../../middleware/v1/isAuthenticated'

// "/api/v1/users/"
const router = express.Router();

//Get a user by post data sent
router
    .route('/findUser')
    .post(findUser)

//Gets all roles of a user
// router
//     .route('/getRoles')
//     .post(getUserRoles)

//Checks if a given user id is able to access certain features
// router
//     .route('/auth/:id')
//     .post(checkUserRoles)

//Creates a user with just id and displayName and creation date
//This is at _app.js
router
    .route('/createUser')
    .post(createNewUser)

router
    .route('/allowedPages/:id')
    .get(ensureAuthenticated,allowedPages)

router
    .route('/getImage/:archive')
    .get(getAssignedImage)

// router
//     .route('/TEST_nextImage/:archive')
//     .get(updatedTaggedImages)

export default router;