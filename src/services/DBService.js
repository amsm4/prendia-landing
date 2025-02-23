import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

class DBService {
    static async addSubscriber(email) {
        try {
            var id = null;
            var data = {
                email: email,
                created_at: new Date()
            };
            var subscriberRef = collection(db, "subscribers");
            await addDoc(subscriberRef, data).then((doc) => {
                id = doc.id;
            });
            return id;
        } catch (error) {
            throw new Error('Error saving:', error);
        }
    }
}

export default DBService;