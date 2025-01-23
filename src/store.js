import {configureStore, createSlice} from '@reduxjs/toolkit';

// createSlice == useState 역할...

let imsiData = createSlice({
  name : 'imsiData',
  initialState : {
    name : '장원영',
    groupName : '아이브',
    age : 20
  },
  reducers : {
    changeGroup(state){
      state.groupName = '아이브그룹'
    },
    // state : 원래의 값, action : 저쪽에서 넘어온 값
    // padload : 화물, 택배...
    addAge(state, action){
      state.age = state.age + action.payload;
    }
  }
})

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
    { id:2, title: 'Grey Yordan', count : 1},
  ],
  reducers : {
    // action에 현재 선택한 상품의 ID 가 들어온다고 가정
    minusCount(state, action){
      let index = action.payload;
      const findId = state.findIndex((x)=> x.id == index);
      if(state[findId].count > 0) state[findId].count--;
    },
    plusCount(state, action){
      let index = action.payload;
      const findId = state.findIndex((x)=> x.id == index);
      state[findId].count++;
    }
  }
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
    imsiData : imsiData.reducer,
  }
})

export let { changeUserName } = loggindUser.actions;
export let { changeGroup, addAge } = imsiData.actions;
export let { minusCount, plusCount } = cartData.actions;