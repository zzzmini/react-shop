import {configureStore, createSlice} from '@reduxjs/toolkit';

// createSlice == useState 역할...

let userName = createSlice({
  name : 'userName',
  initialState : ['kim', 'lee', 'park']
})

let productStock = createSlice({
  name : 'productStock',
  initialState : [11, 8, 2]
})

let cartData = createSlice({
  name : 'cartData',
  initialState : [
    { id:0, title: 'White and Black', count : 2},
    { id:1, title: 'Grey Yordan', count : 1},
  ]
})

let loggindUser = createSlice({
  name : 'loggindUser',
  initialState : 'zzzmini',
  // 수정
  reducers : {
    // state : 원래의 데이터를 의미(zzzmini)
    changeUserName(state){
      return state + '님'
    }
  }
})

export default configureStore({
  reducer : {
    userName : userName.reducer,
    productStock : productStock.reducer,
    cartData : cartData.reducer,
    loggindUser : loggindUser.reducer,
  }
})

export let { changeUserName } = loggindUser.actions;