import { all, put, takeLatest } from 'redux-saga/effects';
import {
  fetchAllPostsFailure,
  fetchAllPostsRequest,
  fetchAllPostsSuccess,
  Post,
  userPostFailure,
  userPostRequest,
  userPostSuccess,
} from '@/store/reducers/postsSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { auth, db, storage } from '@/helpers/firebase';
import { ref, getDownloadURL, uploadString } from '@firebase/storage';
import { editProfileSuccess } from '@/store/reducers/authSlice';
import { fetchAllUsersSaga } from '../fetchAllUser';
import { fetchAllUsersSuccess } from '@/store/reducers/usersSlice';

interface UserPost {
  caption: string;
  selectedFile: string;
  userUid: string;
}

interface CommentReply {
  user: string;
  content: string;
  date: any;
  likes: string[];
  dislikes: string[];
}
interface Commentz {
  user: string;
  content: string;
  date: any;
  likes: string[];
  dislikes: string[];
  reply: CommentReply[];
}
interface Comment {
  comment: Commentz[];
  id: string;
}
interface IndividualPost {
  id: string;
  userPost: string;
  imageURL: string;
  caption: string;
  likes: string[];
  dislikes: string[];
  comment: Comment[];
  date: any;
}

function* onUserPost(): any {
  let allUsers: any[] = [];
  let allPosts: any[] = [];
  let allComments: Comment[] = [];
  let resultComments: Comment[] = [];
  let resultPosts: any[] = [];
  try {
    // !get all users
    const usersRef = collection(db, 'users');
    const usersSnap = yield getDocs(usersRef);
    usersSnap.forEach((doc: any) => {
      allUsers.push(doc.data());
    });
    // !get all comments
    const commentsRef = collection(db, 'comments');
    const commentsSnap = yield getDocs(commentsRef);
    commentsSnap.forEach((doc: any) => {
      allComments.push(doc.data());
    });
    // !get all posts

    const postsRef = collection(db, 'posts');
    const postsSnap = yield getDocs(postsRef);
    postsSnap.forEach((doc: any) => {
      allPosts.push(doc.data());
    });
    resultPosts = JSON.parse(JSON.stringify(allPosts));
    resultComments = JSON.parse(JSON.stringify(allComments));

    resultComments.forEach((individualComment) => {
      if (individualComment.comment) {
        individualComment.comment.forEach((comment) => {
          allUsers.forEach((user) => {
            if (comment.user === user.userUid) {
              comment.user = user;
            }
            if (comment.likes && comment.likes.includes(user.userUid)) {
              const indexE = comment.likes.indexOf(user.userUid);
              comment.likes[indexE] = user;
            }
            if (comment.dislikes && comment.dislikes.includes(user.userUid)) {
              const indexE = comment.dislikes.indexOf(user.userUid);
              comment.dislikes[indexE] = user;
            }
            if (comment.reply) {
              comment.reply.forEach((rep) => {
                if (rep.user === user.userUid) {
                  rep.user = user;
                }
                if (rep.likes && rep.likes.includes(user.userUid)) {
                  const indexE = rep.likes.indexOf(user.userUid);
                  rep.likes[indexE] = user;
                }
                if (rep.dislikes && rep.dislikes.includes(user.userUid)) {
                  const indexE = rep.dislikes.indexOf(user.userUid);
                  rep.dislikes[indexE] = user;
                }
              });
            }
          });
        });
      }
    });

    // resultComments.forEach((comment: any) => {
    //   comment.forEach((commentz: any) => {
    //     allUsers.forEach((user) => {
    //       if (commentz.user === user.userUid) {
    //         commentz.user = user;
    //       }
    //       if (commentz.likes.includes(user.userUid)) {
    //         const indexE = commentz.likes.indexOf(user.userUid);
    //         commentz.likes[indexE] = user;
    //       }
    //       if (commentz.dislikes.includes(user.userUid)) {
    //         const indexE = commentz.dislikes.indexOf(user.userUid);
    //         commentz.dislikes[indexE] = user;
    //       }
    //       commentz.reply.forEach((rep: any) => {
    // if (rep.user === user.userUid) {
    //   rep.user = user;
    // }
    // if (rep.likes.includes(user.userUid)) {
    //   const indexE = rep.likes.indexOf(user.userUid);
    //   rep.likes[indexE] = user;
    // }
    // if (rep.dislikes.includes(user.userUid)) {
    //   const indexE = rep.dislikes.indexOf(user.userUid);
    //   rep.dislikes[indexE] = user;
    //         }
    //       });
    //     });
    //   });
    // });

    // console.log('comments', allComments);
    // console.log('users', allUsers);
    // console.log('posts', allPosts);

    resultPosts.forEach((post) => {
      allUsers.forEach((user) => {
        if (post.user === user.userUid) {
          post.user = user;
        }
        if (post.likes.includes(user.userUid)) {
          const indexE = post.likes.indexOf(user.userUid);
          post.likes[indexE] = user;
        }
        if (post.dislikes.includes(user.userUid)) {
          const indexE = post.dislikes.indexOf(user.userUid);
          post.dislikes[indexE] = user;
        }
      });
      resultComments.forEach((comment) => {
        if (post.id === comment.id) {
          post.comment = comment;
        }
      });
    });
    console.log('rs', resultPosts);

    yield put(fetchAllPostsSuccess(resultPosts));
    // yield put(fetchAllUsersSuccess(allUsers));
  } catch (err) {
    yield put(fetchAllPostsFailure(err));
  }
}

export function* fetchAllPostsSaga() {
  yield takeLatest(fetchAllPostsRequest.toString(), onUserPost);
}
