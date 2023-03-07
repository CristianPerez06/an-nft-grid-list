import React, { createContext, useContext, useMemo, useReducer, Dispatch } from 'react'

export enum ACTIONS {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}

interface IState {
  isOpen: boolean
  children?: JSX.Element | undefined
}

interface IDispatch {
  type: ACTIONS
  children?: JSX.Element | undefined
}

const initialState: IState = {
  isOpen: false,
  children: undefined,
}

interface IModalContext {
  state: IState | undefined
  dispatch: Dispatch<IDispatch> | undefined
}

const ModalContext = createContext<IModalContext>({ state: undefined, dispatch: undefined })

export const useModalContext = () => useContext(ModalContext)

const ModalContextProvider = (props: any) => {
  const reducer = (state: IState, action: IDispatch) => {
    switch (action.type) {
      case ACTIONS.OPEN:
        return {
          ...state,
          isOpen: true,
          children: action.children,
        }
      case ACTIONS.CLOSE:
        return {
          isOpen: false,
        }
      default:
        return {
          isOpen: false,
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const ModalContextStore = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return <ModalContext.Provider value={ModalContextStore}>{props.children}</ModalContext.Provider>
}

export default ModalContextProvider
