// import { reactive, inject, provide } from 'vue'

// export const stateSymbol = Symbol('state')
// export const createState = () => reactive({ counter: 0 })

// export const useState = () => inject(stateSymbol)
// export const provideState = () => provide(
//     stateSymbol, 
//     createState()
// )

// export const stateSymbol = Symbol('state');
// export const createState = () => reactive({ counter: 0 });

// export const useState = () => inject(stateSymbol);
// export const provideState = () => provide(
//     stateSymbol, 
//     createState()
// )

// export const createStore = () => {
//     const state = reactive({
//         counter: 0
//     })
//     const increment = () => state.counter++

//     return { increment, state: readonly(state) }
// }