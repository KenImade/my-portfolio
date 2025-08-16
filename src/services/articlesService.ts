import { db } from "../config/firebase";
import { Timestamp } from "firebase/firestore";
import {
    collection,
    getDocs,
    where,
    addDoc,
    updateDoc,
    query
} from "firebase/firestore";

interface Article {
    id: string;
    title: string;
    icon: string;
    category: string;
    excerpt: string;
    tags: string[];
    date: string;
    readTime: string;
    isDraft: boolean;
    content: string;
    featured: boolean;
}

const articlesCollection = collection(db, "articles");

export const articlesService = {
    fetchAll: async (): Promise<Article[]> => {
        try {
            // const q = query(articlesCollection, orderBy("date", "desc"));
            const q = query(articlesCollection);
            const snapshot = await getDocs(q);
            return snapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    ...data,
                    date: data.date instanceof Timestamp ? data.date.toDate() : new Date(data.date).toLocaleDateString(),
                } as Article;
            });
        } catch (error) {
            console.error("Error fetching articles:", error);
            return [];
        }
    },

    fetchById: async (id: string): Promise<Article | null> => {
        try {
            const q = query(
                collection(db, "articles"),
                where("id", "==", id)
            );

            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const docSnap = querySnapshot.docs[0];
                console.log('docSnap:', docSnap)
                return { id: docSnap.id, ...docSnap.data() } as Article;
            }

            return null;
        } catch (error) {
            console.error("Error fetching articles:", error);
            return null;
        }
    },

    saveOrUpdate: async (article: Article): Promise<Article | null> => {
        try {
            if (article.id) {
                // Find the document with the matching 'id' field
                const q = query(articlesCollection, where("id", "==", article.id));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const docRef = querySnapshot.docs[0].ref;
                    await updateDoc(docRef, { ...article });
                    return article;
                } else {
                    // If not found, add as new
                    await addDoc(articlesCollection, article);
                    return article;
                }
            } else {
                const docRef = await addDoc(articlesCollection, article);
                return { ...article, id: docRef.id }; // optional: attach Firestore id
            }
        } catch (error) {
            console.error("Error saving/updating article:", error);
            return null;
        }
    }


};

export type { Article };