import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  loading: boolean,
  randomWord: string[],
  convertedWord: string[],
  changeOptionBg: number,
  result: string[],
}

const initialState: CounterState = {
  loading: false,
  randomWord: [],
  convertedWord: [],
  changeOptionBg: 0,
  result: [],
}

export const translateSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    gettingWord: (state) => {
      state.loading = true
    },
    getRandom: (state, action) => {
      state.randomWord = action.payload
    },
    getConverted: (state, action) => {
      state.loading = false
      state.convertedWord = action.payload
    },
    setResult: (state, action) => {
      state.result.push(action.payload)
    },
    clearResult: (state) => {
      state.result = []
    },
    clearRandomWords: (state) => {
      state.randomWord = []
    },
    clearConvertedWords: (state) => {
      state.convertedWord = []
    },
    changeBg: (state, action) => {
      state.changeOptionBg = action.payload;
    }
  },
})

export const { getRandom, getConverted, gettingWord, changeBg, setResult, clearResult, clearRandomWords, clearConvertedWords } = translateSlice.actions

export default translateSlice.reducer