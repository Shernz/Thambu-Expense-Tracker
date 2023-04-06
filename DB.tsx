import { initializeApp, applicationDefault, cert } from 'firebase-admin/app'
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore'
import * as store from './Store'
initializeApp();

const db = getFirestore();
const groups = db.collection('groups');
const membership = db.collection('membership');

function getAllGroupsForUser(uid:string) : any {
    const userGroups = membership.doc(uid);
    store.dispatchGroupData('ADD_GROUP', userGroups);
    return userGroups;
}

export default getAllGroupsForUser;



